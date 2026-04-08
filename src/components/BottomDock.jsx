export default function BottomDock({ currentView, onNavigateHome, onOpenItinerary, itineraryCount }) {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-neutral-900/80 backdrop-blur-2xl p-2 rounded-[32px] border border-white/5 shadow-2xl z-[150] ring-1 ring-white/10">
      <button
        onClick={onNavigateHome}
        className={`px-8 py-3 rounded-[26px] text-[10px] font-black uppercase tracking-widest transition-all ${
          currentView === 'home' ? 'bg-white text-black' : 'text-neutral-500 hover:text-white'
        }`}
      >
        Home
      </button>
      <div className="w-px h-6 bg-neutral-800 mx-2" />
      <button
        onClick={onOpenItinerary}
        className="px-8 py-3 rounded-[26px] text-[10px] font-black uppercase tracking-widest transition-all text-neutral-500 hover:text-white flex items-center gap-2"
      >
        Trip
        {itineraryCount > 0 && (
          <span className="w-5 h-5 bg-blue-600 rounded-full text-white flex items-center justify-center text-[8px] font-black">
            {itineraryCount}
          </span>
        )}
      </button>
    </div>
  );
}
