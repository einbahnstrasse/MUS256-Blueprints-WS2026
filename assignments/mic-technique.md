---
layout: single
title: "Mic Technique + Voice Recording"
lang: en
ref: mic-technique
permalink: /assignments/mic-technique/   
toc: true
toc_label: "Mic Technique" # default: Content
toc_icon: "graduation-cap"
read_time: true
date: 2025-08-27
last_modified_at: 2025-08-27

---

## Deadline  
**start of Week 3: {{ site.week-03 }}**  

---

## Introduction  
In this exercise, you will create **2 simple recordings of your voice** in Reaper:  
1. One using your **built-in laptop or computer microphone** (can be recorded anywhere, but best if you record both in the studio for comparative purposes).  
2. One using a **studio microphone** (i.e., **dynamic** or **condenser**) through our MOTU 1248 interfaces.  

To complete this assignment, you will need to book time in Olin 302, the Bates Sound Studio. Be sure to check our calendar for sign-out times. 

By comparing these recordings, you will begin to understand the sonic differences between  "built-in" consumer mics and professional studio mics: ambience, tonal quality, plosives, sibilance, proximity effect, and overall clarity. This is your first hands-on step into microphone technique and gain staging.  

---

## Learning Objectives  
By completing this assignment, students will be able to:  
1. **Compare** and **contrast** differences between consumer and studio microphones.  
2. **Connect** a microphone to the MOTU interface and route its signal to Reaper.  
3. **Apply** gain staging to set proper levels and avoid clipping.  
4. **Experiment** with mic distance, axis, and vocal delivery to produce contrasting results.  
5. **Demonstrate** critical listening skills by comparing 2 recordings of similar vocal material.  

---

## Watch Before You Begin  
Study these 3 super short introductions to mic technique and clip splitting in Reaper:  

- [A Quick Guide to Microphones (YouTube)](https://www.youtube.com/watch?v=PE6Qn4ZiEyo){:target="_blank"}  

{% include video id="PE6Qn4ZiEyo" provider="youtube" %}  

- [What is a microphone polar pattern? (YouTube)](https://www.youtube.com/watch?v=dOr9uQifsO4){:target="_blank"}  

{% include video id="dOr9uQifsO4" provider="youtube" %}  

- [Split and Glue Audio Clips in Reaper](https://youtu.be/3u470I76KJo?si=gRgcN6XOP0z5rlX9){:target="_blank"}  

{% include video id="3u470I76KJo" provider="youtube" %}  

---

## Assignment Instructions  

### Step 1: Create a Reaper Session  
- Open Reaper. If this is your first time, note that you might need to click the `Still Evaluating` button before continuing. 
- Create a new project and name it: `Lastname_Firstname_Mic_Technique`.  
- Save the project and include all associated audio in the project folder. _(When recording, Reaper will automatically include your sound files in this folder. Generally, the only time you need to think about this is when you're not creating sound files within your Reaper session, meaning when you load audio samples that might be elsewhere on your computer. Remember to move them to your project folder as a first step.)_      

### Step 2: Built-in Mic Recording  
- Don't plug your computer into an audio interface, or temporarily power it off or disconnect it for this step. 
- In your Reaper session, create a new track (Track 1) by pressing `cmd + T`.  
- Label this track something easy like "built-in mic."   
- Plug in your headphones, or turn the volume on your computer down. _(If you don't do this, you'll instantly get piercing feedback, and I promise you: it's not fun...)_  
- Arm the track for recording by pressing the red "record arm/disarm" button next to its track name. Notice it lights up. 
- Notice an input selector menu has appeared in the track. 
- Most likely, the default mic if you're not plugged into an interface is the built-in mic on your computer; the only hardware your computer recognizes. 
- You should see orange metering (i.e., movement of the gain meters) on your new track, and green meters on the master bus (the summed signal of all tracks).   
- Or if you don't see any metering, set input to your computer’s built-in mic: go to `Reaper > Preferences... > Audio > Device` and ensure the it reads `<default system device>` in the dropdown menu. Also, check your computer's audio settings to be sure that, by default, your mic is connected as an input source.  
- Once you've got a signal metering in the session, record a short passage of your voice (see prompts below)...  

#### Voice Prompts (Pick 3–4 of these)  
Choose from the following list to record in both takes (built-in and studio mic):  
- **Radio DJ ID** — e.g., “You are listening to WRBC, 91.5 FM, Bates College Radio, Lewiston, Maine...”  
- **Name + Mic ID** — say your name and the mic you’re using (“This is Taylor Swift on the AKG P420”).  
- **Vowel explorations** — sustain A–E–I–O–U at different volumes (whisper, normal, loud).  
- **Consonant pops** — emphasize plosives ("p", "b", "t", "d") and sibilants ("s", "sh", "ch").  
- **Dynamic range test** — whisper, normal voice, shout (backing off mic as needed). Notice how much volume it takes to distort or "clip" the signal: when the metering turns red at the top of its range. _(When listening back to a distorted signal, be sure to turn the volume down! But, listening to a distorted signal reveals some pretty interesting properties... highly recommend.)_    
- **Distance test** — record the same phrase at 6 inches, 1 foot, and 3 feet.  
- **On-axis vs. off-axis** — Can you find out what your microphone's polar pattern is? Repeat a phrase facing the mic, then slightly angled to the side somewhere — in the "shadow" of its polar pickup area.  
- **Character voices** — playful variations (robotic, whispery, theatrical). Pay attention to when your voice is louder or softer, higher or lower, etc.     
- **Rhythmic speech** — chant or repeat a short phrase with different cadences.  
- **Serious vs. silly** — record one version in a serious tone, one exaggerated or humorous.  

### Step 3: Studio Mic Recording    
Now, you'll re-record essentially the same thing, but this time, using a studio microphone connected through an audio interface to your computer (or use one of the studio computers, copying your Reaper session between computers as necessary). 

_Protip: It makes for much better comparison to record both of these steps in the studio. If you can avoid recording the built-in mic version elsewhere, you'll hear very useful information about the way each microphone works._   

- In the studio, choose one microphone:  
  - **Condenser (AKG P420)** — phantom power ON (+48V).  
  - **Dynamic (Shure SM57 or Ultravoice XM8500)** — phantom power OFF.  
- Start by ensuring that phantom power is OFF. _Microphones can be damaged by "hot-plugging" while phantom is on, so get in the habit of checking before making or breaking connections._   
- Now connect your mic with an XLR cable to the MOTU 1248. It doesn't matter which end you connect first. 
- Power on your audio interface if it isn't on yet. 
- If using a condensor mic, now is the time to enable phantom power.  
- Return to your audio devices menu once again in Reaper preferences. With your audio interface turned on, you should be able to find it in the dropdown list. Select "MOTU 1248" or an equivalent interface for input/output. 
- Create Track 2 in the same Reaper project. Name this track according to which mic you choose.   
- Arm the track and adjust gain on the MOTU until peaks average around **–12 dBFS** (no clipping). If you don't see metering, again check your computer's audio preferences and ensure the correct interface has been selected in Reaper settings.  
- Record the same set of prompts as you did in your built-in recording.  

### Step 4: Editing   
- Trim, split, duplicate, or fade clips to clean up your session. You can eliminate long silences between takes, rearrange things, experiment with crossfading clips (by overlapping them horizontally), etc. Have fun trying things out!  
- Optional: You can add track markers to label the prompts you're using.  
- Optional: Add a simple effect from the Reaper menus to a track (EQ, reverb, pitch shift, etc.) to explore Reaper’s FX.  

### Step 6: Render & Submit  
- Export a stereo WAV file (48 kHz / 24-bit).  
- Filename: `Lastname_Firstname_Mic_Technique.wav`.  
- Submit your **Reaper project folder**, including your exported `.WAV` file, at the Lyceum prompt, or via email with a WeTransfer or other cloud link.  

---

## Evaluation Criteria  
- **Completeness (20%)** — Both built-in mic and studio mic recordings included; minimum 3–4 prompts performed. There is no requirement on length here, but I would aim for a 1-3 minute recording. You shouldn't need more time and it doesn't need to be long.  
- **Signal Flow & Gain (20%)** — Proper connection and gain staging; no clipping (except where yo might have been experimenting with clipping in the prompts) or misrouted signals.  
- **Technique (20%)** — Demonstrates awareness of mic distance, axis, and handling of plosives.  
- **Editing (20%)** — Basic edits (trims, fades, splits) applied cleanly in Reaper.  
- **Listening & Creativity (20%)** — Prompts show variation; recordings reflect attention to sonic differences and creative expression.  

---
