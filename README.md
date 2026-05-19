# Lightning Ventures LLC Website

Static website for GitHub Pages.

## Files

- `index.html` — Home page
- `about.html` — About Us page
- `services.html` — Products & Services page
- `contact.html` — Contact Us page
- `assets/styles.css` — Website styling
- `assets/script.js` — Mobile menu and contact form mailto script
- `assets/logo-full.png` — Full logo
- `assets/logo-icon.png` — LV profile icon
- `CNAME` — Custom domain configuration for GitHub Pages

## Publish on GitHub Pages

1. Create a new GitHub repository, for example: `lightningventuresllc`.
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.

## Configure custom domain

The `CNAME` file is already included with:

```text
lightningventuresllc.com
```

In your DNS provider, add these GitHub Pages records.

For apex/root domain:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

For www:

```text
CNAME www   your-github-username.github.io
```

After DNS updates, return to GitHub **Settings → Pages**, enter `lightningventuresllc.com`, save, and enable **Enforce HTTPS** once available.

## Contact form note

Because GitHub Pages is static hosting, the contact form uses a `mailto:` workflow. To collect messages directly inside a dashboard, connect a third-party form service later.
