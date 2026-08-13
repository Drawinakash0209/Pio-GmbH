"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";

type ContentMap = Record<string, string>;

interface EditableContextValue {
  editMode: boolean;
  toggleEditMode: () => void;
  isAdmin: boolean;
  content: ContentMap;
  setContent: (id: string, value: string) => Promise<void>;
  resetField: (id: string) => Promise<void>;
  resetAll: () => Promise<void>;
  logout: () => Promise<void>;
}

const EditableContext = createContext<EditableContextValue | undefined>(undefined);

export function EditableProvider({
  children,
  initialContent,
  isAdmin,
}: {
  children: React.ReactNode;
  initialContent: ContentMap;
  isAdmin: boolean;
}) {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [content, setContentState] = useState<ContentMap>(initialContent);

  const setContent = useCallback(async (id: string, value: string) => {
    let previous: string | undefined;
    setContentState((prev) => {
      previous = prev[id];
      return { ...prev, [id]: value };
    });
    const res = await fetch("/api/content", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, value }),
    });
    if (!res.ok) {
      // Revert the optimistic update if the server rejected it (e.g. session expired).
      setContentState((prev) => {
        const next = { ...prev };
        if (previous === undefined) delete next[id];
        else next[id] = previous;
        return next;
      });
    }
  }, []);

  const resetField = useCallback(async (id: string) => {
    setContentState((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    await fetch(`/api/content?id=${encodeURIComponent(id)}`, { method: "DELETE" });
  }, []);

  const resetAll = useCallback(async () => {
    setContentState({});
    await fetch("/api/content", { method: "DELETE" });
  }, []);

  const toggleEditMode = useCallback(() => {
    setEditMode((v) => (isAdmin ? !v : false));
  }, [isAdmin]);

  const logout = useCallback(async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setEditMode(false);
    router.push("/");
    router.refresh();
  }, [router]);

  return (
    <EditableContext.Provider
      value={{
        editMode: editMode && isAdmin,
        toggleEditMode,
        isAdmin,
        content,
        setContent,
        resetField,
        resetAll,
        logout,
      }}
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
