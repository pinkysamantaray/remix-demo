# Welcome to Remix!

## Remix Demo App

In this project, we’ll build a scalable web application using Remix. We’ll learn about routing, server-side rendering (SSR), API integration, and managing data effectively with modern best practices.

- 📖 [Remix docs](https://remix.run/docs)

## 🚀 Key Takeaways

- Introduction to Remix and its benefits
- Setting up a Remix development environment
- Creating a scalable project structure
- File-based routing including dynamic routes like `/profile/:id` and nested layouts for reusable components
- Working with `loader` functions for fetching data on the server and `action` functions for handling form submissions and mutations.
- Using Tailwind CSS for responsive design
  This template comes with Tailwind CSS already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
- Integrating algorithms and data structure concepts into a real-world app

---

## 📂 Project Structure

Here’s the folder structure we use in this project:

```
app/
├── routes/
│ ├── index.tsx // Home route
│ ├── about.tsx // Static About page
│ ├── profile.$id.tsx // Dynamic profile route
│ └── api/ // API-related routes
├── components/ // Reusable components
├── styles/ // Tailwind CSS files
├── utils/ // Utility functions
├── root.tsx // Application root layout
└── entry.client.tsx // Client-side entry point
```

---

## 🛠️ Setting Up the Project

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

### Installation Steps

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the browser and navigate to `http://localhost:5173`.

### Deployment

First, build your app for production:

```sh
npm run build
```

- `build/server`
- `build/client`

Then run the app in production mode:

```sh
npm start
```

Open the browser and navigate to `http://localhost:3000`.

Now you'll need to pick a host to deploy it to.

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## 🔗 Additional Resources

- **[Remix Documentation](https://remix.run/docs)**: Official Remix documentation
- **[Tailwind CSS](https://tailwindcss.com/)**: Styling framework used in this project
