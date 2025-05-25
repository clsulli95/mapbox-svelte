# Prereq
- nvm (Node Version Manager)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc

# Verify w/
nvm list-remote

# install latest node version w/
nvm install lts/*
```

# 🗺️ SvelteKit + MapLibre + PMTiles Viewer

This is a lightweight map viewer built with [SvelteKit](https://kit.svelte.dev/), [MapLibre GL JS](https://maplibre.org/), and [Protomaps PMTiles](https://protomaps.com/docs/pmtiles/). It loads a local `.pmtiles` file and renders it with a clean vector style using `protomaps-themes-base`.

---

## 🚀 Features

- Vector map rendering from a local `.pmtiles` file
- 3D map tilt using pitch and bearing
- Customizable map style
- Fast development with Vite and SvelteKit

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/clsulli95/mapbox-svelte.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 📦 Tech Stack

- [SvelteKit](https://kit.svelte.dev/)
- [MapLibre GL JS](https://maplibre.org/)
- [PMTiles Protocol](https://github.com/protomaps/PMTiles)
- [Protomaps Themes Base](https://github.com/protomaps/protomaps-themes-base)

---

## 🔧 Configuration

Edit `src/lib/Map.svelte` to:

- Change map center, zoom, pitch, or bearing
- Load a different `.pmtiles` file
- Modify or extend the map style and layers

---

## 🧰 NPM Scripts

- `npm run dev` — Run the dev server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build

---

## 📄 License

MIT © Clint Sullivan

---

## 🙋 Questions?

Feel free to open an issue or start a discussion if you run into problems or want to contribute!
