export default function SpoonTag({ type }) {
  if (type === "Black Spoon") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white border border-neutral-700 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl">
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        Black Spoon
      </span>
    );
  }
  if (type === "White Spoon") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-neutral-100 to-neutral-300 text-black border border-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl">
        <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
        White Spoon
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
      {type}
    </span>
  );
}
