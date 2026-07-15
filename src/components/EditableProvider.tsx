"use client";

import { createContext, useCallback, useContext, useState, useSyncExternalStore } from "react";

type ContentMap = Record<string, string>;

const STORAGE_KEY = "pio-gmbh-content-v1";
const EMPTY_CONTENT: ContentMap = {};

let store: ContentMap = EMPTY_CONTENT;
let storeLoaded = false;
const listeners = new Set<() => void>();

function loadStore(): ContentMap {
  if (storeLoaded) return store;
  storeLoaded = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) store = JSON.parse(raw);
  } catch {
    // localStorage may be unavailable (private browsing, etc.) — fall back to defaults.
  }
  return store;
}

function persistStore(next: ContentMap) {
  store = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // localStorage may be unavailable — edits still work for this session.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return loadStore();
}

function getServerSnapshot() {
  return EMPTY_CONTENT;
}

interface EditableContextValue {
  editMode: boolean;
  toggleEditMode: () => void;
  content: ContentMap;
  setContent: (id: string, value: string) => void;
  resetField: (id: string) => void;
  resetAll: () => void;
}

const EditableContext = createContext<EditableContextValue | undefined>(undefined);

export function EditableProvider({ children }: { children: React.ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  // Synchronizes with the localStorage-backed store; returns EMPTY_CONTENT on
  // the server and during hydration, then the real content once mounted —
  // React handles that divergence natively, no effect/setState needed.
  const content = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setContent = useCallback((id: string, value: string) => {
    persistStore({ ...loadStore(), [id]: value });
  }, []);

  const resetField = useCallback((id: string) => {
    const next = { ...loadStore() };
    delete next[id];
    persistStore(next);
  }, []);

  const resetAll = useCallback(() => {
    persistStore({});
  }, []);

  const toggleEditMode = useCallback(() => setEditMode((v) => !v), []);

  return (
    <EditableContext.Provider
      value={{ editMode, toggleEditMode, content, setContent, resetField, resetAll }}
    >
      {children}
    </EditableContext.Provider>
  );
}

export function useEditable() {
  const ctx = useContext(EditableContext);
  if (!ctx) throw new Error("useEditable must be used within an EditableProvider");
  return ctx;
}
