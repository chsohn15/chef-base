# Culinary Competition Explorer (Chefbase)

An interactive web application for exploring chefs, restaurants, and competition history from popular culinary shows like Culinary Class Wars and Iron Chef.

## Features

* Chef Profiles: Detailed bios, competition ranks, and "Spoon" classifications.
* Restaurant Integration: Interactive maps using Leaflet.js and direct booking links via Resy.
* Trip Planner: Add your favorite chef establishments to a persistent itinerary.
* Spoiler Protection: Toggle competition results to avoid ruining the show for yourself.
* Global Search: Quickly find masters by name or moniker.
Tech Stack
* Framework: React
* Styling: Tailwind CSS
* Icons: Lucide React
* Maps: Leaflet.js (via OpenStreetMap/CartoDB)
* Database/Auth: Firebase & Firestore
Getting Started
Prerequisites
* Node.js (v18+)
* NPM or Yarn

## Installation
1. Clone the repository:
```
git clone [https://github.com/YOUR_USERNAME/culinary-explorer.git](https://github.com/YOUR_USERNAME/culinary-explorer.git)
```

2. Install dependencies:
```
npm install
```

3. Set up your environment variables:
Create a .env file in the root directory and add your Firebase configuration:

```
VITE_FIREBASE_CONFIG={"apiKey":"...","authDomain":"..."}
```

4. Start the development server:
```
npm run dev
```

Folder Structure
* `App.jsx`: Main application logic and UI components.
* `public/`: Static assets such as images and fonts.
