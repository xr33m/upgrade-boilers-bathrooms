# SEO & Performance Checklist

## Status Summary

### ✅ Completed Items

1. **SSL/HTTPS** - Ready for HTTPS deployment
   - Project uses modern HTTPS-ready setup
   - All canonical URLs point to https://www.glasgowplumbing.co.uk

2. **Robots.txt** - ✅ Configured
   - Location: `/public/robots.txt`
   - Includes sitemap reference
   - Blocks AI crawlers (GPTBot, Claude, etc.)
   - Allows Google and Bing crawlers

3. **Sitemap.xml** - ✅ Generated
   - Location: `/public/sitemap.xml`
   - Contains 44 URLs with proper priorities
   - Homepage: priority 1.0
   - Service pages: priority 0.8-0.9
   - Area pages: priority 0.8
   - Generated with: `node scripts/generate-sitemap.mjs`
   - Last updated: 2026-02-24

4. **Canonical Tags** - ✅ Implemented
   - All pages include unique canonical URLs
   - Format: `https://www.glasgowplumbing.co.uk{path}`
   - Prevents duplicate content issues
   - Examples verified across multiple pages

5. **404 Page** - ✅ Designed & Implemented
   - Location: `/src/pages/NotFound.tsx`
   - Route: `/*` (catch-all)
   - Professional design with helpful links
   - Emergency contact CTA included
   - SEO optimized with proper meta tags

6. **Core Web Vitals** - ✅ Monitoring Setup
   - Web Vitals monitoring library created: `/src/lib/web-vitals.ts`
   - Tracks LCP, FID, CLS, FCP, TTFB
   - Performance metrics logging enabled
   - Ready to send to Google Analytics

7. **Meta Tags & SEO** - ✅ Comprehensive
   - SEO component handles dynamic meta tags
   - Title, description, canonical, and schema tags
   - Local Business schema implemented
   - Open Graph tags in HTML head
   - Twitter Card tags included
   - Language and theme-color meta tags
   - Sitemap reference in head

---

## Pending Setup (Manual Configuration Required)

### ⚠️ Google Analytics
**Status**: Code ready, awaiting your account setup

1. **Steps to Enable**:
   - Go to https://analytics.google.com/
   - Create a new property or select existing
   - Get your GA4 Measurement ID (format: G-XXXXXXXXXX)
   - Copy the script from Analytics page

2. **Where to Add**:
   - Edit `/index.html`
   - Uncomment the Google Analytics section
   - Replace `YOUR_GA4_ID` with your actual ID
   - Script example:
     ```html
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     </script>
     ```

### ⚠️ Google Search Console
**Status**: Code ready, awaiting your account setup

1. **Steps to Enable**:
   - Go to https://search.google.com/search-console
   - Add your property
   - Choose verification method (recommended: HTML tag)
   - Get verification code from GSC

2. **Where to Add**:
   - Edit `/index.html`
   - Uncomment the Google Search Console verification line
   - Replace `YOUR_VERIFICATION_CODE` with code from GSC
   - Example:
     ```html
     <meta name="google-site-verification" content="YOUR_CODE_HERE" />
     ```

3. **After Verification**:
   - Submit sitemap at: https://search.google.com/search-console/sitemaps
   - URL: https://www.glasgowplumbing.co.uk/sitemap.xml
   - Monitor coverage and indexing

### ⚠️ SSL Certificate
**Status**: Deployment stage

- Ensure hosting provider enables HTTPS
- All canonical URLs ready for https://
- Redirect HTTP to HTTPS when deployed

---

## Link Verification Completed

### ✅ Internal Links Verified
All major pages have been tested for:
- Proper route definitions in App.tsx
- Correct link paths in navigation
- Working internal links to related services
- No broken route references

### Routes Verified:
- Homepage: `/`
- Services: `/services`
- Plumbing: `/plumbing`
- Emergency Plumber: `/plumbing/emergency-plumber`
- Area Pages: `/areas/plumber-*`
- Contact: `/contact`
- All sub-pages properly routed
- 404 Fallback: `/*` (catch-all route)

---

## Performance Monitoring

### Web Vitals Tracking
- **LCP (Largest Contentful Paint)**: Monitored
  - Good: ≤ 2.5s
  - Needs improvement: ≤ 4.0s

- **FID (First Input Delay)**: Monitored
  - Good: ≤ 100ms
  - Needs improvement: ≤ 300ms

- **CLS (Cumulative Layout Shift)**: Monitored
  - Good: ≤ 0.1
  - Needs improvement: ≤ 0.25

- **FCP (First Contentful Paint)**: Monitored
  - Good: ≤ 1.8s
  - Needs improvement: ≤ 3.0s

- **TTFB (Time to First Byte)**: Monitored
  - Good: ≤ 800ms
  - Needs improvement: ≤ 1.8s

---

## Next Steps - What To Do Now

### 1. Deploy to Production
- Ensure HTTPS is enabled
- All canonical URLs will use https://

### 2. Set Up Google Analytics
- Follow steps in "Google Analytics" section above
- Monitor visitor data and behavior

### 3. Verify with Google Search Console
- Follow steps in "Google Search Console" section above
- Submit sitemap
- Check indexation status

### 4. Monitor Core Web Vitals
- After deployment, check GSC → Core Web Vitals
- View detailed metrics in Analytics
- Optimize if any metrics are "Poor"

### 5. Submit for Indexing
- Go to GSC
- Use URL Inspection Tool
- Submit homepage and key service pages

### 6. Regenerate Sitemap (Quarterly)
- Run: `node scripts/generate-sitemap.mjs`
- When new pages are added
- Submit updated sitemap to GSC

---

## SEO Features Summary

### On-Page SEO ✅
- Unique, descriptive titles (50-60 chars)
- Meta descriptions (150-160 chars)
- Proper heading hierarchy (H1, H2, H3)
- Rich semantic HTML
- Internal linking structure
- Keyword optimization
- Local business schema markup

### Technical SEO ✅
- Mobile responsive design
- Fast page load times (optimized with Vite)
- Proper redirect structure
- XML sitemap included
- Robots.txt configured
- Canonical tags on all pages
- Clean URL structure
- 404 page with helpful content

### Local SEO ✅
- Business name, address, phone (NAP)
- Service area pages with local mentions
- Local business schema
- Google Business Profile ready
- Local keywords targeted

### Content SEO ✅
- 44+ unique pages
- Comprehensive service descriptions
- Area-specific content
- FAQ content structure
- Blog/News integration with Supabase
- Customer reviews section
- Process documentation

---

## File Locations Reference

- **Robots.txt**: `/public/robots.txt`
- **Sitemap**: `/public/sitemap.xml`
- **404 Page**: `/src/pages/NotFound.tsx`
- **Web Vitals**: `/src/lib/web-vitals.ts`
- **SEO Component**: `/src/components/SEO.tsx`
- **Sitemap Generator**: `/scripts/generate-sitemap.mjs`
- **HTML Head**: `/index.html`
- **App Routes**: `/src/App.tsx`

---

## Questions or Issues?

If you encounter any issues with:
- Analytics setup: Check your GA4 property ID format
- GSC verification: Ensure you copy the full verification code
- Sitemap generation: Run `node scripts/generate-sitemap.mjs`
- Build errors: Run `npm run build` to check for issues
