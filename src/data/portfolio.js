export const portfolioData = {
  // General Info
  name: "Hi, I'm Manikanta 👋",

  // Hero Section
  heroTitle: "Manikanta Yarramneedi",
  heroSubtitle:
    "Python Backend Developer (Fresher) with hands-on project experience building REST APIs using Python, FastAPI, and PostgreSQL, including freelance project work. Practical exposure to designing CRUD-based systems, implementing secure authentication (JWT, OAuth2), async programming, database optimization, error handling, and containerizing applications with Docker. Also familiar with Flask and currently learning Django.",

  // Resume — place your resume PDF at /public/resume.pdf
  resumeLink: "/resume.pdf",

  // Education (showing both MCA and B.Sc.)
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "KIET College, Korangi",
      year: "2023 – 2025"
    },
    {
      degree: "B.Sc. in Artificial Intelligence and Robotics",
      institution: "Ideal College of Arts and Sciences, Kakinada",
      year: "2023"
    }
  ],

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
      title: "Freelance Backend Projects — AhamVerse Technologies",
      description:
        "Developed REST APIs using Python and FastAPI as part of freelance project work. Implemented CRUD operations following API design principles. Built async APIs to improve performance and efficiency. Implemented secure JWT and OAuth2 authentication. Optimized PostgreSQL queries and database indexing to reduce latency. Handled request validation and exception handling workflows.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "JWT", "OAuth2", "Async Programming"],
      link: "https://github.com/Maniprogramer",
      image: null,
      whyItMatters:
        "Real-world freelance experience building backend systems with professional API design and optimization."
    },
    {
      title: "Scalable E-commerce API",
      description:
        "Built CRUD-based APIs with filtering and pagination, achieving 25% faster data retrieval. Implemented standard authentication workflows and containerized deployment using Docker. Added rigorous request validation and structured global error handling.",
      techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "JWT"],
      link: "https://ecommerce-api-manikanta.vercel.app/",
      image: "/ecommerce-api.png",
      whyItMatters:
        "Demonstrates ability to design scalable backend systems and handle real-world e-commerce workflows."
    },
    {
      title: "Secure Auth API",
      description:
        "Built a secure authorization system implementing standard OAuth2 and JWT protocols. Implemented secure password hashing (Bcrypt) and validation.",
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
    "SQL",
    "FastAPI",
    "Flask",
    "Django",
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
    "AWS (Basics)",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "TensorFlow",
    "PyTorch",
    "Machine Learning"
  ],

  // Scrolling speed for the skills section (duration in seconds)
  skillsScrollSpeed: 50,

  // Default color mode (true for Dark Mode, false for Light Mode)
  defaultDarkMode: true,

  // Contact Section
  contactSubtitle: "Open to Python backend roles across India | Open to relocation | On-site or remote",
  githubLink: "https://github.com/Maniprogramer",
  portfolioLink: "https://portfolio-ochre-xi-44.vercel.app",
  linkedinLink: "https://www.linkedin.com/in/manikanta-yarramneedi-487b413b6/",
  emailLink: "mailto:manikanta.yarramneedi.home@gmail.com"
};