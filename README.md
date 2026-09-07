# Fame Engineering — Website

A simple, fast, single-page website for Fame Engineering (electrical &amp; electronics
repair). Plain HTML/CSS/JS — no build step, no framework, no server required.

## Files

```
index.html        Main page (all sections)
css/styles.css     All styling
js/main.js         Mobile menu + small helpers
images/logo.svg    Placeholder logo (swap with your real logo, same filename)
```

## Before you launch — fill these in

Everything below is marked `TODO` inside `index.html`. Use your browser's
Find (Ctrl+F) for `TODO` to jump to each one.

- [ ] Phone number — replace `+920000000000` (appears in header, hero, contact section)
- [ ] WhatsApp number — replace `920000000000` in the `wa.me` links (hero, contact, floating button).
      Use country code with no `+` and no leading `0`, e.g. Pakistan mobile `03001234567` → `923001234567`
- [ ] Email address — replace `info@example.com`
- [ ] Shop address and opening hours — replace `[SHOP ADDRESS]` / `[OPENING HOURS]`
- [ ] About section paragraph — replace the placeholder text with your shop's real story
- [ ] Logo — replace `images/logo.svg` with your real logo (keep the filename, or update
      the `src="images/logo.svg"` references in `index.html` if you use a different name/type)
- [ ] Shop photo — in the About section, replace the dashed placeholder box with a real
      photo, e.g. `<img src="images/shop.jpg" alt="Fame Engineering workshop">`

## Running locally

No install needed — just open `index.html` in a browser. Or, for a local server
(recommended so relative paths behave exactly like on GitHub Pages):

```
# Python 3
python -m http.server 8000

# Node (if installed)
npx serve .
```

Then visit `http://localhost:8000`.

## Hosting on GitHub Pages

1. Create a new repository on GitHub (e.g. `fame-engineering-website`). Don't
   initialize it with a README — this folder already has one.
2. From this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
6. Wait a minute, then your site will be live at:
   `https://<your-username>.github.io/<your-repo>/`

If you want it at the root of your GitHub Pages account (no `/<repo>/` in the
URL), name the repository `<your-username>.github.io` instead.

### Custom domain (optional)

If you buy a domain (e.g. `fameengineering.com`), add a `CNAME` file to this
folder containing just the domain name, then configure the domain's DNS as
described in GitHub's Pages custom domain docs, and set it under
**Settings → Pages → Custom domain**.

## Contact form note

GitHub Pages only serves static files — there's no server to receive form
submissions. The current contact section uses `tel:`, `wa.me`, and `mailto:`
links, which work with no backend. If you want an actual on-page contact form
later, a free service like Formspree (formspree.io) can handle submissions
without you needing a backend.
