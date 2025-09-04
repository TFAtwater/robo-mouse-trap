# Robo‑Grab — PWA (GitHub Pages ready)

This is the **full game** we iterated on (nest-based spawns, 1–2 escape holes, bucket/boots/box props, scurry AI with hiding).

## Deploy (GitHub Pages web UI)
1. Create a repo (e.g. `robo-mouse-trap` or `robograb`).
2. Upload **index.html**, **manifest.webmanifest**, **sw.js**, **README.md** to the repo root.
3. Settings → **Pages** → Source: *Deploy from a branch*; Branch: `main` and **/(root)** → Save.
4. Open the Pages URL when it’s ready.

## Install on iPad/iPhone
Open the URL in Safari → Share → **Add to Home Screen**. Once opened from the icon, the app works offline.

## Updating (and avoiding old cached builds)
- Bump the `CACHE` name in `sw.js` (e.g., `robograb-ghp-v2`) when you push changes.
- Or on desktop: open DevTools → Application → Service Workers → **Unregister** then hard reload.
- On iOS: long-press the Home Screen icon → Remove → re-add from Safari after redeploy.
