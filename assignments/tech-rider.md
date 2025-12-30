---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# layout: archive   
layout: single   
title: "Tech Rider of Your Wildest Dreams"   
lang: en   
ref: midterm    
permalink: /assignments/tech-rider/   
toc: true  
toc_label: "Assignment Contents" # default: Content
toc_icon: "graduation-cap"  # corr esponding Font Awesome icon name without the "fa" prefix
toc_sticky: true   # enables sticky toc  
read_time: true  
date: 2025-08-25  
last_modified_at: 2025-08-25  

---

## Deadline
**Due on Monday, December 8, 2025.**

---

## Introduction
In professional practice, a **technical rider** communicates everything a venue or production team needs to bring a performance to life: the stage layout, channel list, equipment, input/output (I/O), power, networking, patching, and cues. 

For this assignment, imagine a wildly ambitious piece or installation with lots of sonic forces and live signal processing (i.e., beyond your class project in MUS218A) and produce a **clear, implementable** rider—complete with a **stage plot** and **signal flow matrix**—using the provided `draw.io` template.   

## Get the Template  

**Template from (draw.io / diagrams.net):**  
[Technical Rider Template — Stage Plot + Audio Connections](https://drive.google.com/file/d/1p35znqW90VuIRySYYmTufySZc-CWsJ_2/view?usp=sharing){:target="_blank"}  

When you first open this link, click on `open with draw.io` at the top/center if you see the button. You may need to **authorize** before you see this button, and it may require you to authorize each time you use the `draw.io` app.   

### Make a Copy        

To make a **copy** of this template and begin editing it inside of your own Bates Google Drive, notice the File menu. Go to `File > Make a Copy...` and rename your copy:   

  - `Lastname_Firstname_TechRider_v01.drawio` 

Make sure it's an `XML` file (in the dropdown just to the right of your file name), and simply click on the Google Drive icon below. Your new file should be visible in your home folder on Google Drive, ready for editing. 

Edit your copy according to the instructions below. 
     
---

## Learning Objectives
By completing this assignment, students will be able to:
1. **Identify** core components of a professional technical rider (stage plot, channel list, I/O, power, networking).
2. **Differentiate** between analog and digital audio paths (e.g., **A** = analog, **D** = digital/Dante/AoIP), and when to use each.
3. **Organize** complex setups into a readable stage plot and signal-flow diagram.
4. **Design** a rider that aligns technical choices with artistic intent (why this mic, this routing, or this spatial layout).
5. **Justify** requirements and constraints (power, crew, rehearsal time, safety) in a concise, professional document.

---

## Why This Matters 
By adopting this workflow, you will have a clear document that you can show to a venue that will clearly communicate your artistic and technical intentions to a new production staff, ensuring your piece or installation is reproducible each time.  

---

## Assignment Instructions  

### A. Study the Examples    
[Examine these technical rider plots located here.](/MUS218A-Soundscapes-FA2025/assets/docs/Audio-and-Layout-Diagram-Examples.pdf){:target="_blank"} Can you read what each piece requires? Follow the signal flow from the stage to the mixer, and finally to the speakers. Can you interpret the audio connection matrices?    

### B. Technical Summary Information    
Once you've made a copy of the template above, fill out the boxes labeled Technical Summary, Notes, Details, Artist Equipment, and Instrumentation. Example entries have been placed throughout the template to show you how this works. Delete these example responses and replace them with your own. 

### C. Stage Plot (draw.io)
Use the template to create a top-down "plan view" diagram that labels and places:
- **All performers / sources**, e.g., “3 violins w/ DPA 4099,” “6 amplified chickens,” custom MIDI controllers.
- **Microphones / DIs / stands**, e.g., model or type if known.
- **Loudspeakers / monitors**, e.g., front-of-house (FOH) vs. onstage monitoring, wedges (stage monitor speakers) vs IEMs (in-ear monitor) if relevant.
- **Electronic and mix positions**, e.g., laptops, interfaces, controllers, reamp boxes.
- **Video projectors / screens** if applicable.
- **Power drops**: locations of outlets on stage or in the hall. Estimate them if unkown, labeling _where power is needed_ in your setup. 
- **Cables & pathways**: cleanly indicated to avoid clutter and avoid crossing power and unbalanced signal cables. 
- **Create connetions by dragging line segments** between the elements on your plot. Notice that when you hover over them, arrows appear in all directions. Click and drag to create an arrow/line segment to another element. You can color-code them as I've done to make things cleaner. In my example template, power/electricity is in red, audo is light blue, USB is yellow, and video signals are in orange. 
- Pay close attention to **the direction of your signals**. Arrows should indicate the path the signal takes. For example, the microphone sends a signal *into* the mixing console, but the speakers *receive* audio *from* the board. Notice the directions of the arrows *to* or *from* the board in each case. 

### D. Signal Flow Matrix (draw.io)    

#### D.1 How to Interpret the Matrix    

This matrix might appear confusing at first, but here is what it represents: 

- **horizontal axis**: *inputs to* the mixer, like microphones.   
   - Anything that produces a signal needing to be routed to the loudspeakers comes in here.  
   - Could be the *outputs* of your audio interface, which might be carrying audio signals from your computer (these, in turn, function as the *inputs* to the mixer).   
   - Other examples include synthesizers, DI boxes, contact mics, unbalanced connections. 
- **vertical axis**: *outputs from* the mixer, like loudspeaker feeds. 
   - Common possibilities: loudspeakers, stage monitors, IEMs (in-ear monitors), click tracks. 
   - For sound sources on stage to receive live signal processing, best practice is to first bring signals into the mixer and then **route them to your interface** (i.e., to laptop or FX) for processing. This is usually done via a **pre-fader send** on the console, which amounts to an *output* from the mixer to your FX. Your processed sound is later *returned* to the console for output to the speakers. 
   - **PANIC METHODS**: This approach ensures that your sound engineer has *full control over the balance in the hall*: In a performance context, **all signals projected in the hall should ultimately terminate on physical faders on a mixing console**. So, if something "blows up" or is piercingly loud, quickly muting the board or slapping down all faders ensures that every sound immediately stops. Your engineer also has full control over the balance and EQ of the room. Think of it as: the engineer is operating their own instrument, just like the ones on stage!   

#### D.2 Creating Your Own    

On the template’s signal-flow section, show **end-to-end routing** and label each link:

- **A** = analog, or balanced/unbalanced XLR and TRS connections   
- **D** = digital or networked audio; e.g., Dante/AES67/AoIP, AES/EBU, ADAT, MADI. These are the future of audio, but not as common in budget settings. Use what you know or have had previous experience with. 

Note: Aside from digital audio, no other digital connections should enter the mixer. You may be using others, like digital video signal paths, but these can remain on your stage plot and outside the matrix. 

If you're having trouble envisioning how this relates to your imagined piece, **go back to your stage plot and temporarily label your connections**. You're basically translating what you've done in the stage plot into readable terms for the mix position. The matrix ultimately produces a version of your connections that is readable from the perspetive of a sound engineer operating a mixing console. 

### E. Finished Rider (1–2 pages, PDF)
Make sure everything is filled in and complete. Once finished, go to `File > Export As > PDF`. Upload the rider to the assignment prompt in Lyceum.   

---

## Assignment Criteria
Your submission must include:
- **Metadata information**, such as title and contact information, equipment you'll bring versus what you're requesting from a venue, detailed Notes field, etc. 
- **Stage plot (draw.io)**  
- **Signal Flow Matrix (draw.io)**   
- **Format & naming**:  
  - `Lastname_Firstname_TechRider_v01.pdf`   

---

## Evaluation Criteria
- **Completeness (20%)** — All components delivered (stage plot, matrix, etc.), correctly named.
- **Clarity & Readability (25%)** — Clean layout; labels are legible; diagrams are easy to interpret; no ambiguous routing.
- **Technical Rigor (25%)** — Sensible channel layout; correct use of **A** (analog) vs **D** (digital/Dante/AoIP); realistic I/O; plausible power.
- **Coherence with Artistic Intent (20%)** — Technical choices support the piece’s concept (why this mic/route/monitoring).
- **Feasibility & Professionalism (10%)** — The plan could be implemented at a venue with standard resources.   

---

## Submission Instructions
- Upload your **PDF rider** via Lyceum by the deadline. Easy!  

---

## Notes & Tips
- Be ambitious **and** plausible: it’s fine to dream big, but keep the tech communicable.
- Use consistent iconography and text sizes in draw.io to keep the plot legible.
- Keep cable paths illustrative, not spaghetti. Favor **labels** and **legends** over dense lines.
- If you specify Dante (or other AoIP), include **who provides the switch** and VLAN needs (if any). 
