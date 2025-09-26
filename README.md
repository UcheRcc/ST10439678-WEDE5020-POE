
# ST10439678 — WEDE5020 — PoE (Part 1 & Part 2)
CloudTech — a fictional SA retailer for curated premium gadgets.

## Student Info
- Name: Uche (ST10439678)
- Module: WEDE5020
- Submission: Part 1 (completed) & Part 2 (CSS Styling + Responsive Design)

## Project Overview
Build a five-page static website (Home, About, Products, Enquiry, Contact) with semantic HTML, clean repo hygiene, and accessible content.

- *Part 1*: HTML scaffold, basic CSS, navigation, enquiry form, wireframes, proposals.  
- *Part 2: Move styling to **external stylesheets, add desktop typography/layout/decoration, **pseudo-classes, **responsive breakpoints, **responsive images*, and README/changelog updates.

## Goals & KPIs
- *G1*: Publish a clear 5-page scaffold (KPI: pages load, nav works).
- *G2*: Present product info & enquiry path (KPI: Enquiry form has required fields).
- *G3*: Repo hygiene (KPI: README with sitemap, changelog, references).
- *G4 (Part 2): External CSS linked on **every* page; consistent typography/layout/colours; pseudo-classes applied (hover, focus-visible, active, focus-within; form valid/invalid).
- *G5 (Part 2)*: Responsive behaviour (breakpoints ~1024px & 768/600px), mobile nav toggle, and responsive images (sizes/uniform aspect-ratio).

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
main.js       # footer year + mobile nav toggle
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
LICENSE
README.md

## Timeline & Milestones (Part 1)
- Week 1: Choose target organisation(s), gather content.  
- Week 2: Build HTML scaffold + global navigation.  
- Week 3: Add enquiry form, images, and README sections.  
- Week 4: Produce wireframes and proposals; final tidy and submission.

## Part 2 Details (CSS Styling & Responsive Design)
- Added css/style.css and linked *after* base.css on all pages.  
- Fluid *typography* scale via clamp(); consistent spacing and line-height.  
- *Layout* polish: hero spacing; product card grid with equal heights and aligned buttons.  
- *Pseudo-classes*: :hover, :focus-visible, :active, :focus-within; input:required:invalid / input:valid.  
- *Responsive: breakpoints at ≈1024px and 768/600px; grid collapses; type scales; header/nav adapts with a **mobile toggle* (button + aria-expanded).  
- *Images*: uniform aspect ratio, sizes hints, loading="lazy"; descriptive alt text.  
- *Testing evidence*: screenshots stored at CloudTech/Docs/screenshots/desktop.png, tablet.png, mobile.png.

## Changelog
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
<!-- Source: MDN Flexbox guide (accessed 24 Sep 2025) -->

