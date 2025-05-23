# User Management App

A simple React + TypeScript application that allows users to view, add, and generate random users using a clean UI built with MUI and powered by Zustand, Axios and React Query.

---

## ⚙️ Environment Variables

This project uses a `.env` file to configure environment-specific variables.

### 🔧 Create a `.env` file and add this variable to it:

```
VITE_API_URL= "API_Base_Url"
```

---

## 🚀 How to Run the Project Locally

### 1. Clone the repository

```
git clone https://github.com/abdallahaltanna/Usermint.git

cd Usermint
```

### 2. Install dependencies

```
npm install
```

### 3. Run the app

```
npm run dev
```

> The app will run on `http://localhost:5173` by default (Vite).

---

## 🧪 Running Cypress Tests

### Run the app

```
npm run dev
```

### Run Cypress in interactive mode

```
npx cypress open
```

---

## 💡 Thought Process

The goal was to build a clean, scalable user management system using modern tools with the following priorities:

- ✅ Modular component design
- ✅ Simple global state via Zustand
- ✅ Data fetching handled cleanly via React Query and Axios
- ✅ Form validation using React Hook Form + Yup
- ✅ Responsive and accessible UI with MUI
- ✅ Fully testable with Cypress

---

## 🧰 Tools & Libraries Used

| Tool / Library        | Reason                                           |
| --------------------- | ------------------------------------------------ |
| **React**             | Modern UI framework                              |
| **TypeScript**        | Static typing and DX improvements                |
| **Vite**              | Lightning-fast build tool                        |
| **Zustand**           | Minimal, scalable state management               |
| **React Query**       | Caching and data synchronization                 |
| **Axios**             | Promise-based HTTP client for API requests       |
| **MUI (Material UI)** | Pre-styled, accessible component library         |
| **React Hook Form**   | Lightweight forms with native validation         |
| **Yup**               | Declarative schema-based validation              |
| **Cypress**           | End-to-end testing with strong community support |
| **React Toastify**    | Quick toast notifications with a nice UX         |

### 🛠️ Dev & Code Quality Tools

| Tool / Library  | Purpose                                                      |
| --------------- | ------------------------------------------------------------ |
| **ESLint**      | Linting JavaScript/TypeScript code for style and correctness |
| **Prettier**    | Auto-formatting code to maintain consistency                 |
| **Husky**       | Git hooks for pre-commit enforcement                         |
| **Lint-Staged** | Runs linters on staged Git files                             |

---

## 🔧 Improvements If I Had More Time

- ✅ Add **pagination** or **infinite scrolling**
- ✅ Add **edit/delete** functionality for users
- ✅ Integrate with a real **backend API** (e.g. Firebase, Supabase)
- ✅ Add **error boundary** for better fallback UX
- ✅ Add **GitHub Actions** CI to run tests on every PR
- ✅ Use **OpenAPI or Zod** for API schema validation

---

## 📂 Folder Structure

```

.
├── .husky/ # Git hooks
├── cypress/ # Cypress E2E tests
├── node_modules/ # Project dependencies
├── public/ # Static public files
├── src/ # Application source code
│ ├── assets/ # Static assets (icons, images, etc.)
│ ├── axios/ # Axios instance and configs
│ ├── components/ # Reusable UI components (Modal, Table, Form)
│ ├── queries/ # React Query hooks for data fetching
│ ├── types/ # Shared TypeScript interfaces
│ ├── validations/ # Yup validation schemas
│ ├── App.tsx # Main app component
│ ├── index.css # Styles
│ ├── main.tsx # Vite entry point
│ ├── store.ts # Zustand store for global state
│ └── vite-env.d.ts # Vite environment typings
├── .env # Environment variables
├── .gitignore
├── .prettierignore
├── .prettierrc # Prettier config
├── cypress.config.ts # Cypress configuration
├── eslint.config.js # ESLint config
├── index.html # HTML template
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── users.json # Static user data
├── vite.config.ts # Vite configuration
└── README.md # Project documentation
```
