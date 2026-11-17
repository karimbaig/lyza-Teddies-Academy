# Lyza's Teddies Academy — Playful 3D Parallax Website

## Visual direction
- Colours from the logo: bubblegum pink, cherry red, sky blue, butter yellow, ink navy, on a warm cream base.
- Rounded display font (Fredoka / Baloo 2) with a clean body font (Nunito). Soft "clay" 3D look: chunky rounded shapes, soft shadows, bouncy motion.
- No emojis. Custom large SVG icons drawn to match the logo (shield, heart, crayon, book, sun, cloud, bear paw).
- AI-generated cut-out pictures with transparent backgrounds (3D teddy mascot, toy blocks, rainbow, balloons, clouds, crayons, stars) that float, bob and react to scrolling. Realistic photos of a bright nursery setting and happy children for the image sections.
- Logo from your upload used in the header and footer.

## Pages
1. **Home (long scrolling page with deep parallax)**
   - Animated header: floating rounded bar that shrinks on scroll, rainbow underline on links, "Book a Visit" button, playful mobile menu.
   - Hero: 3D interactive teddy and floating toys (moves with mouse and scroll), "Nurturing Curious Minds", layered parallax clouds and hills.
   - About preview (Est. 2023, Canary Wharf, ages 3 months to 7 years), Intent / Impact / Implementation cards.
   - Programmes: Little Cubs, Creative Explorers, Pre-School Pioneers as tilting 3D cards.
   - Services (care, early learning, meals, outdoor play, development updates).
   - Why Choose Us: Safe and Secure, 100% Parent Satisfaction, Bespoke Curriculum (EYFS + Montessori / Reggio Emilia), home-from-home care.
   - Google Reviews: 5.0 rating, the six real reviews (Nicky B, Manel Kouadri, Teodora Macari, Daniela Vicol, Imtinan Ali Khan, Khari Clarke) in a playful swinging carousel.
   - Trust strip (EEAT): founder story, years running, real address, phone, opening hours.
   - FAQs with bouncy open/close.
   - Call-to-action and detailed footer: address, phone, hours, links, map, logo.
2. **About Us**: story, approach, values, setting photos, founder section.
3. **Weekly Menu**: text taken from your menu PDF and shown as a colourful day-by-day board with food illustrations.
4. **Newsletters**: September and October newsletters shown as a flip-book you turn page by page with a page-curl animation, plus a download button.
5. **Contact Us**: playful form, address, phone +44 7845 589174, hours (closes 6 pm), embedded map. Form messages saved so they are not lost (needs Lovable Cloud).

## Things to note
- You said "one page" but also asked for separate About, Menu, Newsletter and Contact pages. I'll build Home as one long parallax page and the others as their own pages.
- You mentioned more images coming. I'll use images from the newsletters for now and swap in yours when you send them.
- Opening time isn't given (only "closes 6 pm"). I'll show "Mon–Fri, closes 6 pm" until you confirm.
- Animations will be smooth CSS/JS and 3D, not GIFs, because GIFs look blurry and load slowly.

## Technical details
- React Three Fiber + drei for the hero 3D scene (client-only); framer-motion / Lenis smooth scroll for parallax; respects reduced motion.
- Routes: `/`, `/about`, `/menu`, `/newsletter`, `/contact`, each with its own SEO head and LocalBusiness/ChildCare structured data on Home.
- PDFs uploaded as CDN assets; flip-book with react-pageflip + pdfjs page rendering.
- Menu text extracted from the PDF at build time into a typed data file.
- Lovable Cloud table for contact submissions with insert-only access.
- Transparent PNG decorations generated with the image tool into `src/assets`.
