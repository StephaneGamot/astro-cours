export default function Loading() {
  return (
    <main
      id="main-content"
      className="flex min-h-[60vh] items-center justify-center"
    >
      {/* Pas de texte : ce fallback peut être flushé dans le HTML SSR
          (shell de streaming) et le texte serait indexable — audit 07/2026. */}
      <div
        role="status"
        aria-label="Chargement"
        className="h-10 w-10 animate-spin rounded-full border-4 border-violet-500/30 border-t-violet-500"
      />
    </main>
  );
}
