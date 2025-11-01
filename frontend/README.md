
# Sewalink Frontend

Sewalink is a **community help portal** designed to connect people who need services with those who can provide them.  
It allows users to offer, request, and manage various local services — from repairs and rentals to social help — all in one place.  
The goal of Sewalink is to create a simple, transparent, and reliable platform for community-driven assistance.

---

## 🧩 Overview

This folder contains the **client-side** (frontend) code for the Sewalink project.  
The frontend is developed using **React.js** and **Vite**, styled with **Tailwind CSS**.
It follows a clean, modular structure for maintainability and scalability.

---

## ⚙️ Tools and Technologies Used

### 1. React.js
- **Purpose:** Builds the user interface with reusable components.
- **Usage:** Components for listings, forms, navigation, and dashboards are written using functional components with React Hooks (`useState`, `useEffect`, etc.).
- **Why:** React provides efficient rendering and a smooth, dynamic user experience.

---

### 2. Vite
- **Purpose:** Modern build tool and development server.
- **Usage:** Provides fast hot reloading during development and optimized builds for production.
- **Why:** Replaces Create React App (CRA) with faster startup and build performance.
- **Config:** Managed in `vite.config.js`.

---

### 3. Tailwind CSS
- **Purpose:** Utility-first CSS framework for rapid UI styling.
- **Usage:** Classes are applied directly in JSX (e.g., `className="bg-blue-500 p-4 rounded"`).
- **Why:** Simplifies responsive design and ensures a consistent layout.
- **Config:** Controlled via `tailwind.config.js` and `postcss.config.js`.

---

### 4. JavaScript (ES6+)
- **Purpose:** Core language used for building React components.
- **Usage:** Implements app logic, API calls, and event handling using modern syntax (arrow functions, destructuring, async/await).


---

### 5. React Router
- **Purpose:** Client-side routing for single-page navigation.
- **Usage:** Defines routes for pages like Home, Services, Bookings, and Dashboard.
- **Example:** Configured in `App.jsx` using `<BrowserRouter>` and `<Route>`.

---

### 6. React Icons
- **Purpose:** Adds scalable vector icons across the UI.
- **Usage:** Used in navigation menus, action buttons, and dashboards.

---

### 7. JWT Decode / Auth Libraries
- **Purpose:** Manages user authentication via JSON Web Tokens.
- **Usage:** Decodes and verifies user data for login and session management.

---

### 8. Form Libraries (Optional)
- **Purpose:** Simplifies form handling and validation.
- **Usage:** Commonly used for registration, booking, and service request forms.

---

## 📁 Common Project Structure

```

frontend/
│
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── assets/             # App-specific images, logos
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page-level components (Home, Login, etc.)
│   ├── services/           # API request files (Axios)
│   ├── context/            # Global state management (if used)
│   ├── App.jsx             # Root React component
│   ├── main.jsx            # Entry point for rendering React
│   └── index.css           # Global styles and Tailwind imports
│
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite build configuration
├── tailwind.config.js      # Tailwind customization
└── README.md               # This file

````

---



## 🧩 Summary

The **Sewalink Frontend** is a modern, responsive web application built with **React**, powered by **Vite**, and styled using **Tailwind CSS**.


```
```
