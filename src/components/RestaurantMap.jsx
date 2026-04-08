import React, { useState, useEffect, useRef } from 'react';
import { Maximize2 } from 'lucide-react';

// Leaflet CDN Links
const LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

export default function RestaurantMap({ restaurants, height = "300px" }) {
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!document.querySelector(`link[href="${LEAFLET_CSS}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = LEAFLET_CSS;
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector(`script[src="${LEAFLET_JS}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = LEAFLET_JS;
      script.async = true;
      script.onload = () => {
        const checkL = setInterval(() => {
          if (window.L && typeof window.L.map === 'function') {
            clearInterval(checkL);
            setMapReady(true);
          }
        }, 100);
      };
      document.head.appendChild(script);
    } else {
      setMapReady(true);
    }
  }, []);

  const handleResetView = () => {
    if (mapRef.current && restaurants.length > 0) {
      const center = restaurants[0].coords;
      mapRef.current.setView(center, restaurants.length > 1 ? 3 : 13, { animate: true });
    }
  };

  useEffect(() => {
    if (!mapReady || !containerRef.current || !window.L || typeof window.L.map !== 'function') return;

    const timer = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }

      const defaultCenter = [37.5665, 126.9780];
      const center = restaurants.length > 0 ? restaurants[0].coords : defaultCenter;

      try {
        const map = window.L.map(containerRef.current, {
          zoomControl: true,
          scrollWheelZoom: true,
          dragging: true
        }).setView(center, restaurants.length > 1 ? 3 : 13);

        window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; CARTO'
        }).addTo(map);

        restaurants.forEach(res => {
          if (res.coords) {
            const popupContent = `
              <div style="color: #000; font-family: sans-serif; min-width: 150px; padding: 5px;">
                <h4 style="margin: 0 0 4px; font-weight: bold; font-size: 14px;">${res.name}</h4>
                <p style="margin: 0 0 8px; font-size: 11px; color: #666;">${res.location}</p>
                <div style="font-size: 10px; font-weight: 800; color: #2563eb; text-transform: uppercase;">${res.specialty || res.cuisine}</div>
              </div>
            `;
            window.L.marker(res.coords).addTo(map).bindPopup(popupContent);
          }
        });

        mapRef.current = map;
        map.invalidateSize();
      } catch (err) {
        console.error("Leaflet initialization failed:", err);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [mapReady, restaurants]);

  return (
    <div className="relative w-full h-full group">
      <div
        ref={containerRef}
        style={{ height }}
        className="w-full rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl z-0"
      >
        {!mapReady && (
          <div className="flex items-center justify-center h-full text-neutral-600 text-xs italic">
            Initializing Map...
          </div>
        )}
      </div>

      {mapReady && (
        <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2 pointer-events-none">
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleResetView(); }}
            className="p-2.5 bg-neutral-900/90 border border-neutral-700 rounded-xl text-white hover:bg-white hover:text-black transition-all shadow-2xl backdrop-blur-md pointer-events-auto active:scale-95"
            title="Reset View"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      )}

      <style>{`
        .leaflet-control-zoom { border: none !important; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3) !important; margin: 12px !important; }
        .leaflet-control-zoom-in, .leaflet-control-zoom-out { background: #171717 !important; color: white !important; border: 1px solid #262626 !important; }
      `}</style>
    </div>
  );
}
