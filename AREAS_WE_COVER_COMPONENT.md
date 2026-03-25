# Areas We Cover Component

A reusable component that displays service areas with an embedded map and company van logo, creating visual consistency across all service pages.

## Features

- **Map Integration**: Google Maps embed showing Glasgow region with company van logo overlay
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Theme Support**: Multiple accent colors and background options
- **Flexible Data**: Supports both area names with details and simple postcode lists
- **Consistent Styling**: Matches the "Need Assistance" section design from the home page

## Usage

### Basic Implementation

```tsx
import AreasWeCover from '../components/AreasWeCover';

<AreasWeCover />
```

This will display the default Glasgow areas with a blue accent color and white background.

### With Custom Title and Accent Color

```tsx
<AreasWeCover
  title="Areas We Cover – Boiler Installation Glasgow"
  subtitle="We install boilers throughout Greater Glasgow and surrounding areas"
  accentColor="green"
/>
```

### With Custom Areas

```tsx
import { ServiceArea } from '../data/areas';

const customAreas: ServiceArea[] = [
  { name: 'Glasgow City Centre', detail: 'G1–G5 postcodes' },
  { name: 'West End', detail: 'G11–G13 postcodes' }
];

<AreasWeCover
  title="Custom Coverage Area"
  areas={customAreas}
  accentColor="orange"
/>
```

### Different Background Colors

```tsx
// White background (default)
<AreasWeCover bgColor="white" />

// Slate background
<AreasWeCover bgColor="slate" />

// Dark background
<AreasWeCover bgColor="dark" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Areas We Cover"` | Main heading text |
| `subtitle` | `string` | `undefined` | Optional subtitle text |
| `areas` | `ServiceArea[]` | `GLASGOW_AREAS` | Array of service areas to display |
| `showMap` | `boolean` | `true` | Whether to show the map with van logo |
| `bgColor` | `'white' \| 'slate' \| 'dark'` | `'white'` | Background color theme |
| `accentColor` | `'blue' \| 'green' \| 'orange' \| 'teal' \| 'red'` | `'blue'` | Accent color for icons and borders |
| `className` | `string` | `''` | Additional CSS classes |

## Accent Color Guide

Use accent colors that match your page theme:

- **Blue**: General services, boilers, gas safety
- **Green**: Heating, eco-friendly services, heat pumps
- **Orange**: Emergency services, landlord services, urgent repairs
- **Teal**: Bathroom installations, water services
- **Red**: Emergency plumbing, urgent call-outs

## Data Structure

The component uses data from `/src/data/areas.ts`:

```ts
export interface ServiceArea {
  name: string;
  detail?: string;
  postcode?: string;
}

// Pre-defined area sets available:
export const GLASGOW_AREAS: ServiceArea[]
export const GLASGOW_POSTCODES: ServiceArea[]
```

## Integration with ServicePageTemplate

The `ServicePageTemplate` component automatically uses `AreasWeCover` when you provide an `areas` prop:

```tsx
<ServicePageTemplate
  // ... other props
  areas={{
    heading: "Areas We Cover in Glasgow",
    intro: "24/7 emergency response across Greater Glasgow including:",
    areas: ['G1', 'G2', 'G3', 'G4', 'G5', ...]
  }}
/>
```

The template will convert the simple string array into the proper format for `AreasWeCover`.

## Migration from Old Implementations

To replace an existing "Areas We Cover" section:

1. Import the component:
```tsx
import AreasWeCover from '../components/AreasWeCover';
```

2. Remove the old section code (usually a `<section>` with hardcoded areas)

3. Add the new component:
```tsx
<AreasWeCover
  title="Your Custom Title"
  accentColor="blue" // Match your page theme
/>
```

## Examples

### Already Migrated Pages

The following pages have been successfully migrated:

- `/src/pages/PropertyManagers.tsx` - Orange accent
- `/src/pages/AirSourceHeatPumps.tsx` - Green accent
- `/src/pages/BoilerInstallation.tsx` - Blue accent
- `/src/pages/GasSafetyCertificates.tsx` - Blue accent
- `/src/pages/EmergencyPlumber.tsx` - Via ServicePageTemplate

## Responsive Behavior

- **Mobile (< 768px)**: Stacks vertically, areas list above map
- **Tablet (768px - 1024px)**: Side-by-side layout with 2-column area grid
- **Desktop (> 1024px)**: Full side-by-side with 2-column area grid and larger map

## Accessibility

- Semantic HTML structure with proper headings
- ARIA labels on map iframe
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast for all themes

## Performance

- Lazy loading for map iframe
- Optimized image loading for van logo
- No external dependencies beyond existing project libraries
- Minimal bundle impact (~2KB gzipped)
