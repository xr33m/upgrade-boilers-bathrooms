# Domain Configuration Guide

When you have your actual domain, use this guide to update all references throughout the project.

## Current Setup

The project is currently configured with a placeholder domain:
- **Placeholder**: `https://www.glasgowplumbing.co.uk`
- **Location**: `src/constants/business.ts`

## Quick Update (Recommended)

When you get your actual domain, run this single command:

```bash
node scripts/update-domain.mjs https://your-actual-domain.com
```

Then regenerate the sitemap:

```bash
node scripts/generate-sitemap.mjs
```

Example:
```bash
node scripts/update-domain.mjs https://www.myplumbingbusiness.com
DOMAIN=https://www.myplumbingbusiness.com node scripts/generate-sitemap.mjs
```

## What Gets Updated

The `update-domain.mjs` script automatically updates:

1. **`src/constants/business.ts`** - DOMAIN constant
   - Used throughout the app for schema and canonical URLs
   - Exported for use in components

2. **`public/robots.txt`** - Sitemap URL
   - Updates the sitemap reference for search engines

3. **Sitemap XML** (manual step)
   - Generated with correct domain when you run `generate-sitemap.mjs`

## Files with Domain References

All domain references are centralized in:

### Primary Configuration
- **`src/constants/business.ts`** ✅
  ```typescript
  export const DOMAIN = "https://www.your-domain.com";
  ```
  - Used by SEO component
  - Used by schema markup
  - Exported for all components to use

### SEO & Meta Tags
- **`src/components/SEO.tsx`** ✅
  - Imports DOMAIN from business.ts
  - Uses it in schema generation
  - Canonical URLs automatically set

### Sitemap
- **`public/sitemap.xml`** ✅
  - Auto-generated with domain
  - Run: `node scripts/generate-sitemap.mjs`
  - Can use env var: `DOMAIN=https://your-domain.com node scripts/generate-sitemap.mjs`

### Robots.txt
- **`public/robots.txt`** ✅
  - Updated by update-domain.mjs script
  - One reference: Sitemap URL

### Each Page's Canonical Tags
- **`src/pages/*.tsx`** ✅
  - All pages already have canonical URLs
  - Format: `canonical="https://your-domain.com{path}"`
  - Just update the DOMAIN constant and all canonicals update automatically

## Env Variable Support

Both scripts support environment variables for flexibility:

```bash
# Generate sitemap with custom domain (without changing the constant)
DOMAIN=https://staging.yourdomain.com node scripts/generate-sitemap.mjs

# This generates sitemap.xml with the staging domain
```

## Step-by-Step Update Process

### Step 1: Update Domain Constant
```bash
node scripts/update-domain.mjs https://your-actual-domain.com
```

### Step 2: Generate Sitemap with New Domain
```bash
node scripts/generate-sitemap.mjs
```

### Step 3: Verify Changes
- Check `src/constants/business.ts` - DOMAIN should be updated
- Check `public/robots.txt` - Sitemap URL should be updated
- Check `public/sitemap.xml` - All URLs should use new domain

### Step 4: Update Google Analytics (if set up)
- In `/index.html`, update GA4 ID if needed
- Update GSC verification code if needed

### Step 5: Deploy
```bash
npm run build
# Deploy dist/ folder to hosting
```

## Testing Domain Change

After updating, verify:

1. **Sitemap URLs**
   ```bash
   grep -o '<loc>[^<]*</loc>' public/sitemap.xml | head -5
   # Should show your new domain
   ```

2. **Robots.txt Sitemap**
   ```bash
   grep "Sitemap:" public/robots.txt
   # Should show your new domain
   ```

3. **Schema Markup**
   - Open app in browser
   - Check browser DevTools → Elements → head
   - Look for script[type="application/ld+json"]
   - Should have correct URL in "url" field

## Canonical Tags Auto-Update

All page canonical tags are automatically set using the DOMAIN constant:

```typescript
// In each page:
<SEO
  canonical={`${DOMAIN}/your-page-path`}
  ...
/>
```

When you update `DOMAIN` in `src/constants/business.ts`, all canonical tags automatically reflect the new domain.

## For Staging/Production

You can use environment variables for different deployments:

**Local Development:**
```bash
# Uses default from business.ts
npm run dev
```

**Production Sitemap:**
```bash
DOMAIN=https://www.yourdomain.com node scripts/generate-sitemap.mjs
```

**Staging Sitemap:**
```bash
DOMAIN=https://staging.yourdomain.com node scripts/generate-sitemap.mjs
```

## File Structure

```
project/
├── src/
│   ├── constants/
│   │   └── business.ts          ← DOMAIN constant (main config)
│   ├── components/
│   │   └── SEO.tsx              ← Uses DOMAIN from business.ts
│   └── pages/                    ← All pages use DOMAIN via SEO component
├── public/
│   ├── robots.txt               ← Sitemap reference
│   └── sitemap.xml              ← Generated with DOMAIN
├── scripts/
│   ├── update-domain.mjs         ← Updates domain across files
│   └── generate-sitemap.mjs      ← Generates sitemap.xml
└── DOMAIN_SETUP.md              ← This file
```

## Troubleshooting

### Sitemap shows old domain
- Run: `node scripts/generate-sitemap.mjs`
- Or: `DOMAIN=https://your-domain.com node scripts/generate-sitemap.mjs`

### Canonical tags show old domain
- Check `src/constants/business.ts` - DOMAIN should be updated
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Rebuild: `npm run build`

### Robots.txt shows old domain
- Run: `node scripts/update-domain.mjs https://your-domain.com`
- Verify with: `grep "Sitemap:" public/robots.txt`

## Questions?

All domain configuration is centralized in:
1. `src/constants/business.ts` - Main configuration
2. Scripts to automate updates
3. Components that import and use the DOMAIN constant

No need to manually search and replace across multiple files!
