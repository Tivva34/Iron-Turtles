# 🐢 Iron Turtles - The Turtlebase

A modern movie discovery application built with **React** and **Vite**, allowing users to browse movies, search for titles, view detailed movie information, and manage a personal watchlist through a clean and responsive interface.

> This project was developed to strengthen my skills in React, component-based architecture, API integration, routing, and state management while building a modern user experience.

---

##  Features

-  Browse popular movies
-  Search for movies
-  View detailed movie information
-  Save and manage a personal watchlist
-  Persistent watchlist using Local Storage
-  Interactive movie carousel
-  Fully responsive design
-  Fast client-side routing
-  Custom 404 page

---

# Tech Stack

### Frontend

- React 19
- Vite
- JavaScript
- React Router DOM
- Axios
- Swiper
- React Icons

### Development Tools

- Git
- GitHub
- VS Code
- ESLint

---

# Project Structure

```text
vite-project/
│
├── src/
│   │
│   ├── Components/
│   │   ├── Logo/
│   │   ├── MovieCardSmall/
│   │   ├── MovieCarousel/
│   │   ├── NavBar/
│   │   ├── NavItem/
│   │   ├── SearchForm/
│   │   ├── Button.jsx
│   │   ├── ErrorMsg.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── List.jsx
│   │   └── SearchFunction.jsx
│   │
│   ├── Layout/
│   │   └── RootLayout.jsx
│   │
│   ├── Pages/
│   │   ├── StartPage/
│   │   │   └── StartPage.jsx
│   │   │
│   │   ├── SearchPage/
│   │   │   └── SearchPage.jsx
│   │   │
│   │   ├── MoviePage/
│   │   │   ├── MoviePage.jsx
│   │   │   └── moviePage.css
│   │   │
│   │   ├── WatchListPage/
│   │   │   └── WatchListPage.jsx
│   │   │
│   │   └── ErrorPage/
│   │       ├── ErrorPage.jsx
│   │       └── errorPage.css
│   │
│   ├── Scripts/
│   │   ├── useFetch.js
│   │   ├── useFetchMovieCard.js
│   │   └── useLocalStorageWatchlist.js
│   │
│   ├── assets/
│   │
│   ├── data/
│   │   └── testMovies.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

# Getting Started

### Clone the repository

```bash
git clone https://github.com/Tivva34/Iron-Turtles.git
```

### Navigate to the project

```bash
cd Iron-Turtles/vite-project
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

# What I Learned

This project helped me improve my understanding of:

- Building reusable React components
- Structuring larger React applications
- React Router and nested layouts
- Custom React hooks
- API communication with Axios
- Managing persistent state with Local Storage
- Responsive UI development
- Organizing scalable folder structures
- Writing clean, maintainable code

---

# Future Improvements

- Advanced movie filtering
- Sorting options
- Dark mode
- Improved accessibility (A11y)
- Loading skeletons
- Unit and integration testing
- Performance optimizations
- Better error handling

---

# Author

**Tim Verlage**

Portfolio  
https://tivva34.github.io/TimVerlage-Portfolio/

💻 GitHub  
https://github.com/Tivva34
