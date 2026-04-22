export const portfolioData = {
  // General Info
  name: "Hi, I'm Manikanta 👋",

  // Hero Section
  heroTitle: "Manikanta Yarramneedi",
  heroSubtitle:
    "Backend Developer with hands-on experience building scalable REST APIs using Python, FastAPI, and PostgreSQL. Proven ability to design CRUD-based systems, optimize API performance by 25%, and implement secure authentication (JWT, OAuth2).",

  // Resume — place your resume PDF at /public/resume.pdf
  resumeLink: "/resume.pdf",

  // Professional Summary (for About / Experience section)
  experience: {
    role: "Backend Developer",
    company: "UST Global",
    period: "Mar 2024 – Present",
    location: "Hyderabad, India",
    highlights: [
      "Developed REST APIs using Python and FastAPI",
      "Implemented CRUD operations and API design principles",
      "Built async APIs improving performance",
      "Implemented JWT and OAuth2 authentication",
      "Optimized PostgreSQL queries and indexing",
      "Handled error validation and exception handling"
    ]
  },

  education: {
    degree: "B.Sc. in Artificial Intelligence and Robotics",
    year: "2023"
  },

  // Impact Section (3 items)
  impactItems: [
    {
      title: "25% Faster APIs",
      description:
        "Optimized API performance with pagination, filtering, and PostgreSQL query tuning."
    },
    {
      title: "Secure Authentication",
      description:
        "Implemented JWT and OAuth2 authentication with bcrypt password hashing."
    },
    {
      title: "Production-Ready Systems",
      description:
        "Built async APIs with Docker deployment, error handling, and CI/CD concepts."
    }
  ],

  // Selected Work / Projects
  projects: [
    {
      title: "Scalable E-commerce API",
      description:
        "Built CRUD-based APIs with filtering and pagination (25% faster). Implemented JWT authentication, Docker deployment, and comprehensive validation and error handling. Designed scalable database schema using PostgreSQL with SQLAlchemy ORM.",
      techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "JWT"],
      link: "https://ecommerce-api-manikanta.vercel.app/",
      image: "/ecommerce-api.png",
      whyItMatters:
        "Demonstrates ability to design scalable backend systems and handle real-world e-commerce workflows."
    },
    {
      title: "Secure Auth API",
      description:
        "Built a secure authentication system using OAuth2 and JWT. Implemented password hashing with bcrypt, user signup/login flows, protected routes, and token refresh mechanisms.",
      techStack: ["FastAPI", "OAuth2", "JWT", "Bcrypt", "PostgreSQL"],
      link: "https://github.com/Maniprogramer/auth-api",
      image: "/authapi.png",
      whyItMatters:
        "Shows ability to implement secure authentication systems used in real-world backend applications."
    }
  ],

  // API Demo Section
  apiDemo: {
    title: "Try My API",
    description:
      "Explore the live backend API using Swagger UI. Test real endpoints for authentication, products, and orders — all running on production.",
    link: "https://ecommerce-api-manikanta.vercel.app/docs",
    endpoints: [
      { method: "POST", path: "/auth/login", label: "User Login" },
      { method: "GET", path: "/products", label: "List Products" },
      { method: "POST", path: "/cart", label: "Add to Cart" },
      { method: "GET", path: "/orders", label: "View Orders" }
    ]
  },

  // Skills (matching resume)
  skills: [
    "Python",
    "FastAPI",
    "REST APIs",
    "PostgreSQL",
    "SQLAlchemy",
    "SQLite",
    "OAuth2",
    "JWT",
    "Bcrypt",
    "Async Programming",
    "Docker",
    "Git",
    "Postman",
    "Linux",
    "Pytest",
    "AWS (Basics)"
  ],

  // Scrolling speed for the skills section (duration in seconds)
  skillsScrollSpeed: 50,

  // Default color mode (true for Dark Mode, false for Light Mode)
  defaultDarkMode: true,

  // Contact Section
  contactSubtitle: "Open to Backend Developer roles in Hyderabad | Open to Relocation",
  githubLink: "https://github.com/Maniprogramer",
  portfolioLink: "https://portfolio-ochre-xi-44.vercel.app",
  linkedinLink: "https://www.linkedin.com/in/manikanta-yarramneedi-487b413b6/",
  emailLink: "mailto:manikanta.yarramneedi.home@gmail.com"
};