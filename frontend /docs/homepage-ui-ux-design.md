# Homepage UI/UX Design Doc
zx
## Purpose
The homepage should position MyOnlineJet as a credible, future-facing aviation infrastructure company while still feeling premium, controlled, and easy to scan. The page is not a brochure; it is a high-trust landing experience that introduces the brand, explains the opportunity, and drives visitors toward two actions: learning more about the vision/technology and expressing interest in advisory or career opportunities.

## Experience Goals
- Establish immediate authority in the urban air mobility category.
- Communicate a strong sense of scale, innovation, and operational seriousness.
- Keep the page visually dramatic without sacrificing readability or trust.
- Make the primary story easy to follow in a single downward scroll.
- Convert interested visitors through clear CTAs and lightweight forms.

## Audience
- Investors and strategic partners evaluating credibility.
- Aviation, urban planning, energy, and infrastructure professionals.
- Potential advisory members and future employees.
- General visitors discovering the company for the first time.

## Brand and Tone
The homepage tone should feel premium, technical, and aspirational. The visual language is based on dark backgrounds, strong contrast, red accent highlights, glass-style surfaces, and large cinematic typography. Motion should feel intentional and restrained, not playful.

## Information Architecture
The homepage is a long-form narrative with one clear progression:

1. Hero introduction.
2. Vision and value proposition.
3. Technology platform overview.
4. Advisory network recruitment.
5. Newsroom updates.
6. Career opportunities.
7. Footer and contact/legal information.

This structure works because it moves from identity, to proof, to participation.

## Page Story

### 1. Hero
The hero must answer three questions quickly: who the company is, what it is building, and why it matters.

Current content direction:
- Headline: “Redefining Urban Air Mobility”.
- Supporting copy: smart vertiport infrastructure starting from Jaipur.
- Primary CTAs: “Explore Vision” and “View Technology”.
- Supporting proof points: market size, target cities, CO2 reduction, and travel-time improvement.
- Visual anchor: a vertiport visualization card with active status and operational framing.

UX intent:
- Make the first screen feel high-value and specific.
- Give users two immediate paths: strategic overview or technical depth.
- Provide enough proof to justify scrolling.

### 2. Vision Section
This section explains the company’s mission and differentiators.

Current content direction:
- Bento-style cards for urban integration, sustainability, safety, network effects, and rapid deployment.
- Sustainability card includes progress-style indicators.

UX intent:
- Break the promise into concrete pillars.
- Use card variety to prevent the page from feeling repetitive.
- Reinforce trust through structured, measurable claims.

### 3. Technology Section
This section explains the stack behind the vision.

Current content direction:
- Platform overview narrative.
- Summary stats such as uptime, renewable power, and 24/7 operations.
- Three technology cards covering operations, infrastructure, and integration.

UX intent:
- Translate ambition into an understandable operating model.
- Make the company feel engineered rather than aspirational only.
- Use concise labels and chips to support skimming.

### 4. Advisory Network
This section is a conversion path for experienced professionals.

Current content direction:
- Left column: explanation of the advisory opportunity and checklist of expectations.
- Right column: expertise tiles for aviation, energy, urban, and regulatory backgrounds.
- CTA: “Express Interest” opening a modal form.

UX intent:
- Present the advisory network as selective and serious.
- Reduce friction by using a short modal instead of a separate page.
- Keep the ask clear: interest registration, not a full application.

### 5. Newsroom
This section provides freshness and external credibility.

Current content direction:
- Embedded newsroom widget.
- View-all link to the external blog/news destination.

UX intent:
- Demonstrate ongoing activity.
- Reduce the feeling of a static marketing site.
- Give returning users a reason to revisit.

### 6. Careers
This section communicates long-term hiring intent without overpromising active openings.

Current content direction:
- Recruitment notice and future-opportunity framing.
- Highlight cards for likely future roles.
- CTA: “Register Interest” opening a modal form.

UX intent:
- Build future talent awareness now.
- Avoid implying open requisitions that do not yet exist.
- Make the hiring path feel transparent and structured.

### 7. Footer and Contact
The footer closes the narrative with useful navigation, social proof, and legal clarity.

Current content direction:
- Company, infrastructure, and resource links.
- Social channels.
- Privacy, terms, legal, sitemap.
- Data protection and legal disclaimer panel.

UX intent:
- Leave the user with confidence and clear next steps.
- Make policy and compliance easy to find.
- Ensure the brand feels accountable.

## Interaction Model

### Navigation
- Sticky header with a compact logo and top-level anchors.
- Desktop navigation should emphasize the core story sections.
- Mobile navigation should preserve the same order and make the contact CTA obvious.

### Scrolling and Motion
- Scroll progress indicator should provide subtle orientation.
- Section reveal animations should activate once, not loop.
- Hero tilt and spotlight effects should stay secondary to content.
- Motion should support hierarchy and momentum, not distract.

### Modals
- Advisory and career forms should open in a centered modal.
- Background scrolling should be locked while the modal is open.
- Escape key and backdrop click should close the modal.
- Form submission should confirm the action and close the modal.

### Content Behavior
- External links should clearly open new destinations when appropriate.
- CTA labels should stay action-oriented and specific.
- Claims that imply operational scale should remain measurable or clearly framed as goals.

## Visual System

### Color
- Base: deep navy and near-black backgrounds.
- Accent: strong red for primary actions and emphasis.
- Supporting accents: green, blue, yellow, and purple for semantic differentiation.

### Typography
- Large display headings for section transitions.
- High-weight headline treatment for the hero.
- Smaller supporting copy with enough line-height for dense information.

### Layout
- Use a wide desktop container with generous vertical rhythm.
- Alternate between full-width sections, split layouts, and card grids.
- Use bento and spotlight cards to vary density and keep the experience dynamic.

### Imagery and Icons
- Use a single strong hero visual instead of many competing images.
- Use icons to distinguish technical categories and service themes.
- Keep imagery functional and aviation-specific.

## Responsive Behavior
- Desktop should preserve the cinematic hero and multi-column section layouts.
- Tablet should keep the same hierarchy but reduce card density where needed.
- Mobile should stack sections vertically with fewer columns, larger tap targets, and simplified spacing.
- The hero copy must remain readable without depending on the side visual.
- Modal forms should fit comfortably on smaller viewports with scrollable content.

## Accessibility Requirements
- Maintain strong contrast between text and background.
- Ensure all primary actions are keyboard accessible.
- Provide visible focus states for links, buttons, and form controls.
- Keep modal focus behavior predictable.
- Preserve semantic heading order for screen readers.
- Do not rely on motion alone to communicate state or progress.

## Content Rules
- Lead with specific claims, not generic futurist language.
- Avoid stacking too many adjectives in the hero or section headings.
- Make every CTA map to a meaningful next step.
- Keep compliance language visible where financial, hiring, or regulatory implications exist.
- Use the homepage to orient users, not to explain every product detail.

## Success Criteria
- Visitors understand the company’s purpose within the first screen.
- Users can identify the three main themes: vision, technology, and participation.
- Advisory and career interest forms are easy to discover and complete.
- The page feels premium and credible on desktop and mobile.
- Legal and trust information is easy to find without interrupting the story.

## Open Questions
- Should the homepage prioritize investors, partners, or talent more explicitly in the hero CTA hierarchy?
- Should newsroom content become a more prominent trust signal or stay secondary?
- Should the advisory and careers forms eventually move to dedicated pages for deeper qualification?
