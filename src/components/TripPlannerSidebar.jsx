import { X, ExternalLink, Trash2 } from 'lucide-react';

export default function TripPlannerSidebar({ isOpen, onClose, itinerary, onRemoveItem }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <aside className="relative w-full max-w-sm bg-neutral-950 border-l border-neutral-800 h-full p-8 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-black uppercase italic tracking-tighter">Your Trip</h2>
          <button onClick={onClose} className="p-2 hover:bg-neutral-900 rounded-lg" aria-label="Close">
            <X />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-4">
          {itinerary.length === 0 ? (
            <div className="text-center py-20 opacity-30 italic text-sm">No establishments added yet.</div>
          ) : (
            itinerary.map((item) => (
              <div
                key={item.uid}
                className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl flex justify-between items-center group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-black text-sm uppercase leading-none">{item.name}</h4>
                    {item.website_url && (
                      <a href={item.website_url} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-blue-500">
                        <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                  <p className="text-[10px] text-neutral-500 uppercase font-bold mt-1">{item.chefName}</p>
                </div>
                <button
                  onClick={() => onRemoveItem(item)}
                  className="text-neutral-600 hover:text-red-500 transition-colors p-2 opacity-0 group-hover:opacity-100"
                  aria-label="Remove from trip"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  );
}
