# 🌙 Pragya.AI  
### *Your Personal AI Wellness Companion*  
**Private & Proprietary Repository**

Pragya.AI is an intelligent mental wellness companion designed to help users express themselves freely, feel heard, and receive comforting, thoughtful responses powered by advanced AI models.  
This repository contains the internal source code for the **Pragya.AI Web Client** — built with **Next.js, TypeScript, React, and OpenAI APIs**.

---

## 🔒 Status: Private / Proprietary

This project is **NOT open-source**.  
All code, design, assets, and logic are **confidential**, **owned exclusively by Sayan Chakraborty**, and may not be copied, redistributed, or modified without explicit permission.

---

## 📦 Tech Stack

| Area | Technology |
|------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| UI | Custom CSS |
| State | React Hooks |
| AI Backend | OpenAI API |
| Storage | Browser LocalStorage |
| Deployment | Vercel |

---

## ⚙️ Features

### ✅ **1. Smart AI Chat**
- Smooth AI conversations  
- “Thinking…” bot placeholder  
- Fast, responsive UI  
- Gentle mental-wellness tone  

### ✅ **2. Beautiful Home Screen**
- Dynamic suggestion cards  
- Clean transitions into chat  

### ✅ **3. Saved Chat Sessions**
- Automatic chat saving  
- Load & continue past chats  
- Delete individual chats  
- “Clear All Chats” button with animated confirmation modal  

### ✅ **4. Light / Dark Mode**
- Automatic theme persistence  
- Smooth transitions  

### ✅ **5. Custom UI Enhancements**
- Custom modal for clearing chats  
- Frosted glass + blur sidebar  
- Polished button interactions  
- Mobile-friendly layout  

---

## 🧪 Local Development

### **1. Requirements**
- Node.js 18+
- npm (or pnpm)
- Git

### **2. Install dependencies**
```bash
npm install
```

### **3. Create required env**
Inside root folder:

```
.env.local
```

Add:

```
OPENAI_API_KEY=your_key_here
```

⚠️ **DO NOT COMMIT THIS FILE.**

### **4. Start the project**
```bash
npm run dev
```

Runs at:

```
http://localhost:3000
```

---

## 🚀 Deployment (Vercel Recommended)

1. Push code to private GitHub repo  
2. Go to **vercel.com › New Project**  
3. Import this repo  
4. Add the environment variable:

```
OPENAI_API_KEY
```

5. Deploy instantly  
6. Share the production URL  

---

## 📂 Project Structure Overview

```
app/
  api/chat/          → Serverless OpenAI route
  components/        → UI components
  page.tsx           → Core chat UI logic
  globals.css        → Stylesheet

public/              → Icons/assets
```

---

## 🛡️ License

```
© 2025 Sayan Chakraborty  
All Rights Reserved.

This repository contains proprietary and confidential material.
Unauthorized copying, distribution, or modification is strictly prohibited.
```

---

## 🤝 Internal Notes

- Repo must stay **private**  
- Never commit real API keys  
- Track upcoming improvements via GitHub Issues  
- Tag major releases (v1.0.0, v1.1.0, etc.)

---

## 🧭 Roadmap (Optional)

- [ ] Voice input  
- [ ] Mood analytics  
- [ ] Weekly insights  
- [ ] User accounts & cloud sync  
- [ ] Native mobile app  
- [ ] Premium subscription tier  

---

