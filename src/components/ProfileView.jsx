import {
  ChevronLeft,
  Building2,
  MapPin,
  Map as MapIcon,
  Globe,
  ExternalLink,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import SpoonTag from './SpoonTag';
import RankBadge from './RankBadge';
import RestaurantMap from './RestaurantMap';

export default function ProfileView({
  chef,
  shows,
  onBack,
  itinerary,
  onToggleItinerary,
  hideSpoilers,
  onNavigateToShow,
}) {
  if (!chef) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={onBack}
        className="mb-8 text-neutral-500 flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
      >
        <ChevronLeft size={16} /> Back
      </button>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3 space-y-8">
          <div className="relative">
            <img
              src={chef.image}
              alt=""
              decoding="async"
              className="w-full aspect-square rounded-[40px] object-cover border border-neutral-800 shadow-2xl"
            />
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between px-2">
              <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                <Building2 size={12} /> Establishments
              </h4>
              {itinerary.length === 0 && (
                <span className="text-[9px] font-black text-blue-500/60 uppercase tracking-widest flex items-center gap-1">
                  <Calendar size={9} /> Add to plan your trip
                </span>
              )}
            </div>
            {chef.restaurants.map((res, idx) => {
              const isInTrip = itinerary.find((i) => i.uid === (res.id || res.name));
              return (
                <div
                  key={res.id || idx}
                  className="bg-neutral-900 p-6 rounded-[32px] border border-neutral-800 relative group/card transition-colors hover:bg-neutral-800/40"
                >
                  <div className="absolute top-4 right-4 z-[10] group/tooltip">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleItinerary(res, chef);
                      }}
                      className={`p-2.5 rounded-xl transition-all ${
                        isInTrip
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-neutral-800 text-neutral-500 hover:text-white hover:scale-105 active:scale-95'
                      }`}
                    >
                      <Calendar size={14} />
                    </button>
                    <div className="absolute right-0 bottom-full mb-2 pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-all transform translate-y-2 group-hover/tooltip:translate-y-0 duration-200">
                      <div className="bg-white text-black text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg whitespace-nowrap shadow-2xl relative">
                        {isInTrip ? 'Remove from Trip' : 'Add to Trip Planner'}
                        <div className="absolute top-full right-4 w-2 h-2 bg-white rotate-45 -translate-y-1" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 mb-1">
                    {res.website_url && res.website_url !== '#' ? (
                      <a
                        href={res.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-black uppercase tracking-tighter text-white pr-10 hover:text-blue-500 transition-colors inline-flex items-center gap-2 group/link"
                      >
                        {res.name}
                        <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <h5 className="text-xl font-black uppercase tracking-tighter text-white pr-10">{res.name}</h5>
                    )}

                    <div className="flex items-center gap-3">
                      <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-tight">
                        <MapPin size={10} className="inline mr-1" /> {res.location}
                      </p>
                      {res.website_url && res.website_url !== '#' && (
                        <a
                          href={res.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 hover:text-white flex items-center gap-1 text-[10px] uppercase font-bold transition-colors"
                        >
                          <Globe size={10} /> Website
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
                    <p className="text-[9px] font-black text-blue-500/60 uppercase mb-0.5">Chef&apos;s Specialty</p>
                    <p className="text-sm font-bold text-blue-300 leading-tight">{res.specialty}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-800">
                    <a
                      href={res.resy_url || 'https://resy.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-neutral-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
                    >
                      Book on Resy{' '}
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest px-2 flex items-center gap-2">
              <MapIcon size={12} /> Local Footprint
            </h4>
            <RestaurantMap restaurants={chef.restaurants} height="280px" />
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <SpoonTag type={chef.class} />
              {!hideSpoilers && chef.rank && <RankBadge rank={chef.rank} />}
            </div>
            <h1 className="text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
              {chef.moniker || chef.real_name}
            </h1>
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600/50 rounded-full" />
              <p className="text-xl md:text-2xl text-neutral-400 italic leading-relaxed tracking-tight font-medium">
                &quot;{chef.bio}&quot;
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h4 className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] mb-8">
              Competition History
            </h4>
            <div className="space-y-4">
              {chef.appearances?.map((app, i) => {
                const show = shows.find((s) => s.id === app.showId);
                return (
                  <div
                    key={i}
                    className="group bg-neutral-900/40 p-8 rounded-[40px] border border-neutral-800 flex items-center justify-between hover:bg-neutral-900 transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-2xl">
                        <img src={show?.banner} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-black text-2xl text-white uppercase tracking-tighter leading-none mb-1">
                          {show?.title}
                        </p>
                        <p className="text-xs text-neutral-500 font-bold uppercase tracking-[0.1em]">
                          Season {app.season}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-[10px] font-black text-neutral-700 uppercase mb-1">Result</p>
                        <div className={hideSpoilers ? 'blur-md opacity-20 select-none' : ''}>
                          <RankBadge rank={app.result} />
                        </div>
                      </div>
                      <button
                        onClick={() => onNavigateToShow(app.showId, app.season)}
                        className="group flex items-center gap-3 px-6 py-4 bg-neutral-800 rounded-2xl text-neutral-300 hover:bg-blue-600 hover:text-white transition-all shadow-xl font-black text-[10px] uppercase tracking-widest"
                      >
                        See Season
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
