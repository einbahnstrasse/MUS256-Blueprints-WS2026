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

#### Wednesday 1/14 — Orientation & Setup (No patching)
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

#### Monday 1/19       
_MLK Jr. Day — No class._    

#### Wednesdsay 1/21 — Signal Flow & Debugging

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
### <span style="color: #fc3a52; font-size: 120%; ">{{ site.week-03-topic }}</span>

#### Monday 1/26 — Oscillators & Envelopes
##### In Class
- waveform families
- oscillator objects
- ADSR and envelope-as-time-system

##### Tutorials
* [Learn About Waveforms (The Pudding)](https://pudding.cool/2018/02/waveforms/){:target="_blank"}

#### Video Tutorials    
_In lieu of class during inclement weather, follow the video tutorial and complete patches before Wednesday._      
* [Week 3 Day 1 Patching](https://youtu.be/xrp77TXfdgY?si=a-e2qBi_Nl0IQNJD){:target="_blank"}      

{% include video id="xrp77TXfdgY?si=a-e2qBi_Nl0IQNJD" provider="youtube" %}     

#### Listening
* [Max Mathews, _Bicycle Built for Two_ (1961)](https://youtu.be/ZFUVR-clo8g?si=xdj3dzQyMBw-g1Ui){:target="_blank"}

{% include video id="ZFUVR-clo8g?si=xdj3dzQyMBw-g1Ui" provider="youtube" %}

##### Patches    
<!-- - `_scaffold.v01.maxpat` -->
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

#### Wednesday 1/28 — Monosynth and MIDI Input     

##### Patches    
- `03.monosynth.variable.note.length.maxpat`
- `04.additive.synth.with.randomization.maxpat`
<!-- - MIDI subpatcher inside of `_scaffold.v01.maxpat` -->

##### Terms, Concepts, Objects, Shortcuts
- synthesis engine  
- MIDI (Music Instrument Digital Interface)   
- monosynthesizer     
- additive synthesis    

* * *  

## Week 4: {{ site.week-04 }}
### <span style="color: #fc3a52; font-size: 120%; ">{{ site.week-04-topic }}</span>

#### Monday 2/2 — Class Canceled; Illness    

#### Wednesday 2/4 — Polyphony and Voice Allocation       

#### Boiler (Downloads)     
* [Bach Polyphony Tutorial Patches](https://github.com/einbahnstrasse/bach-poly-boiler-patches){:target="_blank"}    

##### Patches    
- `bach.poly.05.polyphony.maxpat`
- `simple.voice.polyCore.v01.maxpat`
<!-- - MIDI subpatcher inside of `_scaffold.v01.maxpat` -->

##### Terms, Concepts, Objects, Shortcuts
- synthesis engine  
- MIDI (Music Instrument Digital Interface)   
- monosynthesizer     
- additive synthesis    

* * *     

## Week 5: {{ site.week-05 }}
### <span style="color: #fc3a52; font-size: 120%; ">{{ site.week-05-topic }}</span>

#### Monday 2/9 — Euclidean Rhythms in Bach         

#### Boiler (Downloads)     
* [Interacting With Bach Tutorial Patches](https://github.com/einbahnstrasse/interacting-with-bach-W2026){:target="_blank"}    

#### Optional Reading   
* [Toussaint Paper on Euclidean Rhythms](https://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf){:target="_blank"}    


##### Patches    
- `bach.interaction.t07.euclidean.idea.maxpat`
- ~~`bach.interaction.t08.melodic.profile.maxpat`~~   

#### Wednesday 2/11 — Karplus-Strong String Synthesis           

#### Boiler (Downloads)     
* [Digital Waveguide Synthesis Boiler](https://github.com/einbahnstrasse/Digital-Waveguide-Boiler){:target="_blank"}    
* [Test Sounds Media Folder](https://github.com/einbahnstrasse/synth-tech-media){:target="_blank"}    

##### Patches    
- `Karplus-Strong.v02.maxpat`     

##### Assignment    
* [Connecting String Synthesis to bach.roll + poly~](/MUS256-Blueprints-WS2026/assignments/string-bach-integration/){:target="_blank"}    

* * *     

## Week 6: {{ site.week-06 }}
### <span style="color: #fc3a52; font-size: 120%; ">{{ site.week-06-topic }}</span>

#### Monday 2/23 — String Stiffness             

##### Patches    
- `Karplus-Strong.v02.maxpat` _(...continued; add stiff string model)_     
- `Karplus-Strong.v03.randomization.maxpat`   

#### Wednesday 2/25 — Resonance Models              

#### Boiler (Downloads)     
* [What is Resonance? Boiler](https://github.com/einbahnstrasse/resonance.boiler){:target="_blank"}    

#### Listening     
* [Kaija Saariaho, _L'Amour de loin_ ("Love from Afar," 2000), Act I., “Traversée” (Crossing), 0:00—5:42](https://youtu.be/4GccAnZ7UvU?si=Zag1QW1gOyzFpPIA){:target="_blank"}      

{% include video id="4GccAnZ7UvU?si=Zag1QW1gOyzFpPIA" provider="youtube" %}     

#### Video Tutorial      
* [Completing Today’s Patch](https://youtu.be/4S8AK_M9oiY?si=SwynOTxOD5Hhcp1g){:target="_blank"}      

{% include video id="4S8AK_M9oiY?si=SwynOTxOD5Hhcp1g" provider="youtube" %}     

##### Patches    
- `modres.from.a.chord.maxpat`    

##### Assignment    
* Create a free account, download, and install [SPAT](https://forum.ircam.fr/projects/detail/spat/#project-versions-anchor){:target="_blank"} and [Modalys](https://forum.ircam.fr/projects/detail/modalys/#project-versions-anchor){:target="_blank"} from the [IRCAM Forum website](https://forum.ircam.fr/){:target="_blank"}. 

##### Terms, Concepts, Objects, Shortcuts
- simple harmonic motion    
- resonance    
- dampening  
- the `modres` algorithm    
- filter     
- filters in parallel and in series       
  
* * *  

## Week 7: {{ site.week-07 }}
### <span style="color: #fc3a52; font-size: 120%; ">{{ site.week-07-topic }}</span>

#### Monday 3/2 — Introduction to Modalys                 

#### Boiler (Downloads)     
* [Introduction to Modalys](https://github.com/einbahnstrasse/modalys-intro-boiler){:target="_blank"}    
    
#### Tutorials        
* [What is Physical Modeling?](https://www.perfectcircuit.com/signal/what-is-physical-modeling){:target="_blank"}    

#### Listening     
* [Marco Stroppa, _Come Play with Me_, VI. “Strike”](https://youtu.be/DFWmCVs5GV0?si=_R6xaWXTud4jgvGJ){:target="_blank"}      

{% include video id="DFWmCVs5GV0?si=_R6xaWXTud4jgvGJ" provider="youtube" %}     

##### Patches    
- `01.mlys.string.force.maxpat`   

##### Assignment    
* Before Wednesday: Explore the Modalys for Max Examples. In Max, go to Extras -> Modalys for Max. Choose the patches within the categories "Complete Instruments" (blue), and "Other Exampels" (green). Be sure to click the "TV" icon to take the patch out of "presentation mode" and poke around to explore the logic of the patch. Imagine how you might use these on your own. Find 3 that you like, and we'll discuss them on Wednesday.   

* * *  

_More coming soon — check back frequently!_   

* * *  

