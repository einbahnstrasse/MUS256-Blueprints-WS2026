---
layout: single   
title: "Polyphonic Spatial Motion Etude"   
lang: en   
ref: poly-spat    
permalink: /assignments/polyphonic-spatial-motion/   
toc: true  
toc_label: "Assignment Contents" 
toc_icon: "graduation-cap"  
toc_sticky: true   
read_time: true  
date: 2026-03-29  
---

## Deadline  

**Due Saturday, April 4 at 11:59 PM.**  

As a reminder, our deadlines are **firm**. Late submissions will incur penalties according to the Syllabus policy.  
Consult the Syllabus if you have any questions about late work.   s

---

## Introduction  

In this assignment, your objective is to **extend a single-source spatial control system into a multi-voice (polyphonic) system** using `poly~`.  

Begin with a provided example patch (see screenshot below) in which a **single audio source is moved in space** using a `max` remote message  syntax controlling SPAT coordinates (e.g., position in XYZ or AED coordinates; up to you).  

Your task is to extract this sytem's logic, and implement it in a `poly~` so that **multiple independent sources can move simultaneously**, each with its own spatial trajectory, designated by messages sent in remote message boxes like those seen here.  

In other words, you will move from:  
> **one source, one trajectory**  

to:  
> **many sources, many trajectories — a _polyphony of motion_ in space**  

**Important:**  
This assignment is about **movement and control**, not sound.  
You are **not required to include audio** in this patch.  

You may use your test signals if helpful, but your focus should be on:  
> **coordinating spatial behavior through Max messages**  

---

## Learning Objectives    

By completing this assignment, students will be able to:   

1. **Analyze** an existing Max patch and identify its control structure.  
2. **Abstract** a single-source spatial control system into a reusable voice module.  
3. **Implement** polyphony using `poly~` to manage multiple simultaneous spatial behaviors.  
4. **Design** coordinated motion across multiple sources using structured control messages.  
5. **Translate** conceptual motion ideas into executable control systems.  

---

## Reference Patch  

Below is the example patch you will study and adapt:

![Single-source SPAT control patch (boiler)](assets/images/polyphonic-spatial-motion-boiler.png){:target="_blank"}   

---

## Conceptual Reference: Spatial Verbs  

As you build your system, spend some time browsing the following visual reference: 

[*Operative Design: A Catalog of Spatial Verbs* by Anthony DiMari & Nora Yu](https://drive.google.com/file/d/1DJG_yMywjbCR0XOizp36SVio31H1cjRt/view?usp=sharing){:target="_blank"}   

This book presents **transformations of objects in space** as **actions (verbs)** rather than static forms. Things like:

- rotate  
- expand  
- compress  
- spiral  
- intersect  
- disperse  

You are **not** expected to read this text in detail. But instead:  

- **Browse casually**  
- **Identify a few movement ideas** that interest you  
- **Translate those ideas into motion behaviors for sound sources using your spat~ messages**  

Even though the book demonstrates using **volumes** instead of isolated points, you should reinterpret these as **relationships between multiple moving points (i.e., audio sources)** in space, which is what we've been moving around in spat~.  

---

## Assignment Instructions  

### Step 1: Analyze the Given Patch  

- Study the provided patch carefully.  
- Review and identify:
  - How **SPAT parameters** are controlled  
  - The structure of the **control messages**  
  - What defines a **single moving source** (i.e., X, Y, Z desintations, slew time, which audio source number) 

---

### Step 2: Isolate the Voice Structure  

- Extract the logic for **one moving source**  
- This should include:
  - Control messages  
  - Spatial parameter routing  
- Prepare this structure so it can be reused inside `poly~`  
- Look back at our previous `poly~` tutorials for a refresher  
- Recall how the `note` message works inside a `poly~` and adapt this for use with our `spat~` syntax.  

---

### Step 3: Implement `poly~`  

- Create a `poly~` object containing your **single-source voice**  
- Each voice must:
  - Receive **independent control data**  
  - Move independently in space  

Consider using:
- `note` messages 
- or `target` messages  
- Message routing strategies  

---

### Step 4: Design Polyphonic Motion  

- Use **between 4 and 8 voices** (your system supports up to 8)  
- Create **multiple simultaneous trajectories**  

Your system should include:
- A set of **message boxes or control structures**  
- Messages that are triggered **in sequence and in time**  

Each voice should:
- Follow a **distinct motion path**  
- Participate in a larger coordinated behavior  

---

### Step 5: Apply Spatial Verbs  

Using the reference book:

- Select **at least 2–3 spatial verbs or transformations**  
- Translate them into **coordinated motion behaviors**  

Examples:
- Expansion : sources move outward from a center  
- Rotation : sources orbit a shared axis  
- Compression : sources converge  
- Intersections : paths cross or collide  

Think in terms of:
> **relationships between sources**, not isolated motion  

---

### Step 6: Testing (Optional Audio)  

- You may include **test audio signals** if helpful  
- However, this is **not required**  

Your patch will be evaluated based on:
- The **clarity and correctness of movement**, not sound design  

---

### Step 7: Submission  

- Submit your `.maxpat` file via GitHub as usual  
- Label its file name so that it's clear this is your assignment 
- Ensure:
  - Your patch opens without errors (check the Max console)  
  - All movement systems function correctly  
  - Your patch is clearly labeled and organized  

---

## Evaluation Criteria  

| **Category** | **Description** |
|---------------|----------------|
| **Polyphonic Structure (30%)** | Successful implementation of multiple independent voices using `poly~`. |
| **Motion Design (30%)** | Clarity, variety, and intentionality of spatial movement. |
| **Conceptual Application (20%)** | Effective translation of spatial verbs into motion behaviors. |
| **System Clarity (20%)** | Organization, readability, and reliability of the patch. |

---

* * *