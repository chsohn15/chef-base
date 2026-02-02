import { Trophy, Medal } from 'lucide-react';

export default function RankBadge({ rank }) {
  if (rank === "Winner") {
    return (
      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)]">
        <Trophy size={12} /> Winner
      </span>
    );
  }
  if (rank === "Runner-up") {
    return (
      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-neutral-300 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        <Medal size={12} /> Runner-up
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-neutral-800 text-neutral-400 text-[10px] font-black uppercase tracking-widest rounded-full">
      {rank}
    </span>
  );
}
