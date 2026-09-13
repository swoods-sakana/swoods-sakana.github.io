# Portfolio Content Handoff — Sam Woods

This file contains all the written content, facts, and context for Sam Woods' engineering portfolio site. It intentionally excludes any design/layout/styling direction — the receiving agent should make its own design decisions. Everything below is either already live on the current site, present in Sam's resume, or background context Sam has established as important to preserve.

---

## Basic Info

- **Name:** Sam Woods
- **Program:** Engineering Physics, BASc — University of British Columbia, Vancouver, BC (2025–Present, 2nd year)
- **Email:** swoods07@student.ubc.ca
- **LinkedIn:** linkedin.com/in/sam-woods-807620381
- **GitHub:** not yet finalized (placeholder `github.com/` on current site — needs a real handle)

## Hero / Tagline

> Engineering Physics student interested in Electrical and Mechanical Engineering as well as Physics, and drawn to problems in Aerospace, Marine, and Astronomy related fields.

Footer tagline used elsewhere: "Engineering Physics Student"

## About Me

> I'm a 2nd year Engineering Physics student who is drawn to creating innovative solutions in the aerospace, marine, and robotics fields using a physics-backed, first principles approach.

> I enjoy working with a multidisciplinary team on projects spanning electronics and mechanical prototyping and design.

**Resume profile blurb (more detailed, not currently on site — can be mined for phrasing):**
> Second-year Engineering Physics student with hands-on experience across mechanical design, embedded electronics, and manufacturing through UBC Sailbot and personal robotics projects. Demonstrated ability to quickly pick up new tools and skills and translate technical analysis into documentation and presentations for a cross-disciplinary team. Particularly interested in problems at the intersection of mechanical systems and control, spanning marine, robotics, and aerospace applications.

## Skills / Tags

Currently on site: SolidWorks, KiCAD, Python, C, MATLAB, Linux, Git

From resume (more complete list):
- **Tools/Software:** SolidWorks, KiCad, Git, FEA, Arduino
- **Languages:** C, C++, MATLAB, Java, Python

(Note: resume includes C++ and Java, which aren't in the current site tag list — worth a decision on whether to add them.)

---

## Experience

### Mechanical Sub-team Member — UBC Sailbot Design Team
**Vancouver, BC — September 2025 to Present**

**Short/card version (used on homepage experience card):**
> Co-designed and manufactured a redesigned solar panel mounting system for Polaris, UBC Sailbot's autonomous research sailboat, cutting fastener count by 50% while resolving a deck clearance issue that blocked the previous design. Validated the redesign with SolidWorks FEA under a 5kN worst-case wave loading scenario, then presented it through a series of formal design reviews with the team's multidisciplinary engineering group.

**Full detail-page version (sailbot.html):**

*Overview:*
> I'm a member of UBC Sailbot's mechanical sub-team, working on the physical systems that keep our autonomous racing sailboats built, tested, and on the water. My work has centered on Polaris, the team's current boat, spanning structural design and FEA analysis to hands-on fabrication and internal documentation — with formal design reviews built into every stage so the rest of the engineering team can push back before anything gets bonded to the deck.

*Section: Solar Panel Mounting System — intro:*
> Polaris relies on a set of thin, flexible solar panels for onboard power — but the mounting system I inherited from a previous team member had a problem nobody had caught yet. Partway through manufacturing the first panel, we traced out where the mounting hardware would actually sit on the hull and found the deck wasn't flat — a bump in the geometry meant the panel couldn't clear the surface. Rather than patch around it, I worked with a materials engineering student and our subteam lead to redesign the whole system from scratch.

*Bullet list of what was done:*
- Co-designed a new aluminum-rail mounting system to replace the original 24-fastener design, cutting fastener count in half and making the panels dramatically faster to remove and reinstall for deck hatch access.
- Performed SolidWorks FEA on the redesigned assembly under a 5kN worst-case wave loading scenario, cross-checking hand calculations and confirming the design could be built with fewer, shorter rail sections than originally proposed.
- Identified a galvanic corrosion risk after a procurement mix-up delivered fasteners in an incompatible aluminum alloy, and resolved it with a PTFE thread-tape mitigation rather than re-ordering and delaying the build.
- Manufactured and bonded the final assembly to the boat's carbon fibre deck using structural epoxy, following proper surface prep and using the panel assembly itself as a stencil to avoid measurement error on a boat with no flat reference surfaces.
- Presented the design, analysis, and final results to Sailbot's multidisciplinary engineering team across a series of formal design reviews, incorporating their feedback at each stage.
- Authored internal assembly documentation for the hull, keel, and solar panel systems so that teammates unfamiliar with the mechanical build — including software team members — could assemble Polaris correctly without direct supervision.

*Result / closing paragraph:*
> The redesigned system cut fastener count per panel in half, resolved the deck clearance issue that had stalled the original design, and held up through Polaris's on-water testing ahead of its first multi-day launch. The project also gave me a real lesson in the gap between a CAD model and the physical part in your hands. The deck bump, the fastener mix-up, and the corrosion risk were all things no amount of upfront modeling would have caught, and working through them taught me to build in verification checkpoints rather than trusting a design to survive contact with reality unchanged.

*Placeholder for a future section (not yet written, structurally anticipated):*
> "Foil Team — Hydrofoil Geometry Research" — covering the team's transition to a hydrofoiling catamaran platform. Sam is researching hydrofoil geometry trade-offs (T-foils vs. surface-piercing) and lift-control actuation methods, including a feasibility study on a retracting windward foil, for a new hydrofoiling catamaran targeting an autonomous speed record. This is ongoing/active research, not a completed deliverable — should be framed accordingly when written up (see "Framing notes" below).

*Photo captions referenced (for context on what images exist/are needed):*
- "The redesigned aluminum-rail mounting system, bonded to the deck and ready for panel installation."
- "Walking Sailbot's engineering team through the FEA results and final design at a formal design review."
- Alt text used elsewhere: "Solar panel mounting assembly on Polaris's deck", "Presenting the mounting system redesign at a design review", "Polaris undergoing on-water testing"

**Tags associated with this role:** SolidWorks, FEA, Fabrication, Design Reviews

---

## Projects

### The Claw (Robotic Claw) — Class Project
**Introduction to Engineering II, UBC**

**Card blurb:** A class project to build a robotic claw for a competition.

**Full detail page:**

*Overview:*
> For our Introduction to Engineering II class, I worked with a team of six to design and build a servo-actuated robotic claw for an in-class competition.

*What I did:*
- Designed the claw's body and prepared engineering drawings in SolidWorks, then cut and bent the components from sheet aluminum.
- Actuated the claw with a servo motor driven by an Arduino Uno.
- Built a joystick-and-probe sensor system to detect ground proximity, which outperformed the sonar-based approaches other teams used.

*Result:*
> Our team placed 2nd out of 12 in the competition.

**Tags:** SolidWorks, Arduino, Sheet Metal

**Resume version (slightly different framing/detail, for reference):**
> Collaborated in a 6-person team to design, build, and program a servo-actuated robotic claw, engineering a joystick-probe ground detection sensor that outperformed sonar alternatives; placed 2nd out of 12. Produced SolidWorks CAD models and engineering drawings for the claw assembly.

**Framing note:** Sam wants this project kept modest/brief in presentation — it's intentionally a small write-up given the limited scope of the project.

---

### Rainwater Harvester — Class Project
**Introduction to Engineering II, UBC**

**Card blurb:** A simulated rainwater harvester system for the residents of remote Van Anda, BC.

**Full detail page:**

*Overview:*
> For our Introduction to Engineering II class, I worked with a team of six to design and model a rainwater harvester system in Microsoft Excel, referencing stakeholder interviews in a case study from the residents of Van Anda, BC.

*What I did:*
- Interpreted stakeholder needs from a series of interviews, and translated them into design criteria.
- Selected harvester system components, such as pumps, filters, and sterilization devices to meet the needs of the residents.
- Modeled the system in Microsoft Excel, and optimized system parameters around stakeholder satisfaction and cost reduction.

*Result:*
> Created a system that would allow Van Anda residents to transition away from importing drinking water.

**Tags:** Excel

*(Note: source HTML had typos — "Hravester", "resisdents", "stakholder", "transleted", "stisfaction", "redeuction" — corrected above; use corrected spellings.)*

---

### 5-DOF Robotic Arm — Personal Project (In Progress)

**Card blurb currently on site:** Developing a 5 Degree of Freedom (DOF) with a custom ESP32 servo controller breakout board.

**No full detail page exists yet.** Resume bullets to build the write-up from:
- Designed and manufactured 3 revisions of a custom ESP32 servo breakout board in KiCad to route signal and power for 6 MG996R servos, consolidating circuitry, leading to a smaller electrical footprint.
- Modeled and prototyped the mechanical structure in SolidWorks with 3D-printed components; currently developing full system integration and inverse kinematics-based control code in C++ and Python.

**Tags:** KiCAD, SolidWorks, Arduino

**Framing note:** This is an active, in-progress personal project — status should read as "In Progress," not completed. Sam is comfortable being specific about the shallow parts (e.g., PCB work is fairly simple, firmware is basic Arduino/ESP32 work) rather than overstating depth.

---

## Education

**University of British Columbia — Bachelor of Applied Science**
Major in Engineering Physics
2025 — Present

**Highlighted Coursework (currently on site):**
- Linear Circuits (ELEC 204)
- Experimental Techniques (ENPH 259)
- C Programming (APSC 160)
- Intro to Circuits and E&M (PHYS 158)

**Additional coursework from resume (not currently listed on site):**
- Linear Algebra
- Calculus 1 & 2
- Programming in C/C++
- Electromagnetism
- Thermodynamics

---

## Context for the rebuilding agent (not for direct publication, but useful background)

- **Voice/tone principle:** Sam is explicit about wanting **honest, defensible, specific** representation — no inflated claims, no unsupported soft-skill language. If a piece of experience is shallow, say so plainly (e.g., "basic Arduino firmware," "simple PCB work") rather than dressing it up. Any copy written for the new site should follow this same standard: concrete verbs, specific numbers/details (like the 50% fastener reduction, the 5kN load case, the PTFE tape fix), and no vague achievement language.
- **Scope-matched presentation:** Bigger/ongoing things (Sailbot) can have more expansive write-ups; small/one-off things (the Claw, Rainwater Harvester) should stay brief and not be padded out.
- **Sailbot page is meant to be extensible** — structured so a "Foil Team" section can be appended later as that work develops (see placeholder above).
- **Two known gaps Sam has flagged himself as open items:**
  - No detail page yet exists for the 5-DOF Robotic Arm project (resume bullets above are the best current source).
  - A "hydrofoil geometry optimizer" project exists but was built via quick/rough scripting ("vibecoding") — Sam considers it **not resume-worthy** as a finished deliverable, and prefers it be framed (if included at all) as ongoing research rather than a completed project. Default to leaving it out unless asked.
- **Possible future skill gaps Sam may want to address in materials:** oscilloscope/lab instrumentation experience (for electrical-leaning roles), FEA or GD&T depth (for mechanical-leaning roles). Not current content, just useful context if the new agent is asked to help extend the site later.
- **Full resume text** is included below for reference/completeness, since it contains some phrasing and ordering not mirrored on the site.

---

## Full Resume Text (for reference)

**Sam Woods – Engineering Physics**
swoods07@student.ubc.ca | LinkedIn | (226) 501-4712

**PROFILE**
Second-year Engineering Physics student with hands-on experience across mechanical design, embedded electronics, and manufacturing through UBC Sailbot and personal robotics projects. Demonstrated ability to quickly pick up new tools and skills and translate technical analysis into documentation and presentations for a cross-disciplinary team. Particularly interested in problems at the intersection of mechanical systems and control, spanning marine, robotics, and aerospace applications.

**TECHNICAL SKILLS**
- Tools/Software: SolidWorks, KiCad, Git, FEA, Arduino
- Languages: C, C++, MATLAB, Java, Python

**EXPERIENCE**

*Mechanical Sub-team Member — UBC Sailbot Design Team, Vancouver, BC — Sept 2025 – Present*
- Co-designed a redesigned solar panel mounting system for Polaris in a 2-person team, cutting fastener count by 50% while resolving a deck clearance issue.
- Manufactured and assembled the mounting solution, using structural epoxy to bond aluminum mounting rails to the carbon fibre deck.
- Performed SolidWorks FEA on the panel mounting assembly under a 5kN worst-case wave loading scenario to validate hand-calculated fastener and mounting rail loads before manufacturing.
- Identified a galvanic corrosion risk after receiving fasteners in an incompatible aluminum alloy and implemented a mitigation strategy using PTFE thread tape to protect the mounting hardware.
- Presented design rationale and analysis to a multidisciplinary engineering team across a series of formal design reviews, incorporating feedback into iterative revisions.
- Authored internal assembly documentation for the hull, keel, and solar panel systems, enabling smaller test crews and more frequent on-water testing ahead of the vessel's first multi-day launch.
- Researching hydrofoil geometry trade-offs (T-foils vs. surface-piercing) and lift-control actuation methods, including a feasibility study on a retracting windward foil, for a new hydrofoiling catamaran targeting an autonomous speed record.

**PROJECTS**

*5-DOF Robotic Arm — Personal Project — In progress*
- Designed and manufactured 3 revisions of a custom ESP32 servo breakout board in KiCad to route signal and power for 6 MG996R servos, consolidating circuitry, leading to a smaller electrical footprint.
- Modeled and prototyped the mechanical structure in SolidWorks with 3D-printed components; currently developing full system integration and inverse kinematics-based control code in C++ and Python.

*Robotic Claw Competition — Class Project*
- Collaborated in a 6-person team to design, build, and program a servo-actuated robotic claw, engineering a joystick-probe ground detection sensor that outperformed sonar alternatives; placed 2nd out of 12.
- Produced SolidWorks CAD models and engineering drawings for the claw assembly.

**EDUCATION**

*Engineering Physics, BASc. — University of British Columbia, Vancouver, BC*
- Relevant Coursework: Linear Algebra, Calculus 1 & 2, Programming in C/C++, Electromagnetism, Thermodynamics.

---

## Links / Contact (for footer, header, hero)

- Email: mailto:swoods07@student.ubc.ca
- LinkedIn: https://linkedin.com/in/sam-woods-807620381
- GitHub: placeholder only — needs real URL
- Resume: linked as a PDF (`Resume.pdf`) from the hero section
