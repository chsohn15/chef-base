import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, MapPin, Trophy, ChefHat, ArrowRight, Heart, 
  EyeOff, Eye, PlayCircle, Star, ChevronLeft, Building2, 
  Map as MapIcon, Globe, Calendar, Trash2, X,
  Layers, Medal, ExternalLink
} from 'lucide-react';

import { APP_DATA } from './data/appData';
import RestaurantMap from './components/RestaurantMap';

// Firebase Imports
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously, signInWithCustomToken } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuration from environment
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG || "{}");
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// UI Components for Spoon Tags
const SpoonTag = ({ type }) => {
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
};

const RankBadge = ({ rank }) => {
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
};

export default function App() {
  const [view, setView] = useState("home"); 
  const [selectedShowId, setSelectedShowId] = useState(null);
  const [selectedSeasonNum, setSelectedSeasonNum] = useState(1);
  const [selectedChefId, setSelectedChefId] = useState(null);
  const [globalSearchQuery, setGlobalSearchQuery] = useState("");
  const [isGlobalSearchActive, setIsGlobalSearchActive] = useState(false);
  const [itinerary, setItinerary] = useState([]);
  const [showItinerary, setShowItinerary] = useState(false);
  const [hideSpoilers, setHideSpoilers] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) { console.error(err); }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const toggleItinerary = (res, chef) => {
    const resId = res.id || res.name;
    const exists = itinerary.find(item => item.uid === resId);
    if (exists) {
      setItinerary(itinerary.filter(item => item.uid !== resId));
    } else {
      setItinerary([...itinerary, { 
        ...res, 
        uid: resId, 
        chefName: chef.moniker || chef.real_name,
        chefId: chef.id 
      }]);
      setShowItinerary(true);
    }
  };

  const searchResults = useMemo(() => {
    if (!globalSearchQuery.trim()) return [];
    const q = globalSearchQuery.toLowerCase();
    return APP_DATA.chefs.filter(c => 
      c.real_name.toLowerCase().includes(q) || (c.moniker && c.moniker.toLowerCase().includes(q))
    ).slice(0, 5);
  }, [globalSearchQuery]);

  const currentShow = APP_DATA.shows.find(s => s.id === selectedShowId);
  
  const chefsInShow = useMemo(() => {
    if (!currentShow) return [];
    const season = currentShow.seasons.find(s => s.number === selectedSeasonNum);
    if (!season) return [];
    return season.chefs.map(id => APP_DATA.chefs.find(c => c.id === id)).filter(Boolean);
  }, [currentShow, selectedSeasonNum]);

  const currentChef = APP_DATA.chefs.find(c => c.id === selectedChefId);

  const navigateToProfile = (id) => {
    setSelectedChefId(id);
    setView("profile");
    setGlobalSearchQuery("");
    setIsGlobalSearchActive(false);
    window.scrollTo(0, 0);
  };

  const selectShow = (id) => {
    setSelectedShowId(id);
    setSelectedSeasonNum(1); 
    setView("show");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans pb-32 overflow-x-hidden">
      
      {/* HEADER */}
      <header className="sticky top-0 z-[100] bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-neutral-900 p-4 px-6 flex items-center justify-between">
        <div onClick={() => setView("home")} className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-blue-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
            <ChefHat className="text-white" size={20} />
          </div>
          <span className="font-black tracking-tighter text-xl uppercase italic">Chefbase</span>
        </div>

        <div className="relative flex-1 max-md mx-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={18} />
          <input 
            type="text" placeholder="Search masters..." 
            className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl py-2.5 pl-12 pr-4 text-sm outline-none focus:border-blue-500 transition-colors"
            value={globalSearchQuery}
            onChange={(e) => { setGlobalSearchQuery(e.target.value); setIsGlobalSearchActive(e.target.value.length > 0); }}
          />
          {isGlobalSearchActive && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-[110]">
              {searchResults.length > 0 ? searchResults.map(c => (
                <button key={c.id} onClick={() => navigateToProfile(c.id)} className="w-full flex items-center gap-4 p-3 hover:bg-white/5 text-left border-b border-neutral-800 last:border-0">
                  <img src={c.image} className="w-10 h-10 rounded-lg object-cover" />
                  <div>
                    <p className="font-bold text-sm">{c.moniker || c.real_name}</p>
                    <div className="mt-1"><SpoonTag type={c.class} /></div>
                  </div>
                </button>
              )) : <div className="p-4 text-xs text-neutral-500 italic">No masters found...</div>}
            </div>
          )}
        </div>

        <div className="flex gap-2 items-center">
          <button onClick={() => setShowItinerary(true)} className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-2xl text-neutral-500 hover:text-white transition-colors relative">
            <Calendar size={18} />
            {itinerary.length > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-[8px] font-black flex items-center justify-center text-white">{itinerary.length}</span>}
          </button>
          <button onClick={() => setHideSpoilers(!hideSpoilers)} className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border transition-all ${hideSpoilers ? 'bg-amber-500 text-black border-amber-400 font-bold' : 'bg-neutral-900 text-neutral-400 border-neutral-800'}`}>
            {hideSpoilers ? <EyeOff size={14} /> : <Eye size={14} />}
            <span className="hidden sm:inline text-[10px] uppercase font-black tracking-widest">Spoilers</span>
          </button>
        </div>
      </header>

      {/* TRIP PLANNER SIDEBAR */}
      {showItinerary && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowItinerary(false)} />
          <aside className="relative w-full max-w-sm bg-neutral-950 border-l border-neutral-800 h-full p-8 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">Your Trip</h2>
              <button onClick={() => setShowItinerary(false)} className="p-2 hover:bg-neutral-900 rounded-lg"><X /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4">
              {itinerary.length === 0 ? (
                <div className="text-center py-20 opacity-30 italic text-sm">No establishments added yet.</div>
              ) : (
                itinerary.map(item => (
                  <div key={item.uid} className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl flex justify-between items-center group">
                    <div>
                      <div className="flex items-center gap-2">
                         <h4 className="font-black text-sm uppercase leading-none">{item.name}</h4>
                         {item.website_url && <a href={item.website_url} target="_blank" className="text-neutral-600 hover:text-blue-500"><ExternalLink size={10} /></a>}
                      </div>
                      <p className="text-[10px] text-neutral-500 uppercase font-bold mt-1">{item.chefName}</p>
                    </div>
                    <button onClick={() => toggleItinerary(item)} className="text-neutral-600 hover:text-red-500 transition-colors p-2 opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                  </div>
                ))
              )}
            </div>
          </aside>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="p-6 md:p-12 max-w-7xl mx-auto">
        {view === "home" && (
          <div className="animate-in fade-in duration-700">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-[10px] font-black uppercase text-blue-500 tracking-[0.2em] mb-2">Discovery Portal</h2>
              <h1 className="text-6xl font-black text-white uppercase tracking-tighter mb-4">Culinary Icons</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {APP_DATA.shows.map(show => (
                <div key={show.id} onClick={() => selectShow(show.id)} className="bg-neutral-900 border border-neutral-800 rounded-[40px] overflow-hidden cursor-pointer group hover:border-blue-500 transition-all relative aspect-video">
                  <img src={show.banner} className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-neutral-950">
                    <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest">{show.platform}</span>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">{show.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "show" && currentShow && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <button onClick={() => setView("home")} className="mb-6 text-neutral-500 flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                  <ChevronLeft size={16} /> All Shows
                </button>
                <h1 className="text-6xl font-black uppercase tracking-tighter text-white leading-none">{currentShow.title}</h1>
              </div>

              <div className="flex bg-neutral-900 p-1.5 rounded-2xl border border-neutral-800 self-start md:self-auto">
                {currentShow.seasons.map(season => (
                  <button
                    key={season.number}
                    onClick={() => setSelectedSeasonNum(season.number)}
                    className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedSeasonNum === season.number ? 'bg-blue-600 text-white shadow-lg' : 'text-neutral-500 hover:text-white'}`}
                  >
                    Season {season.number}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-12 p-8 bg-neutral-900/30 border border-neutral-800 rounded-[32px]">
              <div className="flex items-center gap-3 text-blue-500 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
                <Layers size={14} /> 
                {currentShow.seasons.find(s => s.number === selectedSeasonNum)?.name || "Competition"}
              </div>
              <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">{currentShow.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {chefsInShow.map(chef => (
                <div key={chef.id} onClick={() => navigateToProfile(chef.id)} className="bg-neutral-900 rounded-[32px] overflow-hidden group border border-neutral-800 hover:border-blue-500 transition-all cursor-pointer flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img src={chef.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col gap-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-3 group-hover:text-blue-500 transition-colors">{chef.moniker || chef.real_name}</h3>
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
        )}

        {view === "profile" && currentChef && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => selectedShowId ? setView("show") : setView("home")} 
              className="mb-8 text-neutral-500 flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
            
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3 space-y-8">
                <div className="relative">
                  <img src={currentChef.image} className="w-full aspect-square rounded-[40px] object-cover border border-neutral-800 shadow-2xl" />
                </div>
                
                <div className="space-y-4 pt-4">
                  <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest px-2 flex items-center gap-2">
                    <Building2 size={12} /> Establishments
                  </h4>
                  {currentChef.restaurants.map((res, idx) => {
                    const isInTrip = itinerary.find(i => i.uid === (res.id || res.name));
                    return (
                      <div key={idx} className="bg-neutral-900 p-6 rounded-[32px] border border-neutral-800 relative group/card transition-colors hover:bg-neutral-800/40">
                        {/* Tooltip Wrapper */}
                        <div className="absolute top-4 right-4 z-[10] group/tooltip">
                          <button 
                            onClick={(e) => { e.stopPropagation(); toggleItinerary(res, currentChef); }}
                            className={`p-2.5 rounded-xl transition-all ${isInTrip ? 'bg-blue-600 text-white shadow-lg' : 'bg-neutral-800 text-neutral-500 hover:text-white hover:scale-105 active:scale-95'}`}
                          >
                            <Calendar size={14} />
                          </button>
                          <div className="absolute right-0 bottom-full mb-2 pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-all transform translate-y-2 group-hover/tooltip:translate-y-0 duration-200">
                            <div className="bg-white text-black text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg whitespace-nowrap shadow-2xl relative">
                              {isInTrip ? "Remove from Trip" : "Add to Trip Planner"}
                              <div className="absolute top-full right-4 w-2 h-2 bg-white rotate-45 -translate-y-1" />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1 mb-1">
                          {res.website_url && res.website_url !== "#" ? (
                            <a 
                              href={res.website_url} 
                              target="_blank" 
                              className="text-xl font-black uppercase tracking-tighter text-white pr-10 hover:text-blue-500 transition-colors inline-flex items-center gap-2 group/link"
                            >
                              {res.name}
                              <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <h5 className="text-xl font-black uppercase tracking-tighter text-white pr-10">{res.name}</h5>
                          )}
                          
                          <div className="flex items-center gap-3">
                             <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-tight"><MapPin size={10} className="inline mr-1" /> {res.location}</p>
                             {res.website_url && res.website_url !== "#" && (
                               <a href={res.website_url} target="_blank" className="text-neutral-500 hover:text-white flex items-center gap-1 text-[10px] uppercase font-bold transition-colors">
                                 <Globe size={10} /> Website
                               </a>
                             )}
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
                          <p className="text-[9px] font-black text-blue-500/60 uppercase mb-0.5">Chef's Specialty</p>
                          <p className="text-sm font-bold text-blue-300 leading-tight">{res.specialty}</p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-neutral-800">
                           <a 
                             href={res.resy_url || "https://resy.com"} 
                             target="_blank"
                             className="w-full flex items-center justify-center gap-2 py-3 bg-neutral-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
                           >
                             Book on Resy <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
                  <RestaurantMap restaurants={currentChef.restaurants} height="280px" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-12">
                   <div className="flex items-center gap-4 mb-6">
                     <SpoonTag type={currentChef.class} />
                     {!hideSpoilers && currentChef.rank && <RankBadge rank={currentChef.rank} />}
                   </div>
                   <h1 className="text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">{currentChef.moniker || currentChef.real_name}</h1>
                   <div className="relative pl-10">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600/50 rounded-full" />
                      <p className="text-xl md:text-2xl text-neutral-400 italic leading-relaxed tracking-tight font-medium">
                        "{currentChef.bio}"
                      </p>
                   </div>
                </div>

                <div className="mt-20">
                  <h4 className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] mb-8">Competition History</h4>
                  <div className="space-y-4">
                    {currentChef.appearances?.map((app, i) => {
                      const show = APP_DATA.shows.find(s => s.id === app.showId);
                      return (
                        <div key={i} className="group bg-neutral-900/40 p-8 rounded-[40px] border border-neutral-800 flex items-center justify-between hover:bg-neutral-900 transition-all">
                          <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-2xl">
                              <img src={show?.banner} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-black text-2xl text-white uppercase tracking-tighter leading-none mb-1">{show?.title}</p>
                              <p className="text-xs text-neutral-500 font-bold uppercase tracking-[0.1em]">Season {app.season}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-8">
                            <div className="text-right">
                               <p className="text-[10px] font-black text-neutral-700 uppercase mb-1">Result</p>
                               <div className={`${hideSpoilers ? 'blur-md opacity-20 select-none' : ''}`}>
                                 <RankBadge rank={app.result} />
                               </div>
                            </div>
                            <button 
                              onClick={() => { setSelectedShowId(app.showId); setSelectedSeasonNum(app.season); setView("show"); }} 
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
        )}
      </main>

      {/* PERSISTENT DOCK */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-neutral-900/80 backdrop-blur-2xl p-2 rounded-[32px] border border-white/5 shadow-2xl z-[150] ring-1 ring-white/10">
         <button onClick={() => setView("home")} className={`px-8 py-3 rounded-[26px] text-[10px] font-black uppercase tracking-widest transition-all ${view === 'home' ? 'bg-white text-black' : 'text-neutral-500 hover:text-white'}`}>Home</button>
         <div className="w-px h-6 bg-neutral-800 mx-2" />
         <button onClick={() => setShowItinerary(true)} className={`px-8 py-3 rounded-[26px] text-[10px] font-black uppercase tracking-widest transition-all text-neutral-500 hover:text-white flex items-center gap-2`}>
           Trip {itinerary.length > 0 && <span className="w-5 h-5 bg-blue-600 rounded-full text-white flex items-center justify-center text-[8px] font-black">{itinerary.length}</span>}
         </button>
      </div>
    </div>
  );
}
