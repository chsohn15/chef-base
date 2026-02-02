import { Search, ChefHat, EyeOff, Eye, Calendar } from 'lucide-react';
import SpoonTag from './SpoonTag';

export default function Header({
  onNavigateHome,
  globalSearchQuery,
  onSearchChange,
  isGlobalSearchActive,
  searchResults,
  onSelectChef,
  onOpenItinerary,
  itineraryCount,
  hideSpoilers,
  onToggleSpoilers,
}) {
  return (
    <header className="sticky top-0 z-[100] bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-neutral-900 p-4 px-6 flex items-center justify-between">
      <div onClick={onNavigateHome} className="flex items-center gap-2 cursor-pointer group">
        <div className="bg-blue-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
          <ChefHat className="text-white" size={20} />
        </div>
        <span className="font-black tracking-tighter text-xl uppercase italic">Chefbase</span>
      </div>

      <div className="relative flex-1 max-md mx-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={18} />
        <input
          type="text"
          placeholder="Search masters..."
          className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl py-2.5 pl-12 pr-4 text-sm outline-none focus:border-blue-500 transition-colors"
          value={globalSearchQuery}
          onChange={(e) => {
            onSearchChange(e.target.value);
          }}
        />
        {isGlobalSearchActive && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-[110]">
            {searchResults.length > 0 ? (
              searchResults.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onSelectChef(c.id)}
                  className="w-full flex items-center gap-4 p-3 hover:bg-white/5 text-left border-b border-neutral-800 last:border-0"
                >
                  <img src={c.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                  <div>
                    <p className="font-bold text-sm">{c.moniker || c.real_name}</p>
                    <div className="mt-1">
                      <SpoonTag type={c.class} />
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-4 text-xs text-neutral-500 italic">No masters found...</div>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-2 items-center">
        <button
          onClick={onOpenItinerary}
          className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-2xl text-neutral-500 hover:text-white transition-colors relative"
        >
          <Calendar size={18} />
          {itineraryCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-[8px] font-black flex items-center justify-center text-white">
              {itineraryCount}
            </span>
          )}
        </button>
        <button
          onClick={onToggleSpoilers}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border transition-all ${
            hideSpoilers ? 'bg-amber-500 text-black border-amber-400 font-bold' : 'bg-neutral-900 text-neutral-400 border-neutral-800'
          }`}
        >
          {hideSpoilers ? <EyeOff size={14} /> : <Eye size={14} />}
          <span className="hidden sm:inline text-[10px] uppercase font-black tracking-widest">Spoilers</span>
        </button>
      </div>
    </header>
  );
}
