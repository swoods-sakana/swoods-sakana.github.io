# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML/CSS/JS — no build step, no dependencies, no framework. Confirmed by the user. The site must remain hand-editable and deployable by copying the folder to a static host (GitHub Pages, Netlify, or similar). The predecessor site was structured as separate HTML documents (`index`, `sailbot.html`, per-project pages); multi-page static HTML remains the working structure.

## Users

**Primary:** engineering co-op recruiters and hiring managers, screening candidates for internships and co-op terms. They arrive from a resume, LinkedIn, or an application link, usually with a stack of other candidates open, and are skimming to answer one question: *is this student's hands-on depth real?* They are technical enough to recognize a 5kN load case, an FEA validation, and a galvanic corrosion mitigation as genuine engineering judgment — and equally quick to discount padded achievement language.

Success is a recruiter who skims the site, believes the depth is real, and advances Sam Woods to an interview.

Secondary readers (not the design target): UBC design-team leads, faculty, and peers who look Sam up.

## Product Purpose

A personal engineering portfolio for Sam Woods, a second-year Engineering Physics student at UBC. It exists to make hands-on mechanical, electrical, and manufacturing work legible and credible to a technical reader in a short visit, and to carry more detail than a one-page resume can — specifically the reasoning behind design decisions and what went wrong in the physical build.

The site is a companion to, not a replacement for, the resume PDF.

## Positioning

What a neighboring student portfolio could not truthfully copy: Sam has shipped a real structural redesign onto a real vessel that then went on the water. The Sailbot solar panel mount is a complete engineering arc — an inherited design failing against physical reality, a from-scratch redesign, FEA validation against a defined worst-case load, a procurement problem creating a corrosion risk, a field mitigation, bonding to a carbon fibre deck, formal design reviews with a multidisciplinary team, and internal documentation so others could rebuild it. Most second-year portfolios carry coursework; this one carries a part on a boat.

The through-line across all work is a physics-backed, first-principles approach applied to problems at the intersection of mechanical systems and control — spanning marine, robotics, and aerospace.

## Operating Context

- **Reading scene:** short, skimmed, desktop-first during recruiting screens; mobile whenever the link is opened from LinkedIn or a phone. Often one of many tabs.
- **Entry points:** resume PDF link, LinkedIn profile, direct application materials.
- **Content structure:** a homepage carrying hero, about, skills, experience, projects, and education, with deeper detail pages for work that warrants it (currently the Sailbot role and the two class projects). Cards on the homepage link through to detail pages.
- **Extensibility:** the Sailbot detail page must stay structured so a future "Foil Team — Hydrofoil Geometry Research" section can be appended without restructuring. The 5-DOF Robotic Arm currently has a card but no detail page; both are anticipated future additions, deliberately out of scope for this build.
- **Update rhythm:** Sam edits this himself as coursework, team work, and projects progress. Hand-editability is a real constraint, not a preference.

## Capabilities and Constraints

- Static content site. No backend, no forms requiring a server, no authentication, no CMS.
- Must work as plain files opened from a static host without a build step.
- Content scope for this build is the existing written content only (confirmed by the user):
  - **Excluded:** a detail page for the 5-DOF Robotic Arm (card only), the Foil Team / hydrofoil section, and adding C++/Java/FEA/Arduino to the site's skill tag list. These are future additions, not omissions to be quietly filled in.
- The site's skill tags stay as currently published: SolidWorks, KiCAD, Python, C, MATLAB, Linux, Git.
- **GitHub link is omitted entirely** for this build. Sam has no finalized handle; the prior site shipped a dead `github.com/` placeholder and that must not be reproduced. The link gets added the day a real profile exists.
- Contact facts (confirmed): email `swoods07@student.ubc.ca`; LinkedIn `https://linkedin.com/in/sam-woods-807620381`. The phone number `(226) 501-4712` appears on the resume; treat it as resume-only and do not publish it on the site without asking.
- Source copy in the predecessor site contained spelling errors in the Rainwater Harvester section ("Hravester", "resisdents", "stakholder", "transleted", "stisfaction", "redeuction"). Corrected spellings are in the handoff doc and must be used.

## Brand Commitments

- **Name:** Sam Woods. **Role line:** "Engineering Physics Student" (used as a footer tagline).
- **Voice — this is the binding constraint on all copy:** honest, defensible, specific. No inflated claims. No unsupported soft-skill language. Concrete verbs and real numbers — the 50% fastener reduction, the 5kN worst-case wave load, the PTFE thread-tape fix, 2nd of 12, 3 board revisions, 6 MG996R servos. Where the work is shallow, say so plainly ("basic Arduino firmware", "simple PCB work") rather than dressing it up.
- **Scope-matched presentation:** large and ongoing work (Sailbot) earns expansive treatment; small one-off work (The Claw, Rainwater Harvester) stays brief and must not be padded to fill space. Sam explicitly asked that The Claw be kept modest.
- No logo, wordmark, or existing identity system is committed.
- **Standing visual commitment (confirmed by the user, 2026-09-11):** the site keeps a **familiar, conventional website interface**. Heavily themed visual worlds were offered and explicitly declined — the user's words were that they "were too much" and that the risk is "metaphor over substance." Engineering and physics theming is welcome but must stay **low-key: background texture and details on individual elements only**, never a conceit the page performs. The page reads first as a person, not as a document. Future surfaces inherit this; do not re-open the visual-world question without being asked.
- **The governing rule for that theming:** every technical detail must encode real information or it does not ship. Decoration that impersonates signal is the specific failure to avoid.
- **Reference:** `emajkic.github.io`, a classmate's portfolio, cited by the user as the target for "clean, friendly, and professional" but criticised as "a little AI sloppy." Named tells to refuse, all present there: a decorative code-symbol strip that encodes nothing, CTA labels that disagree across sections, card numbering used as ornament. Craft bar for execution: `brittanychiang.com`, `linear.app`.

## Evidence on Hand

**Real, confirmed to exist — the user will copy these into the project folder:**
- `Resume.pdf` — linked from the hero.
- Photographs of Polaris and the solar panel mounting system. Captions already written for them:
  - "The redesigned aluminum-rail mounting system, bonded to the deck and ready for panel installation."
  - "Walking Sailbot's engineering team through the FEA results and final design at a formal design review."
  - Alt text in use: "Solar panel mounting assembly on Polaris's deck", "Presenting the mounting system redesign at a design review", "Polaris undergoing on-water testing".

**Written content:** all publication-ready copy — hero tagline, about, per-role and per-project overviews, bullets, and results — is in `portfolio-content-handoff.md` at the project root. That file is the content source of record for this build.

**Not available, and must not be fabricated:**
- The predecessor site's source files are not in this folder.
- No testimonials, references, quotes, endorsements, GPA, awards beyond the 2nd-of-12 class competition placement, or employer/company logos exist. None may be invented.
- No CAD renders, FEA result images, PCB renders, or screenshots have been confirmed. Do not imply any image exists that has not been supplied.
- Exact filenames and directory for the supplied assets are not yet fixed; the build defines expected paths and tells the user precisely what to place where.

## Product Principles

1. **Credibility over polish.** A technical reader's belief is the conversion. Every claim must be traceable to something Sam actually did, with the specific number or detail attached.
2. **Depth proportional to the work.** Sailbot gets room; class projects get a paragraph. Padding a small project to match a large one reads as inexperience and undermines the honest-representation standard.
3. **Show the failure, not just the result.** The deck bump, the wrong-alloy fasteners, the corrosion risk, and the fixes are the most persuasive content on the site precisely because they are unflattering. Keep them.
4. **Skimmable first, readable second.** A recruiter's first pass is 30 seconds of scanning; the detail pages serve the one who decided to keep reading. Both passes have to work.
5. **Editable by its owner.** Sam maintains this himself. Structure and code that he cannot confidently extend is a failure of the deliverable, regardless of how it looks.

## Accessibility & Inclusion

No product-specific standard was established by the user. Baseline expectations apply: real alt text on all imagery (captions and alt text already written for the Sailbot photos), keyboard-reachable navigation and links, and legible contrast — a site read on phones and in bright offices by people skimming fast.
