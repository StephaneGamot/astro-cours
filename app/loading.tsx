export default function Loading() {
  return (
    <main id="main-content" className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-500/30 border-t-violet-500" />
        <p className="text-sm text-slate-400">Chargement…</p>
      </div>
    </main>
  );
}
