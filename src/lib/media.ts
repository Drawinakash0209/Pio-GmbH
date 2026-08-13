// Content values are plain URLs (e.g. a Vercel Blob URL ending in ".mp4", or a
// remote image URL with no extension at all) — the file extension is the only
// signal we have for whether a media field should render as <video> or <img>.
const VIDEO_EXTENSIONS = new Set(["mp4", "webm", "mov", "ogg", "ogv"]);

export function isVideoSrc(src: string): boolean {
  const path = src.split(/[?#]/)[0];
  const ext = path.split(".").pop()?.toLowerCase();
  return Boolean(ext && VIDEO_EXTENSIONS.has(ext));
}
