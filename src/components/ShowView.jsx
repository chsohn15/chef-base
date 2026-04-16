import { ChevronLeft, Layers } from 'lucide-react';
import SpoonTag from './SpoonTag';
import RankBadge from './RankBadge';

export default function ShowView({
  show,
  selectedSeasonNum,
  onSeasonChange,
  onNavigateHome,
  chefsInShow,
  onSelectChef,
  hideSpoilers,
}) {
  if (!show) return null;

  const currentSeasonName = show.seasons.find((s) => s.number === selectedSeasonNum)?.name || 'Competition';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <button
            onClick={onNavigateHome}
            className="mb-6 text-neutral-500 flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
          >
            <ChevronLeft size={16} /> All Shows
          </button>
          <h1 className="text-6xl font-black uppercase tracking-tighter text-white leading-none">{show.title}</h1>
        </div>

        <div className="flex bg-neutral-900 p-1.5 rounded-2xl border border-neutral-800 self-start md:self-auto">
          {show.seasons.map((season) => (
            <button
              key={season.number}
              onClick={() => onSeasonChange(season.number)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                selectedSeasonNum === season.number ? 'bg-blue-600 text-white shadow-lg' : 'text-neutral-500 hover:text-white'
              }`}
            >
              Season {season.number}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12 p-8 bg-neutral-900/30 border border-neutral-800 rounded-[32px]">
        <div className="flex items-center gap-3 text-blue-500 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
          <Layers size={14} />
          {currentSeasonName}
        </div>
        <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">{show.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {chefsInShow.map((chef) => (
          <div
            key={chef.id}
            onClick={() => onSelectChef(chef.id)}
            className="bg-neutral-900 rounded-[32px] overflow-hidden group border border-neutral-800 hover:border-blue-500 transition-all cursor-pointer flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={chef.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-3 group-hover:text-blue-500 transition-colors">
                  {chef.moniker || chef.real_name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SpoonTag type={chef.class} />
                  {!hideSpoilers && chef.rank && <RankBadge rank={chef.rank} />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
