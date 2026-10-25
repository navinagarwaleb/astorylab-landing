# A Story Lab

A Story Lab is a premium personalized children's book platform that beautifully brings Indian heritage to life by weaving children directly into the stories of their heritage. Growing South Asian children up far from home, the platform custom-crafts cinematic, Pixar-quality illustrations where each child is featured by name and likeness alongside beloved figures like Baby Krishna (Kanha), Hanuman (Bajju), and Ganesha (Gannu). Crafted with profound cultural reverence and artistic depth, each single-edition book is a treasured, high-end hardcover keepsake designed to make children feel like the heroes of their own heritage.

---

## 🛠️ Setup Instructions

To get the website running locally on your computer, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/navinagarwaleb/astorylab-landing.git
   cd astorylab-landing
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Configure local environment variables:**
   Copy the example environment file to create your local config:
   ```bash
   cp .env.example .env.local
   ```
   Open `.env.local` in your editor and fill in the required environment variables (e.g., Google Analytics ID, Etsy Shop reference keys).

4. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site in real time.

---

## 🚀 Deployment Notes

This project is configured for continuous delivery via **Vercel**:
* **Automated Deployments:** Any changes pushed or merged to the `main` branch will automatically trigger a production build and deployment on Vercel.
* **Preview Deployments:** Creating a pull request against `main` will automatically generate a unique, shareable preview URL so you can test changes before they go live.

---

## 🎨 Brand Design System

All design elements of this website strictly adhere to the brand guidelines defined in [AStoryLab_Brand_Guidelines.docx](AStoryLab_Brand_Guidelines.docx).

### 🎨 Color Palette (60-30-10 Rule)
* **Primary Background (60%):** Deep Teal — `#124E52` (Conveys cultural depth, heritage, and premium quality)
* **Light Background (30%):** Cream — `#FCF6DF` (Warm, parchment-like, evokes old storybooks)
* **Primary Accent / CTA (10%):** Antique Gold — `#D4AC78` (Warmth, celebration, premium craft)
* **Secondary Accent:** Terracotta — `#C97456` (Traditional warmth and emphasis moments)
* **Grounding Accents:** Sage Green — `#83AC94` (Calm, grounding, and natural accents)

### ✍️ Typography Reference
* **Primary Display:** `Cinzel` (Google Fonts) — Used for titles, book covers, and hero headers. *Tip: Always add letter-spacing (50–150 tracking units) when using Cinzel in CAPS.*
* **Secondary Body Copy:** `Lora` (Google Fonts) — Warm, highly readable serif used for all body paragraphs, descriptions, and testimonials to maintain a cohesive, high-end editorial tone.
