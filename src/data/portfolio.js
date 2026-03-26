export const portfolioData = {
  // General Info
  name: "Hi, I’m Manikanta 👋",

  // Hero Section
  heroTitle: "Manikanta Yarramneedi",
  heroSubtitle:
    "Backend Developer specializing in Python, FastAPI, and PostgreSQL. I build scalable APIs with secure authentication and real-world workflows. Currently looking for Backend Developer roles in Hyderabad.",

  // Impact Section (3 items)
  impactItems: [
    {
      title: "Scalable Backend Systems",
      description:
        "Designed modular APIs with clean architecture and service-layer patterns."
    },
    {
      title: "Secure Authentication",
      description:
        "Implemented JWT-based authentication and protected API endpoints."
    },
    {
      title: "Production-Ready APIs",
      description:
        "Built real-world workflows including products, cart, and order systems."
    }
  ],

  // Selected Work / Projects
  projects: [
    {
      title: "E-commerce Backend System",
      description:
        "Built a production-style backend handling products, cart, and orders; implemented secure JWT authentication; designed scalable database schema using PostgreSQL; added pagination and filtering for performance.",
      link: "https://e-commerce-api-three-henna.vercel.app/",
      image: "/ecommerce-api.png",
      whyItMatters:
        "Demonstrates ability to design scalable backend systems and handle real-world e-commerce workflows."
    },
    {
      title: "Authentication & Authorization API",
      description:
        "Developed a secure authentication system using JWT and OAuth2; implemented user signup, login, and protected routes; ensured password security using bcrypt hashing.",
      link: "https://github.com/Maniprogramer/auth-api",
      image: "/authapi.png",
      whyItMatters:
        "Shows ability to implement secure authentication systems used in real-world backend applications."
    },
    {
      title: "Feedback Collection System",
      description:
        "Designed a backend system for collecting and processing user feedback data with structured storage and analysis workflows.",
      link: "#",
      image: "/feedback.png",
      whyItMatters:
        "Demonstrates ability to design data-driven backend systems and handle structured data workflows."
    }
  ],

  // API Demo Section
  apiDemo: {
    title: "Try My API",
    description: "Explore the live backend API using Swagger UI. Test real endpoints for authentication, products, and orders — all running on production.",
    link: "https://e-commerce-api-three-henna.vercel.app/docs",
    endpoints: [
      { method: "POST", path: "/auth/login", label: "User Login" },
      { method: "GET", path: "/products", label: "List Products" },
      { method: "POST", path: "/cart", label: "Add to Cart" },
      { method: "GET", path: "/orders", label: "View Orders" }
    ]
  },

  // Skills
  skills: [
    "Python",
    "FastAPI",
    "REST APIs",
    "PostgreSQL",
    "SQLAlchemy",
    "JWT Authentication",
    "Docker",
    "Git",
    "Postman",
    "Pandas",
    "NumPy",
    "Scikit-learn"
  ],

  // Scrolling speed for the skills section (duration in seconds)
  skillsScrollSpeed: 50,

  // Default color mode (true for Dark Mode, false for Light Mode)
  defaultDarkMode: true,

  // Contact Section
  contactSubtitle: "Open to Backend Developer roles in Hyderabad",
  githubLink: "https://github.com/Maniprogramer",
  linkedinLink: "https://www.linkedin.com/in/manikanta-yarramneedi-487b413b6/",
  emailLink: "mailto:manikanta.yarramneedi.home@gmail.com"
};