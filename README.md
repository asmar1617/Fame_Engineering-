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

- [ ] **Contact form** — activate it by creating a free Formspree endpoint
      (see "Contact form setup" below). Until you do this, visitors who use
      the form will see an error message pointing them to phone/WhatsApp
      instead — the rest of the site is unaffected.
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

The site is already pushed to `https://github.com/asmar1617/Fame_Engineering-`
on branch `main`. To make it live:

1. On GitHub: go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
4. Wait a minute, then the site will be live at:
   `https://asmar1617.github.io/Fame_Engineering-/`

### Custom domain (optional)

If you buy a domain (e.g. `fameengineering.com`), add a `CNAME` file to this
folder containing just the domain name, then configure the domain's DNS as
described in GitHub's Pages custom domain docs, and set it under
**Settings → Pages → Custom domain**.

## Contact form setup

GitHub Pages only serves static files — there's no server to receive form
submissions directly. The Contact section's form (`index.html`, "Send Message")
is wired to [Formspree](https://formspree.io), a free service that emails
submissions straight to your inbox. To activate it:

1. Go to [formspree.io](https://formspree.io) and sign up free (using
   `fameengineering5@gmail.com` makes sense, so submissions land in the same
   inbox already on the letterhead).
2. Click **New Form**, give it a name (e.g. "Fame Engineering Website"), and
   set the destination email if asked.
3. Formspree gives you an endpoint URL like `https://formspree.io/f/abcdwxyz`.
4. In `index.html`, find:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   and replace `YOUR_FORM_ID` with your real form ID from step 3.
5. Commit and push the change. On the free plan Formspree sends a
   confirmation email the first time — click the link in it to activate the
   form, then submissions will start arriving normally.

The free plan allows 50 submissions/month, which is plenty for a shop's
contact form. The form has spam protection built in (a hidden honeypot
field) and shows a success or error message on the page without reloading.
If Formspree is ever down or unreachable, the form shows an error message
pointing visitors to the phone/WhatsApp links instead, so they're never
stuck with no way to reach you.
