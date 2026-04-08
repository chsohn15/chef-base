import React, { useState, useMemo } from 'react';

import { APP_DATA } from './data/appData';
import Header from './components/Header';
import TripPlannerSidebar from './components/TripPlannerSidebar';
import BottomDock from './components/BottomDock';
import HomeView from './components/HomeView';
import ShowView from './components/ShowView';
import ProfileView from './components/ProfileView';


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
      
      <Header
        onNavigateHome={() => setView("home")}
        globalSearchQuery={globalSearchQuery}
        onSearchChange={(value) => {
          setGlobalSearchQuery(value);
          setIsGlobalSearchActive(value.length > 0);
        }}
        isGlobalSearchActive={isGlobalSearchActive}
        searchResults={searchResults}
        onSelectChef={navigateToProfile}
        onOpenItinerary={() => setShowItinerary(true)}
        itineraryCount={itinerary.length}
        hideSpoilers={hideSpoilers}
        onToggleSpoilers={() => setHideSpoilers(!hideSpoilers)}
      />

      <TripPlannerSidebar
        isOpen={showItinerary}
        onClose={() => setShowItinerary(false)}
        itinerary={itinerary}
        onRemoveItem={toggleItinerary}
      />

      <main className="p-6 md:p-12 max-w-7xl mx-auto">
        {view === "home" && (
          <HomeView shows={APP_DATA.shows} onSelectShow={selectShow} />
        )}

        {view === "show" && currentShow && (
          <ShowView
            show={currentShow}
            selectedSeasonNum={selectedSeasonNum}
            onSeasonChange={setSelectedSeasonNum}
            onNavigateHome={() => setView("home")}
            chefsInShow={chefsInShow}
            onSelectChef={navigateToProfile}
            hideSpoilers={hideSpoilers}
          />
        )}

        {view === "profile" && currentChef && (
          <ProfileView
            chef={currentChef}
            shows={APP_DATA.shows}
            onBack={() => (selectedShowId ? setView("show") : setView("home"))}
            itinerary={itinerary}
            onToggleItinerary={toggleItinerary}
            hideSpoilers={hideSpoilers}
            onNavigateToShow={(showId, seasonNum) => {
              setSelectedShowId(showId);
              setSelectedSeasonNum(seasonNum);
              setView("show");
            }}
          />
        )}
      </main>

      <BottomDock
        currentView={view}
        onNavigateHome={() => setView("home")}
        onOpenItinerary={() => setShowItinerary(true)}
        itineraryCount={itinerary.length}
      />
    </div>
  );
}
