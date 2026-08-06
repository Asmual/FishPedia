// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-3">
      {/* Spinner */}
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
      
      {/* Loading Text */}
      <p className="text-sm font-medium text-slate-500 animate-pulse">
        loading...
      </p>
    </div>
  );
}