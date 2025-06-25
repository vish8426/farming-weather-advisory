# 🌾 Farming Weather Advisory Application

A lightweight, browser-based farming advisory tool that provides localized weather forecasts and contextual agricultural recommendations for farmers. Designed to be cost-free, low-maintenance, and easy to use on desktop or laptop devices.

---

## 🚀 Project Overview

This application is currently under active development as part of a broader exploration into scalable AgTech solutions. Its primary function in this MVP phase is to:

- Simulate login authentication (via `localStorage`)
- Display a dashboard for weather and advisory content
- Prepare integration points for real-time weather APIs

---

## 🛠️ Tech Stack

### Frontend
- **React** with **TypeScript**
- **Vite** (fast Build Tooling)
- **React Router v6** (for Navigation)
- **CSS Modules / Vanilla CSS** (for Styling)
- **localStorage** (temporary Auth/Session Handling)

### Developer Tools
- **VSCode** on **Windows 10**
- **npm** for Dependency Management
- **Git + GitHub Projects** for Task Tracking
- **Figma** for Interface Planning and Prototyping

---

## 💻 Installation & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/farming-weather-advisory.git
cd farming-weather-advisory
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

### 4. Visit the App
1. Open your browser and go to: `http://localhost:5173/login`
2. Use the test login:
```bash
Email: test@test.com
Password: 123456
```

## 📁 Project Structure (Simplified)
```bash
src/
├── pages/
│   ├── Login.tsx
│   └── Dashboard.tsx
├── main.tsx
├── index.css
├── ...
```

## ✅ Current Features
- Styled Login Form with Validation
- Simulated Login/Auth using `localStorage`
- Dashboard Page Stub (ready for Weather Data)
- Component-Based Architecture
- Responsive Layout for Desktop

## 🧩 Planned Features (Backlog)
- Integrate weather API (OpenWeatherMap or Similar)
- Add Ddvisory Engine Logic (based on Conditions)
- Add farm profile & region selector
- Enhance UI with Tailwind or Similar
- Offline Access (Optional)
- Deploy to Netlify or GitHub Pages

## 🧠 Philosophy
This project is focused on building simple, scalable tools that deliver real value to everyday users like farmers — even in low-resource environments. The goal is to design a product that could one day be turned into a scalable digital tool, but for now, it's an MVP used to showcase core software engineering skills and principles.

## 📄 License
This project is licensed under the MIT License.

## 🤝 Contributing
Pull requests and ideas are welcome! If you're interested in collaborating or expanding this concept, feel free to open an issue or reach out.

## 🙋‍♂️ Maintainer
Vishant Prasad

[LinkedIn](https://www.linkedin.com/in/vishant-prasad/) · [GitHub](https://github.com/vish8426/) · [Portfolio](https://vish-portfolio.framer.website/)