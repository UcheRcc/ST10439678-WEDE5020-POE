# ST10439678 — WEDE5020 — PoE (Part 1, Part 2 & Part 3)
CloudTech — a fictional SA retailer for curated premium gadgets.

## Student Info

- Name: Uche (ST10439678)
- Module: WEDE5020
- Submission: Part 1, Part 2 (CSS Styling + Responsive Design) & Part 3 (Functionality & SEO)

## Project Overview
Build a five-page static website (Home, About, Products, Enquiry, Contact) with semantic HTML, clean repo hygiene, and accessible content.

- *Part 1*: HTML scaffold, basic CSS, navigation, enquiry form, wireframes, proposals.  
- *Part 2*: Move styling to external stylesheets, add desktop typography/layout/decoration, pseudo-classes, responsive breakpoints, responsive images, and README / changelog updates.
- *Part 3*: Add JavaScript interactivity, dynamic content, enhanced SEO, form validation with AJAX-style submission, and GitHub updates.

## Goals & KPIs

- *G1*: Publish a clear 5-page scaffold (KPI: pages load, nav works).
- *G2*: Present product info & enquiry path (KPI: Enquiry form has required fields).
- *G3*: Repo hygiene (KPI: README with sitemap, changelog, references).
- *G4 (Part 2)*: External CSS linked on every page; consistent typography/layout/colours; pseudo-classes applied (hover, focus-visible, active, focus-within; form valid/invalid).
- *G5 (Part 2)*: Responsive behaviour (breakpoints ~1024px & 768/600px), mobile nav toggle, and responsive images (sizes/uniform aspect-ratio).
- *G6 (Part 3)*: JavaScript-powered interactive elements, search/filtering, improved SEO (on-page + technical), validated forms, and AJAX-style submission for a smoother user experience.

## Sitemap

- Home (Home.html)
- About (About.html)
- Products (Products.html)
- Enquiry (Enquiry.html)
- Contact (Contact.html)

## Folder Structure

/CloudTech/  
About.html  
Contact.html  
Enquiry.html  
Home.html  
Products.html  
/css/  
base.css      # Part 1 base (reset, variables, grid/cards, forms)  
style.css     # Part 2 additions (typography, layout polish, pseudo-classes, breakpoints)  
/javascript/  
main.js       # footer year, mobile nav toggle, Part 3 interactivity and validation  
/Images/  
cloudtech-mark.svg  
favicon.svg  
iphone_15_plus_black_pdp_image_position-1__wwen_5.jpg  
macbook_air_13_in_m3_midnight_pdp_image_position_1__wwen_1_1_1.jpg  
01.ls_jbl_junior_320bt_product_image_hero_blue_1_1_1.jpg  
(other product images)  
/Docs/  
home_wireframe.png  
about_wireframe.png  
products_wireframe.png  
enquiry_wireframe.png  
contact_wireframe.png  
Part1 Website Project Proposals CloudTech.docx  
/screenshots/   # Part 2 evidence  
desktop.png  
tablet.png  
mobile.png  
robots.txt  
sitemap.xml  
LICENSE  
README.md  

## Timeline & Milestones (Part 1)

- Week 1: Choose target organisation(s), gather content.  
- Week 2: Build HTML scaffold + global navigation.  
- Week 3: Add enquiry form, images, and README sections.  
- Week 4: Produce wireframes and proposals; final tidy and submission.

## Part 2 Details (CSS Styling & Responsive Design)

- Added css/style.css and linked after base.css on all pages.  
- Fluid typography scale via clamp(); consistent spacing and line-height.  
- Layout polish: hero spacing; product card grid with equal heights and aligned buttons.  
- Pseudo-classes: :hover, :focus-visible, :active, :focus-within; input:required:invalid / input:valid.  
- Responsive: breakpoints at ≈1024px and 768/600px; grid collapses; type scales; header/nav adapts with a mobile toggle (button + aria-expanded).  
- Images: uniform aspect ratio, sizes hints, loading="lazy"; descriptive alt text.  
- Testing evidence: screenshots stored at CloudTech/Docs/screenshots/desktop.png, tablet.png, mobile.png.

## Part 3 — Enhancing Functionality and SEO

Part 3 extends the CloudTech website by adding JavaScript interactivity, dynamic content, improved Search Engine Optimisation (SEO), and robust form validation.

### 1. JavaScript Enhancements

All JavaScript for this phase is handled in `javascript/main.js` and is loaded on the relevant pages after the HTML.

#### 1.1 Interactive Elements

- **About Page Accordion:**  
  The About page includes an FAQ-style accordion. Clicking a question toggles an answer panel by adding or removing an `.is-open` class. The button uses `aria-expanded`, `aria-controls` and a `hidden` panel so the interaction remains accessible.

- **Products Gallery Lightbox:**  
  Product images on the Products page open in a lightbox overlay when clicked. The selected image is displayed at a larger size with a darkened background and a close button / ESC key support. This allows users to inspect product visuals without leaving the page.

- **Subtle Animations and Transitions:**  
  Existing CSS transitions on navigation links, buttons, and product cards are triggered by user hover/focus actions. JavaScript adds classes when the lightbox opens to support additional animation.

- **Interactive Map Embed (Contact):**  
  The Contact page now includes an embedded map for the Johannesburg HQ. Users can pan and zoom directly in the iframe, improving location awareness.

#### 1.2 Dynamic Content

- **Product Search / Filter:**  
  A search input on the Products page allows users to filter visible products in real time. As the user types, JavaScript checks the card titles and category labels (data attributes) and hides products that do not match. This demonstrates DOM manipulation and improves usability for larger product sets.

### 2. Search Engine Optimisation (SEO)

SEO improvements were applied across all five pages:

- **On-page SEO**
  - Unique, descriptive `<title>` and `<meta name="description">` tags per page (Home, About, Products, Enquiry, Contact).
  - Clear heading hierarchy using `<h1>` for the main page title and `<h2>` / `<h3>` for sections.
  - Descriptive `alt` text for all images (e.g., “iPhone 15 Plus in black, front and back view”).
  - Clean, readable URLs (e.g., `Home.html`, `Products.html`, `Enquiry.html`).
  - Internal links between related pages to support crawlability and user navigation.

- **Off-page SEO (conceptual plan)**
  - The README describes how CloudTech could use social media posts and backlinks from partner sites or tech blogs to increase visibility.
  - Local SEO is supported by including South African context and contact details for Johannesburg and Pretoria.

- **Technical SEO**
  - **robots.txt:** Added at the project root to indicate which paths should be crawled and to exclude documentation folders.
  - **sitemap.xml:** Added to list all five key pages of the CloudTech site.
  - Basic performance optimisations include re-use of shared CSS and JS files, compressed images where possible, and lazy loading of non-critical product images.

- **Security considerations**
  - External links (e.g., WhatsApp) use `rel="noopener"` for safer tab opening.
  - Form data is validated on the client before any submission attempt to reduce malformed requests.

### 3. Form Functionality and Validation

Both `Enquiry.html` and `Contact.html` now contain enhanced forms:

- **Form Structure:**
  - Forms include fields for name, email, phone (where applicable), subject / product, and message body, using appropriate HTML elements (`input`, `select`, `textarea`).
  - Labels and `aria-` attributes are used to support accessibility.
  - Error messages are displayed in `<small>` elements linked to the relevant fields using `data-error-for`.

- **HTML Validation:**
  - Inputs use built-in HTML attributes such as `required`, `type="email"`, `minlength`, and `pattern` for phone numbers where appropriate.

- **JavaScript Validation (Client-Side):**
  - On submit, JavaScript prevents the default form submission, validates each field, and displays friendly error messages next to invalid inputs.
  - Valid fields are visually confirmed using CSS classes (e.g., `field-valid` / `field-error`), while invalid fields are highlighted and announced for screen readers using `aria-live` regions.
  - The first invalid field is focused automatically so that keyboard users can correct it quickly.

- **AJAX-style Submission:**
  - After successful validation, the form data is packaged into a JSON object and submitted asynchronously using `fetch()` to a placeholder URL.
  - On “success”, the page displays a confirmation message and clears the form to simulate a real-world contact / enquiry flow.
  - Errors during the request are caught and an error message is displayed without reloading the page.

### 4. GitHub Repository Updates

The GitHub repository was updated to include:

- New JavaScript functionality in `javascript/main.js`.
- Additional SEO-related files: `robots.txt` and `sitemap.xml`.
- Updated Contact and Enquiry pages with interactive forms and validation messages.
- A lightbox overlay on the Products page and an accordion on the About page.
- This README section documenting Part 3 outcomes and how they align with the module learning outcomes.

## Changelog

*19 Nov 2025 — Part 3*  

- Added accordion component to the About page using accessible buttons and panels.  
- Implemented lightbox overlay for product images and live product search / filter on the Products page.  
- Enhanced Enquiry and Contact forms with HTML and JavaScript validation, inline error messages, and AJAX-style submission using `fetch()`.  
- Embedded a location map on the Contact page.  
- Added `robots.txt` and `sitemap.xml` for basic technical SEO support.  
- Updated README with Part 3 functionality and learning outcome alignment.

*24 Sep 2025 — Part 2*  

- Added css/style.css (typography, layout, decoration, pseudo-classes, media queries).  
- Linked style.css on all pages; implemented mobile nav toggle (JS + accessible states).  
- Made product images responsive (uniform aspect ratio + sizes); aligned card buttons.  
- Captured device screenshots and placed under Docs/screenshots/.  
- Updated README with Part 2 details and rubric-aligned notes.

*27 Aug 2025 — Part 1*  

- Repo initialised. Added folder structure (css/, Images/, javascript/) and five HTML files.  
- Implemented semantic layout (header, nav, main, footer) and global navigation with aria-current.  
- Added base.css (responsive grid/cards, buttons, typography) and main.js (auto-year in footer).  
- Built Enquiry form (required fields, hints) with explanatory comments.  
- Added robots.txt and sitemap.xml placeholders.  
- Created low-fidelity wireframes (Home, About, Products, Enquiry, Contact).  
- Wrote two Project Proposals (CloudTech + NPO alternate) with goals/KPIs, requirements, timeline, budget.  
- Media attribution and references added (iStore/JBL product pages; MDN; WCAG).

## References (Harvard – IIE adapted)

*Images / Product Pages*  

- iStore. 2025. Apple iPhone 15 Plus – Product Page. Available at: https://www.istore.co.za/shop-iphone-15  [Accessed 27 Aug 2025].  
- iStore. 2025. MacBook Air 13-inch (M3) – Product Page. Available at: https://www.istore.co.za/discover-mac  [Accessed 27 Aug 2025].  
- JBL. 2025. JBL JR 320BT – Product Images. Available at: https://www.jbl.com/  [Accessed 27 Aug 2025].

*Code & Documentation*  

- MDN Web Docs. 2025. *HTML Elements; CSS Layout; Media Queries; Images (srcset/sizes); Web Forms.* Available at: https://developer.mozilla.org/  [Accessed 24 Sep 2025].  
- W3C. 2018. WCAG 2.1 Quick Reference. Available at: https://www.w3.org/WAI/standards-guidelines/wcag/  [Accessed 24 Sep 2025].

## Notes on Media Usage

Product imagery is used for academic purposes only (non-commercial). Prefer CC0/royalty-free sources where possible.  
Include descriptive alt text (e.g., “iPhone 15 Plus in black, front and back”).  
If adapting code, cite inline as an HTML comment, e.g.:  
`<!-- Source: MDN Flexbox guide (accessed 24 Sep 2025) -->`