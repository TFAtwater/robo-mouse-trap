# Robot Mouse Catcher — PWA (GitHub Pages ready)

A tiny canvas game packaged as a Progressive Web App so it can be **installed** and played **offline**.

## Quick deploy (GitHub web UI)
1. Create a new repo (e.g. `robot-mouse-catcher`).
2. Upload **these four files** to the repo root: `index.html`, `manifest.webmanifest`, `sw.js`, `README.md`.
3. Go to **Settings → Pages**:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` and **/ (root)**, then **Save**.
4. After it builds, open the published URL shown on the Pages screen (it will look like:   `https://<your-username>.github.io/<repo>/`).

## Install on iPad/iPhone
1. Open the site in **Safari**.
2. Tap **Share** → **Add to Home Screen**.
3. Launch from the Home Screen (works offline after first load).

## Notes
- All paths are **relative** (`./...`) so this works under the usual `/<repo>/` subpath.
- The service worker is very small: cache-first for static assets and an offline fallback for navigations.
- If you add images or sounds later, add them to the `ASSETS` array in `sw.js` or rely on the runtime cache logic.

## Local testing
Start a quick static server from this folder (any HTTPS/localhost server works). For example with Python:
```bash
python3 -m http.server 5173
# then open http://localhost:5173
```
Service workers require **HTTPS or localhost** to register.
