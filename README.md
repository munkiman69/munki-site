# Munki — website

Static site (HTML + CSS, no build step), hosted on Render from GitHub.

## Editing the content
Almost everything lives in `config.js`: bio, background, collaborators, line-ups,
press quotes, showreel link, streaming and social links, contact details.
Anything left as `""` is hidden automatically.

- **Showreel:** paste an Instagram reel, Vimeo or unlisted YouTube link into `showreel`.
- **Top photo:** replace `hero.jpg` (landscape works best).
- **Look:** colours, patterns and layout are in `theme.css`; shared layout is in `base.css`.

Save, commit, push — Render redeploys automatically within a minute or two.

## Preview on your computer
```bash
cd ~/Downloads/munki-site
python3 -m http.server 8000
```
Then open http://localhost:8000

## Updating the live site after a change
```bash
cd ~/Downloads/munki-site
git add .
git commit -m "Update site"
git push
```
