---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# layout: archive
layout: single   
title: Schedule   
lang: en   
ref: sched   
permalink: /schedule/   
# sidebar:
#   nav: "schedule-toc"   
toc: true  
toc_label: "Schedule" # default: Content
toc_icon: "bell"  # corr esponding Font Awesome icon name without the "fa" prefix
toc_sticky: true   # enables sticky toc 
read_time: true  
date: 2025-08-25  
last_modified_at: 2026-01-21   

---

_Our precise order of topics and their accompanying materials will periodically change and/or be updated, at the discretion of the instructor, based on class pacing and other factors. Schedule and materials will be regularly updated on this website and announced in class. Changes to, or additions of, recordings, readings, or videos may be appended to this current schedule below. Additional materials will be distributed on this website or in class. Our schedule follows the [Current Bates Academic Calendar]({{ site.Bates-calendar }}){:target="_blank"}. Check frequently for updates!_  

## Calendar of Deadlines    

_Subscribe to our class Google calendar to see our upcoming deadlines. Daily schedule of events, tutorials, topics, terms, listening, guests, and other relevant information follows._ 

<iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FNew_York&showPrint=0&src=Y18wODY5Yzg3NmU1Y2I5MDBlZWUyNjA5NzIxYjJhZTI3ODA2NWYxMTBkN2E4ZjgwMzdjZGZmMjUzYjkxZjFjZDg4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%238e24aa" style="border:solid 1px #777" width="650" height="500" frameborder="0" scrolling="no"></iframe>

* * *   

## Week 1: {{ site.week-01 }}
### <span style="color: #fc3a52; font-size: 120%; ">{{ site.week-01-topic }}</span>

#### Wednesday — Orientation & Setup (No patching)
##### In Class
- Course overview and expectations
- What “sonic systems” means in this course
- Semester arc and concert requirements
- Website walkthrough + access check
- GitHub accounts and workflow overview
- Max installation check

##### Tutorials
* [Introduction to MaxMSP Slides 1—18: What is MaxMSP?](https://einbahnstrasse.github.io/MHL-intro-to-MaxMSP/){:target="_blank"}
* [Introduction to MaxMSP (video, 33 minutes)](https://youtu.be/DpKIQzjOh_U?si=ozCElT5NQmD-m9D0){:target="_blank"}

{% include video id="DpKIQzjOh_U?si=ozCElT5NQmD-m9D0" provider="youtube" %}

* [Introduction to Git and GitHub (video, 28 minutes)](https://youtu.be/Lw2OgM6tQd8?si=EvIraJMlgGHUdPet){:target="_blank"}

{% include video id="Lw2OgM6tQd8?si=EvIraJMlgGHUdPet" provider="youtube" %}

##### Assignments  
* Setup your GitHub account   
* Be sure to complete the [Intro Survey](https://forms.gle/aoBKQDuqnK1aoGH9A){:target="_blank"}   
* Install + authorize Max (if using a personal license), or book time in the computer labs   
* Watch the Max and GitHub intro videos above, rebuild tutorial patches, and commit them to your GitHub account by our weekly deadline: Saturdays, 11:59 PM.        
* Make these starter patches (from the video):

##### Patches    
  - `starter.patch.v01.maxpat`    
  - `starter.patch.v02.maxpat`      

##### Terms, Concepts, Objects, Shortcuts
_Use this list as a reference. Leave comments in your patches to remind yourself what these are and how they work._
- realtime vs. offline electronics
- computer music
- patch / subpatch `<p>` / abstraction
- object box `command + n`
- lock/unlock patch `command + e`
- message box `<m>` / comment box `<c>`
- control rate (Max) vs. signal rate (MSP)
- resize boxes `command + j`
- duplicate an object `command + D`
- open help file: `option + click` on any object

* * *

## Week 2: {{ site.week-02 }}
### <span style="color: #fc3a52; font-size: 120%; ">{{ site.week-02-topic }}</span>

#### Monday     
_MLK Jr. Day — No class._    

#### Wednesdsay — Signal Flow & Debugging

##### In Class
- signal vs control
- gain staging and safe monitoring

##### Tutorials
* [MaxMSP Keyboard Shortcuts (MacOS and Windows)](https://docs.cycling74.com/max8/vignettes/shortcuts){:target="_blank"}
* [Introduction to MaxMSP Slides 19—35: History through New Terms](https://einbahnstrasse.github.io/MHL-intro-to-MaxMSP/#/19){:target="_blank"}
* [MaxMSP Beginner's Cheatsheet (includes Data Classes)](https://cycling74-web-uploads.s3.amazonaws.com/5462c2a9bdbb99652da7a00a/2017-05-11T08:53:04Z/cheatsheet.pdf){:target="_blank"}

##### Patches    
  - `_scaffold.v01.maxpat`
  - `working.patch.v01.maxpat`
  - `lg.sound.in.v01.maxpat`
  - `lg.sound.out.v01.maxpat`
  <!-- - `00.getting.started.maxpat` -->

* * *

## Week 3: {{ site.week-03 }}
### <span style="color: #fc3a52; font-size: 120%; ">{{ site.week-02-topic }}</span>

#### Monday — Oscillators & Envelopes
##### In Class
- waveform families
- oscillator objects
- ADSR and envelope-as-time-system

##### Tutorials
* [Learn About Waveforms (The Pudding)](https://pudding.cool/2018/02/waveforms/){:target="_blank"}

#### Listening
* [Max Mathews, _Bicycle Built for Two_ (1961)](https://youtu.be/ZFUVR-clo8g?si=xdj3dzQyMBw-g1Ui){:target="_blank"}

{% include video id="ZFUVR-clo8g?si=xdj3dzQyMBw-g1Ui" provider="youtube" %}

##### Patches    
- `_scaffold.v01.maxpat`
- `01.basic.waveforms.maxpat`
- `02.ADSR.maxpat`

##### Assignments
* Finish:
  - `01.basic.waveforms.maxpat`
  - `02.ADSR.maxpat`
<!-- * Read: shortcuts + cheatsheet (use help files constantly) -->

##### Terms, Concepts, Objects, Shortcuts
- oscillator
- sine `<cycle~>` / saw `<phasor~>` / triangle `<tri~>` / square `<rect~>`
- ADSR / envelope
- duty cycle
- **help files**: `option + click`

* * *  

_More coming soon — check back frequently!_   

* * *  

