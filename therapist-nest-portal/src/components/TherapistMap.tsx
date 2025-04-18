
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';

interface TherapistMapProps {
  apiKey?: string;
}

const TherapistMap = ({ apiKey }: TherapistMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxKey, setMapboxKey] = useState<string>(apiKey || '');
  const [keyEntered, setKeyEntered] = useState<boolean>(!!apiKey);

  useEffect(() => {
    if (!mapContainer.current || !mapboxKey || map.current) return;

    // Initialize map
    mapboxgl.accessToken = mapboxKey;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        zoom: 11,
        center: [-74.0066, 40.7135], // Default to NYC
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Try to get user's location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          map.current?.flyTo({
            center: [longitude, latitude],
            zoom: 12,
            speed: 1.5
          });
          
          // Add markers for mock therapists near the user's location
          addMockTherapists(longitude, latitude);
        },
        () => {
          console.log('Unable to get location, using default');
          addMockTherapists(-74.0066, 40.7135); // Add markers to default location
        }
      );
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxKey]);

  // Add mock therapists for demo purposes
  const addMockTherapists = (baseLng: number, baseLat: number) => {
    if (!map.current) return;
    
    const mockTherapists = [
      { name: "Dr. Emma Wilson", specialty: "Anxiety, Depression", lng: baseLng + 0.01, lat: baseLat + 0.01 },
      { name: "Dr. Michael Chen", specialty: "Trauma, PTSD", lng: baseLng - 0.02, lat: baseLat + 0.015 },
      { name: "Dr. Sarah Johnson", specialty: "Relationships, Stress", lng: baseLng + 0.025, lat: baseLat - 0.01 },
      { name: "Dr. James Rodriguez", specialty: "Addiction, Recovery", lng: baseLng - 0.018, lat: baseLat - 0.022 },
      { name: "Dr. Olivia Parker", specialty: "Youth, Family Therapy", lng: baseLng + 0.022, lat: baseLat + 0.02 },
    ];

    mockTherapists.forEach(therapist => {
      // Create custom marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'flex items-center justify-center w-6 h-6 bg-therapy-600 text-white rounded-full shadow-md';
      markerEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
      
      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div class="text-sm">
          <p class="font-medium">${therapist.name}</p>
          <p class="text-gray-600">${therapist.specialty}</p>
          <button class="mt-2 px-3 py-1 bg-therapy-600 text-white text-xs rounded hover:bg-therapy-700">
            View Profile
          </button>
        </div>`
      );
      
      // Add marker to map
      new mapboxgl.Marker(markerEl)
        .setLngLat([therapist.lng, therapist.lat])
        .setPopup(popup)
        .addTo(map.current!);
    });
  };

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setKeyEntered(true);
  };

  if (!keyEntered) {
    return (
      <Card className="p-6 max-w-md mx-auto my-8">
        <h3 className="text-lg font-semibold mb-4">Map API Key Needed</h3>
        <p className="text-sm text-gray-600 mb-4">
          To use the therapist finder map, please enter your Mapbox API key. You can get a free key from <a href="https://mapbox.com/" target="_blank" rel="noreferrer" className="text-therapy-600 underline">Mapbox</a>.
        </p>
        <form onSubmit={handleKeySubmit} className="space-y-4">
          <input 
            type="text" 
            value={mapboxKey}
            onChange={(e) => setMapboxKey(e.target.value)}
            placeholder="Enter your Mapbox API key"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-600"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-therapy-600 text-white py-2 rounded-md hover:bg-therapy-700 transition-colors"
          >
            Load Map
          </button>
        </form>
      </Card>
    );
  }

  return (
    <div className="w-full h-[70vh] rounded-lg overflow-hidden border border-border shadow-sm">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default TherapistMap;
