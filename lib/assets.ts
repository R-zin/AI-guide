/**
 * Resolves static asset paths taking into account Next.js basePath and GitHub Pages subpaths.
 */
export function getAssetPath(path: string | undefined): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  // 1. Build-time environment variable
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // 2. Runtime fallback for GitHub Pages if build-time variable was not passed
  if (!basePath && typeof window !== "undefined") {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const knownTopRoutes = ["chapters", "practice", "formulas", "glossary", "mock-exam", "search"];
    if (pathParts.length > 0 && !knownTopRoutes.includes(pathParts[0])) {
      basePath = `/${pathParts[0]}`;
    }
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (basePath && cleanPath.startsWith(basePath)) {
    return cleanPath;
  }
  return `${basePath}${cleanPath}`;
}
