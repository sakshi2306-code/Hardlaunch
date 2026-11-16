# Hardlaunch website

The static website is in `site/`. Publish **only `site/`** as the hosting directory. The Google Apps Script source in `backend/Code.gs` is private and must never be published with the site.

## Run locally

From the project directory, run:

```powershell
python -m http.server 8000 --directory site
```

Then open `http://localhost:8000`.

## Configure the site

Edit `site/assets/config.js` to set the Apps Script web app URL (`ENDPOINT`) and optional `CONTACT_EMAIL`, `PHONE`, and `LINKEDIN` values. Leave a value empty to keep it hidden or disconnected. No build step or package installation is required.

The dashboard, conversation and project examples on the page are demo data.
