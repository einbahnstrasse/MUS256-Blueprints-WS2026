---
layout: single    
title: String Model + bach Integration    
permalink: /assignments/string-bach-integration/    
toc_icon: "graduation-cap"  
toc: true      
toc_sticky: true   # enables sticky toc  
read_time: true    
date: 2026-02-11    
last_modified_at: 2026-02-11    

---

# Connecting String Synthesis to `bach.roll` + `poly~`

## Deadline  
**Saturday, Feburary 21, 2026, at 11:59 PM**   

## Overview

Last week, we used:

- `<bach.roll>` for event generation  
- `<poly~>` for polyphony  
- a **simple sine wave engine** inside a `<poly~>` voice abstraction  

For this brief assignment, your task is very simple, conceptually:

> Replace (or extend) the sine wave engine with a **string synthesis model**  
> and drive it using `<bach.roll>` through `<poly~>`.
> Create your own notes, chords, or other events inside `<bach.roll>` to drive your new synth.     
> Make a simple patch that does this and be prepared to share this in our next class.    

You may use:     

- **Karplus–Strong**     
- **Allpass string model**     
- Or some hybrid of both         

The key requirement:     

> The string synthesizer must be controlled by `<bach.roll>`       
> and instantiated using `<poly~>` inside our scaffold patch structure.     

---

## What To Do     

### 1. Use the Scaffold Structure     

You must work inside:     

- `_scaffold.v01.maxpat` (or your updated scaffold)     
- Your own `<poly~>` abstraction for voices     
- Your own `<bach.roll>` object for event sequencing     

This assignment is about **integration**, not inventing something totally from scratch, so you should **recycle** our previous **templates** and **combine** things.      

You can also use `<line>` and `<function>` to control synthesis parameters in addition to pitch and rhythm.      

It shouldn't occupy much of your time to do this.      

---

### 2. Build (or Adapt) a String Voice Abstraction     

Inside your `<poly~>` voice patch:     

- Implement a **Karplus–Strong** or **allpass string model**     
- Accept pitch, velocity, and duration from `<bach.roll>`     
- Use proper gain staging     
- Avoid clipping     

Your string voice must respond correctly to:

- note-on     
- note-off (or duration-based decay)     
- velocity scaling     

---

