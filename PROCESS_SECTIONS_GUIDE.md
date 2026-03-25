# Process Sections Guide

This guide covers all available process section components with animations and how to use them effectively across your service pages.

## Available Components

### 1. AnimatedProcessSection (Recommended for Most Pages)

**Best For**: General service pages, landlord services, repair services

**Features**:
- Smooth scroll-triggered animations
- Individual step highlighting as you scroll
- Icon support with numbered badges
- Related services and brand logos
- Customizable accent colors
- Steps slide in from left with staggered timing

**Usage**:
```tsx
import AnimatedProcessSection from '../components/AnimatedProcessSection';
import { Calendar, Shield, FileText, CheckCircle2 } from 'lucide-react';

<AnimatedProcessSection
  title="How We Support Property Managers"
  subtitle="Streamlined service delivery designed for letting agencies"
  steps={[
    {
      step: 1,
      icon: Calendar,
      title: 'Rapid Response Coordination',
      description: 'Same-day or emergency appointments...'
    },
    // ... more steps
  ]}
  accentColor="orange"
  brands={[...]}
  relatedServices={[...]}
/>
```

**Accent Colors**: `'blue' | 'green' | 'orange' | 'teal' | 'red'`
**Background**: `'white' | 'slate' | 'gradient'`

---

### 2. ScrollingProcessSection (Premium Visual Experience)

**Best For**: High-value services, feature showcases, premium installations

**Features**:
- Continuous scroll-based animation
- Active step highlighting with glow effects
- Large circular icons with gradient backgrounds
- Arrow indicators between steps
- Parallax-style background effects
- Steps become active as user scrolls through them

**Usage**:
```tsx
import ScrollingProcessSection from '../components/ScrollingProcessSection';
import { Thermometer, Calendar, Wrench, Award } from 'lucide-react';

<ScrollingProcessSection
  title="Your Boiler Installation Journey"
  subtitle="From consultation to completion"
  steps={[
    {
      number: 1,
      icon: Thermometer,
      title: 'Free Home Survey',
      description: 'Our heating specialist visits...'
    },
    // ... more steps
  ]}
  accentColor="blue"
/>
```

---

### 3. EnhancedProcessSection (Dark Theme Showcase)

**Best For**: Premium services, installation processes, high-end offerings

**Features**:
- Dark gradient background (slate-900 to black)
- Glowing circular step icons
- Blue gradient text highlights
- Fade-in animations with delays
- Professional premium feel
- Badge text with highlighted title

**Usage**:
```tsx
import EnhancedProcessSection from '../components/EnhancedProcessSection';
import { ClipboardCheck, Calendar, Wrench, Truck } from 'lucide-react';

<EnhancedProcessSection
  badgeText="4 EASY STEPS"
  title="Boiler Installation"
  titleHighlight="Made Simple"
  steps={[
    {
      number: '1',
      icon: ClipboardCheck,
      title: 'Free Consultation & Survey',
      description: 'We visit your home to assess...'
    },
    // ... more steps
  ]}
  brands={[...]}
  relatedServices={[...]}
/>
```

---

### 4. ProcessSection (Classic Style)

**Best For**: Simple processes, quick explanations, basic flows

**Features**:
- Clean, straightforward layout
- Numbered circles with step titles
- No animations (static)
- Lightweight and fast
- Related services section

**Usage**:
```tsx
import ProcessSection from '../components/ProcessSection';

<ProcessSection
  title="Our Service Process"
  subtitle="Simple and straightforward"
  steps={[
    {
      step: 1,
      title: 'Contact Us',
      description: 'Call or book online...'
    },
    // ... more steps
  ]}
  relatedServices={[...]}
/>
```

---

## Choosing the Right Component

### Use AnimatedProcessSection when:
- You want modern scroll animations
- Service has 3-5 clear steps
- You need accent color matching (landlord orange, heating green, etc.)
- Related services are important to show
- Page needs professional but approachable feel

### Use ScrollingProcessSection when:
- Service is premium or high-value
- You want maximum visual impact
- Process is customer journey focused
- Each step deserves individual spotlight
- Want to create a "story" feel

### Use EnhancedProcessSection when:
- Service is a major installation or project
- Want to stand out with dark premium aesthetic
- Process involves significant investment
- Need to highlight multiple brand partnerships
- Want to convey expertise and professionalism

### Use ProcessSection when:
- Simple, straightforward process
- Page already has many visual elements
- Need fast load times
- Process is supplementary content
- Budget or time constraints

---

## Service-Specific Examples

### Property Management Services
```tsx
<AnimatedProcessSection
  title="How We Support Property Managers"
  subtitle="Streamlined service delivery for letting agencies"
  steps={[
    {
      step: 1,
      icon: Clock,
      title: 'Rapid Response Coordination',
      description: 'Same-day or emergency appointments for reactive issues. We prioritize property manager calls to minimize tenant disruption.'
    },
    {
      step: 2,
      icon: Shield,
      title: 'Professional Engineer Visit',
      description: 'Gas Safe engineers arrive on time, communicate professionally with tenants, provide comprehensive repairs.'
    },
    {
      step: 3,
      icon: FileText,
      title: 'Detailed Documentation',
      description: 'Photographic job reports with before/after images, clear explanations, ready to forward to landlords.'
    },
    {
      step: 4,
      icon: CheckCircle2,
      title: 'Compliance Tracking',
      description: 'All certifications tracked and scheduled with automatic annual reminders.'
    }
  ]}
  accentColor="orange"
/>
```

### Gas Safety Certificates
```tsx
<AnimatedProcessSection
  title="Your CP12 Gas Safety Check Process"
  subtitle="Comprehensive inspection ensuring full legal compliance"
  steps={[
    {
      step: 1,
      icon: Calendar,
      title: 'Schedule Your Check',
      description: 'Book your CP12 inspection at a convenient time. Flexible scheduling including evenings and weekends.'
    },
    {
      step: 2,
      icon: Shield,
      title: 'Comprehensive Inspection',
      description: 'Gas Safe engineer inspects all gas appliances, pipework, flues, safety devices, and ventilation.'
    },
    {
      step: 3,
      icon: Wrench,
      title: 'Testing & Verification',
      description: 'Detailed gas pressure tests, flue analysis, combustion checks, and CO assessments to UK regulations.'
    },
    {
      step: 4,
      icon: FileCheck,
      title: 'Certificate Delivery',
      description: 'Official CP12 certificate issued same-day. Digital copies emailed immediately, printed copies posted.'
    }
  ]}
  accentColor="blue"
/>
```

### Boiler Installation
```tsx
<EnhancedProcessSection
  badgeText="4 EASY STEPS"
  title="Boiler Installation"
  titleHighlight="Made Simple"
  steps={[
    {
      number: '1',
      icon: ClipboardCheck,
      title: 'Free Consultation & Survey',
      description: 'We visit your home to assess heating needs, check space, and recommend the best boiler model.'
    },
    {
      number: '2',
      icon: Calendar,
      title: 'Fixed Quote & Planning',
      description: 'Transparent quote with no hidden costs. Discussion of timeline and preparatory work.'
    },
    {
      number: '3',
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Gas Safe engineers complete installation safely, including commissioning and testing.'
    },
    {
      number: '4',
      icon: Truck,
      title: 'Handover & Warranty',
      description: 'We explain operation, provide documentation, and register your warranty.'
    }
  ]}
  brands={[...]}
/>
```

### Emergency Plumbing
```tsx
<ScrollingProcessSection
  title="Emergency Response Process"
  subtitle="When every minute counts"
  steps={[
    {
      number: 1,
      icon: Phone,
      title: 'Immediate Contact',
      description: '24/7 phone line answered by real people, not answerphones. Quick assessment of your emergency.'
    },
    {
      number: 2,
      icon: Truck,
      title: 'Rapid Dispatch',
      description: 'Engineer dispatched within minutes. GPS tracking ensures fastest route to your property.'
    },
    {
      number: 3,
      icon: Wrench,
      title: 'Expert Repair',
      description: 'Fully stocked van with common parts. Most emergencies fixed on first visit.'
    },
    {
      number: 4,
      icon: CheckCircle2,
      title: 'Follow-Up Care',
      description: 'Courtesy call next day. 12-month guarantee on all emergency repairs.'
    }
  ]}
  accentColor="red"
/>
```

---

## Icon Recommendations by Service Type

**Landlord Services**: Calendar, Shield, FileText, FileCheck, ClipboardCheck, AlertTriangle
**Boiler Services**: Thermometer, Wrench, Gauge, Zap, Award, ThermometerSun
**Emergency Services**: Phone, Clock, Truck, AlertTriangle, Siren
**Installation Services**: ClipboardCheck, Calendar, Wrench, Truck, Home, Award
**Compliance/Certification**: Shield, FileCheck, Clipboard, CheckCircle2, Award

---

## Best Practices

1. **Keep descriptions concise**: 1-2 sentences per step
2. **Use action-oriented titles**: Start with verbs when possible
3. **Match accent colors to page theme**: Orange for landlord, blue for general, green for eco
4. **Include icons**: They significantly improve visual appeal and comprehension
5. **Add related services**: Help users discover additional services
6. **Use specific language**: Tailor copy to the exact service context
7. **Highlight benefits**: Focus on what the customer gains at each step

---

## Performance Notes

- All components use IntersectionObserver for scroll-based animations
- Animations only trigger when elements are in viewport
- No external dependencies beyond lucide-react
- Minimal bundle impact (~5KB combined for all components)
