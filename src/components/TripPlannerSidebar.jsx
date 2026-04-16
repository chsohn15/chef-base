import { useState, useMemo } from 'react';
import { X, ExternalLink, Trash2, Search, Plus, Check } from 'lucide-react';

export default function TripPlannerSidebar({ isOpen, onClose, itinerary, onToggleItinerary, allChefs }) {
  const [activeTab, setActiveTab] = useState('trip');
  const [query, setQuery] = useState('');

  const filteredRestaurants = useMemo(() => {
    const q = query.toLowerCase();
    const results = [];
    for (const chef of allChefs) {
      for (const res of chef.restaurants) {
        if (
          !q ||
          res.name.toLowerCase().includes(q) ||
          res.location?.toLowerCase().includes(q) ||
          res.cuisine?.toLowerCase().includes(q) ||
          (chef.moniker || chef.real_name).toLowerCase().includes(q)
        ) {
          results.push({ res, chef });
        }
      }
    }
    return results;
  }, [query, allChefs]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <aside className="relative w-full max-w-sm bg-neutral-950 border-l border-neutral-800 h-full flex flex-col animate-in slide-in-from-right duration-300">

        {/* Header */}
        <div className="flex justify-between items-center p-8 pb-0">
          <h2 className="text-2xl font-black uppercase italic tracking-tighter">Your Trip</h2>
          <button onClick={onClose} className="p-2 hover:bg-neutral-900 rounded-lg" aria-label="Close">
            <X />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mx-8 mt-6 bg-neutral-900 p-1 rounded-xl border border-neutral-800">
          {['trip', 'browse'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab ? 'bg-white text-black' : 'text-neutral-500 hover:text-white'
              }`}
            >
              {tab === 'trip' ? `Your Trip${itinerary.length > 0 ? ` · ${itinerary.length}` : ''}` : 'Browse'}
            </button>
          ))}
        </div>

        {/* Trip tab */}
        {activeTab === 'trip' && (
          <div className="flex-1 overflow-y-auto p-8 space-y-4">
            {itinerary.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <p className="opacity-30 italic text-sm">No spots added yet.</p>
                <button
                  onClick={() => setActiveTab('browse')}
                  className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:text-blue-400 transition-colors"
                >
                  Browse restaurants →
                </button>
              </div>
            ) : (
              itinerary.map((item) => (
                <div
                  key={item.uid}
                  className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl flex justify-between items-center group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-black text-sm uppercase leading-none">{item.name}</h4>
                      {item.website_url && item.website_url !== '#' && (
                        <a href={item.website_url} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-blue-500">
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                    <p className="text-[10px] text-neutral-500 uppercase font-bold mt-1">{item.chefName}</p>
                  </div>
                  <button
                    onClick={() => onToggleItinerary(item, { moniker: item.chefName, real_name: item.chefName })}
                    className="text-neutral-600 hover:text-red-500 transition-colors p-2 opacity-0 group-hover:opacity-100"
                    aria-label="Remove from trip"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {/* Browse tab */}
        {activeTab === 'browse' && (
          <div className="flex-1 overflow-y-auto flex flex-col min-h-0">
            <div className="px-8 pt-4 pb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={14} />
                <input
                  type="text"
                  placeholder="Restaurant, chef, city, cuisine..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-2.5 pl-9 pr-4 text-xs outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600"
                  autoFocus
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-8 pb-8 space-y-2">
              {filteredRestaurants.length === 0 ? (
                <p className="text-center py-12 opacity-30 italic text-sm">No restaurants found.</p>
              ) : (
                filteredRestaurants.map(({ res, chef }) => {
                  const isInTrip = itinerary.find((i) => i.uid === (res.id || res.name));
                  return (
                    <div
                      key={res.id}
                      className="flex items-center justify-between gap-3 p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="font-black text-xs uppercase leading-none truncate">{res.name}</p>
                        <p className="text-[10px] text-neutral-500 font-bold uppercase mt-1 truncate">
                          {chef.moniker || chef.real_name} · {res.location}
                        </p>
                      </div>
                      <button
                        onClick={() => onToggleItinerary(res, chef)}
                        className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                          isInTrip
                            ? 'bg-blue-600 text-white'
                            : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                        }`}
                        aria-label={isInTrip ? 'Remove from trip' : 'Add to trip'}
                      >
                        {isInTrip ? <Check size={12} /> : <Plus size={12} />}
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
