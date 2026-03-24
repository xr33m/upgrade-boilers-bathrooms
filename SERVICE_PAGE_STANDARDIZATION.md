# Service Page Standardization Guide

## Overview

A new reusable `ServicePageTemplate` component has been created to standardize all service pages across the website. This ensures consistent structure, spacing, and layout while maintaining topical authority and content depth.

## Template Structure

The template enforces this exact section order:

### 1. HERO SECTION
- H1 title (primary service keyword + location)
- Supporting subtitle
- Optional extended description
- Breadcrumb navigation
- Two CTA buttons (primary phone, secondary "Book Online")
- Dark gradient background

### 2. INTRODUCTION SECTION (Optional)
- Overview content blocks
- Service context and local relevance
- Clear internal linking opportunities

### 3. PROBLEMS / SERVICE BREAKDOWN SECTION (Optional)
- H2 section heading
- Intro paragraph establishing context
- Multiple problem cards with:
  - Icons (lucide-react)
  - H3 problem titles
  - Clear descriptions
  - Configurable grid layout (1-4 columns)

### 4. CONTENT BLOCKS (Flexible)
- H2 section headings
- Full custom content areas
- Optional image integration with position control (left/right)
- Alternating background colors (white/slate-50/blue-50)
- Abundant whitespace for visual breathing room

### 5. WHY CHOOSE US SECTION (Optional)
- Service-specific trust signals
- Accreditations and guarantees
- Local expertise messaging

### 6. PROCESS SECTION (Optional)
- Step-by-step workflow
- H3 step titles with descriptions
- Visual step numbers (1-n)
- Professional process explanation

### 7. AREAS WE COVER SECTION (Optional)
- Clean grid layout of service areas
- Geographic specificity
- Location cards with consistent styling

### 8. FAQ SECTION (Optional)
- H2 "Frequently Asked Questions" heading
- H3 question headings
- Clear answers with internal links where relevant
- Q&A cards with subtle styling

### 9. FINAL CTA SECTION (Required)
- Strong action headline (H2)
- Persuasive description paragraph
- Primary CTA button (phone number)
- Optional secondary CTA button
- Dark or light theme toggle

## Implementation Template

```typescript
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, [YourIcons] } from 'lucide-react';
import SEO from '../components/SEO';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { BUSINESS_INFO } from '../constants/business';

export default function YourServicePage() {
  return (
    <>
      <SEO title="..." description="..." canonical="..." />

      <ServicePageTemplate
        hero={{
          title: "Your Service Title in Glasgow",
          subtitle: "Your service promise and key benefits",
          description: "Optional extended description for context",
          breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Parent Service', href: '/parent' },
            { label: 'This Service', href: '/this-service' }
          ]
        }}

        introduction={
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Introduction Heading
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Introduction content...
            </p>
            {/* Add internal links here */}
          </div>
        }

        problems={{
          heading: "Common Problems / Services We Offer",
          intro: "Optional intro text explaining the problem category",
          problems: [
            {
              icon: <IconName className="w-6 h-6 text-blue-600" />,
              title: "Problem Title",
              description: "Problem description with key details"
            },
            // More problems...
          ],
          gridColumns: 2
        }}

        contentBlocks={[
          {
            heading: "Deep Topic Section",
            backgroundColor: 'white', // or 'slate-50' or 'blue-50'
            imageUrl: "https://images.pexels.com/...", // Optional
            imagePosition: "right", // or "left"
            imageAlt: "Descriptive alt text",
            content: (
              <div>
                {/* Your detailed content here */}
              </div>
            )
          },
          // More blocks...
        ]}

        process={{
          heading: "Our Service Process",
          subtitle: "How we deliver results for your home",
          steps: [
            {
              step: 1,
              title: "Step Title",
              description: "Step description explaining what happens"
            },
            // More steps...
          ]
        }}

        areas={{
          heading: "Areas We Cover",
          intro: "We serve across Glasgow including:",
          areas: [
            'Area Name 1',
            'Area Name 2',
            // More areas...
          ]
        }}

        faqs={[
          {
            question: "Your common question?",
            answer: "Clear answer with internal links where relevant"
          },
          // More FAQs...
        ]}

        finalCTA={{
          heading: "Action-Oriented Heading",
          description: "Persuasive call to action text",
          primaryButtonText: "Custom Button Text", // Optional, defaults to phone
          secondaryButtonText: "Secondary Action",  // Optional
          isDark: true // or false for light theme
        }}
      />
    </>
  );
}
```

## Key Design Features

### Spacing & Rhythm
- Consistent 12-16px padding/margins for sections
- Generous whitespace for readability
- Card-based layouts with subtle shadows
- 8px baseline grid alignment

### Visual Hierarchy
- Clear H1 → H2 → H3 hierarchy
- Bold weights (600-700) for headings
- 150% line-height for body text (150%)
- Semantic color usage (blue for primary, green for success, red/orange for alerts)

### Image Opportunities
- **Hero section**: Background gradient (inbuilt)
- **Content blocks**: 2-column layouts with image/text alternation
- **Problems section**: Icon indicators for visual interest
- **Process section**: Numbered step badges
- **FAQ**: Cards with subtle styling
- Pexels image URLs for high-quality stock photos

### Mobile Responsiveness
- Mobile-first approach
- Tablet breakpoint at `md:` (768px)
- Single column on mobile, multi-column on tablet/desktop
- Touch-friendly tap targets (min 44px)

### Internal Linking
- Links preserved within content blocks
- Cross-service references encouraged
- Related services component at page bottom
- Breadcrumb navigation at hero

## Pages Already Restructured

✅ **BoilerRepairs.tsx**
- 8 common problems with repair costs
- Service overview (fast response, first-visit fixes, 12-month guarantee)
- Transparent pricing section
- Boiler brand list
- Repair vs replace decision matrix
- 4-step process
- FAQ section

✅ **PlumberRepairs.tsx**
- 6 repair types (bathroom, hot water, pipework, radiators, drainage, appliances)
- Detailed content blocks with internal linking
- Pricing transparency
- Why choose us section with accreditations
- Glasgow coverage areas
- FAQ section

✅ **EmergencyPlumber.tsx**
- 7 emergency scenario blocks with images alternating left/right
- Burst pipes, boiler breakdown, blocked drains
- Gas leak safety protocol (critical information)
- Heating system failures, appliance leaks, frozen pipes
- 5-step emergency process
- Why choose us (20+ years, 24/7, Gas Safe, etc.)
- Postcode coverage grid

## Next Steps for Other Pages

### High Priority Pages (Similar structure to restructured pages)
These should follow the same pattern as BoilerRepairs/PlumberRepairs:

- `Heating.tsx` (main heating hub)
- `Boilers.tsx` (main boiler hub)
- `Plumbing.tsx` (main plumbing hub)
- Service detail pages: `BoilerServicing.tsx`, `BoilerInstallation.tsx`
- `BathroomInstallations.tsx`
- `UnderfloorHeating.tsx`
- `AirSourceHeatPumps.tsx`

### Process for Each Page

1. **Preserve all existing copy** - Don't rewrite anything
2. **Identify sections** - Map current content to template sections
3. **Extract problems** - Create problem cards from service descriptions
4. **Add images** - Use Pexels URLs for content block images
5. **Organize content blocks** - Group related information together
6. **Maintain links** - Keep all internal links and Link components
7. **Create FAQs** - Extract common Q&A from existing content
8. **Test styling** - Verify backgrounds, spacing, and responsiveness

## Color System

### Backgrounds
- `white` - Primary content areas
- `slate-50` - Alternate sections for contrast
- `blue-50` - Information callouts
- `red-50` / `orange-50` / `green-50` - Status-specific callouts

### Text
- `slate-900` - Headings (primary)
- `slate-700` - Body text
- `slate-600` - Secondary text
- Service colors for icons: `blue-600`, `green-600`, `orange-600`, `red-600`

## Typography

- **Headings**: 600-700 weight, tight tracking
- **Body**: 400 weight, 150% line-height
- **Buttons**: 600 weight, uppercase with letter spacing
- **Lists**: -30 margin top for tight grouping

## Benefits of This Approach

✅ **Consistency** - All pages follow same structure and rhythm
✅ **SEO** - Clear heading hierarchy, semantic HTML, internal linking
✅ **Performance** - Reusable component reduces code duplication
✅ **Maintainability** - Easy to update styling site-wide via one component
✅ **Accessibility** - Proper semantic structure, keyboard navigation
✅ **Content Depth** - Multiple content blocks allow thorough topic coverage
✅ **Flexibility** - Optional sections allow customization per page
✅ **Mobile-First** - Responsive design works on all devices

## Icon Guidelines

Use lucide-react icons consistently:

- **Service features**: `CheckCircle2` (green), `AlertCircle` (red/orange)
- **Process steps**: Numeric badges with solid backgrounds
- **Problems**: `Wrench`, `Zap`, `Droplet`, `Flame`, `AlertTriangle`
- **Callouts**: `Clock`, `Phone`, `MapPin`, `FileText`

Keep icon sizing at `w-5 h-5` or `w-6 h-6` for consistency.

## Final Notes

- The template supports empty/null values for optional sections
- Always use the template to maintain consistency
- Test on mobile, tablet, and desktop before publishing
- Internal links create topical authority across the site
- Abundant imagery and whitespace improve engagement metrics
- Clear information hierarchy helps users find answers quickly

---

**Last Updated**: February 24, 2026
**Template Component**: `/src/components/ServicePageTemplate.tsx`
**Restructured Pages**: 3 (BoilerRepairs, PlumberRepairs, EmergencyPlumber)
