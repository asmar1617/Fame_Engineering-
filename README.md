# Fame Engineering — Website

A simple, fast, single-page website for Fame Engineering (electrical &amp; electronics
repair). Plain HTML/CSS/JS — no build step, no framework, no server required.

## Files

```
index.html        Main page (all sections)
css/styles.css     All styling
js/main.js         Mobile menu + small helpers
images/logo.jpg    Real shop logo (used in header + favicon)
```

## Before you launch — fill these in

Real business details from the letterhead (phone numbers, address, email,
proprietor name, services list, and logo) are already filled in. What's
still left:

- [ ] Shop photo — in the About section, replace the dashed placeholder box
      with a real photo, e.g. `<img src="images/shop.jpg" alt="Fame Engineering workshop">`
- [ ] Opening hours — not on the letterhead; add a line to the Address card
      in the Contact section if you want hours displayed
- [ ] Confirm `+92 300 4689475` is the right number for the WhatsApp links
      (hero, contact, floating button) — currently assumed since it's listed
      first on the letterhead
- [ ] Optional: verify the About section text (proprietor name, service
      summary) reads the way you want — it's based on the letterhead but
      written in website voice

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

This folder is already a git repository (branch `main`, committed). To publish it:

1. Create a new, empty repository on GitHub (e.g. `fame-engineering-website`).
   Don't initialize it with a README, license, or .gitignore — this folder
   already has those.
2. From this folder, run:
   ```
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
