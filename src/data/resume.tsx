import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react"

export const DATA = {
  // ─────────────────────────────────────────────────────
  // Basic Profile
  // ─────────────────────────────────────────────────────
  name: "Aum Sathwara",
  initials: "AS",
  url: "https://aumsathwara.github.io/portfolio",
  location: "San Jose, CA",
  locationLink: "https://www.google.com/maps/place/San+Jose,+CA",
  avatarUrl: "/me.png",
  description:
    "Applied ML engineer obsessed with building agentic AI systems that don’t just predict, but act. I design multi-agent setups that scrape, reason, plan, and execute end-to-end workflows.",
  summary:
    "I earned my Master’s in Computer Science from Illinois Tech (GPA 3.83/4.0), and since then I’ve been obsessed with building AI that doesn’t just work in a notebook but survives in the wild. My recent projects range from outbound/inbound Voice AI agents that sound human, to MCP-powered multi-agent workflows running on HPC, to CV/NLP services that hit sub-200 ms latencies without breaking safety guardrails. What excites me most is making AI production-ready—balancing data quality, evaluation, latency, and cost so teams can focus on creating instead of firefighting.",

  // ─────────────────────────────────────────────────────
  // Skills
  // ─────────────────────────────────────────────────────
  skills: [
    // Languages
    "Python", "Java", "JavaScript", "Go", "C++", "R", "C#", "SQL", "NoSQL", "Unix Shell",
    // ML / DL / LLM
    "PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "BERT", "ViT", "Hugging Face", "LangChain", "LangGraph", "pydantic-AI",
    // Data & Pipelines
    "NumPy", "Pandas", "PySpark", "ETL", "Data Warehousing", "Real-time Streaming", "Kafka", "Spark",
    // Databases
    "PostgreSQL", "MySQL", "MongoDB", "Cassandra", "pgvector",
    // Cloud & MLOps
    "AWS", "Azure", "GCP", "Docker", "Docker Compose", "Kubernetes", "Helm", "Jenkins", "GitHub Actions", "DevSecOps",
    // Voice / Agents / Automation
    "Retell AI", "n8n", "SIP Trunking", "MCP (Model Context Protocol)"
  ],

  // ─────────────────────────────────────────────────────
  // Navbar
  // ─────────────────────────────────────────────────────
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" }
  ],

  // ─────────────────────────────────────────────────────
  // Contact
  // ─────────────────────────────────────────────────────
  contact: {
    email: "sathwara.aum@gmail.com",
    tel: "872-279-9667",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aumsathwara",
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aumsathwara",
        icon: Icons.linkedin,
        navbar: true
      },
      X: {
        name: "X (formerly Twitter)",
        url: "https://twitter.com/SathwaraAum",
        icon: Icons.x,
        navbar: true
      },
      email: {
        name: "Send Email",
        url: "mailto:sathwara.aum@gmail.com",
        icon: Icons.email,
        navbar: true
      },
      resume: {
        name: "Resume",
        url: "https://github.com/aumsathwara/Resume/blob/main/Aum_Sathwara_Resume.pdf", // replace when ready
        icon: Icons.resume,
        navbar: true
      }
    }
  },

  // ─────────────────────────────────────────────────────
  // Work Experience (volunteer roles have been moved out)
  // ─────────────────────────────────────────────────────
work: [
  {
    company: "HR Staffing LLC",
    href: "#",
    badges: ["Voice AI", "Automation"],
    location: "Chicago, IL",
    title: "AI Business Process Engineer",
    logoUrl: "/hr-staffing.png",
    start: "Aug 2025",
    end: "Present",
    description:
      "At HR Staffing, I’ve been blending automation with communication—building scrapers that pull hyper-targeted leads straight from Google Maps, then pairing them with Voice AI agents that reach out like seasoned sales reps. Alongside outbound, I also shipped inbound voice systems for medical clients that answer questions, schedule appointments, and even handle invoice lookups with a calm, natural flow."
  },
  {
    company: "Charmelle Beauty LLC",
    href: "#",
    badges: ["Recommendation System", "Computer Vision"],
    location: "Chicago, IL",
    title: "AI Research Engineer",
    logoUrl: "/charmelle.png",
    start: "Jul 2025",
    end: "Present",
    description:
      "At Charmelle, I turned a mountain of unstructured product data into a polished recommendation engine. After scraping and normalizing thousands of beauty products across dozens of retailers, I designed a sleek PostgreSQL-backed API that serves tailored recommendations in under 200 milliseconds—even while juggling price filters, relevance scoring, and style preferences."
  },
  {
    company: "Find Me LLC",
    href: "#",
    badges: ["CV+NLP", "Cloud"],
    location: "Charlotte, NC",
    title: "Deep Learning Developer Intern",
    logoUrl: "/findme_logo.jpg",
    start: "Feb 2025",
    end: "Present",
    description:
      "At Find Me, I dove into production-scale CV and NLP, packaging GPU-heavy models into containerized services on Azure Kubernetes. The result: 40% higher throughput and blazing-fast FastAPI endpoints consistently hitting sub-200 ms latencies. I also engineered caching and async pipelines, integrated LLM safety filters that made personalization smarter (and safer), and scaled up a product crawler that indexed over 10,000 items for real-time discovery."
  },
  {
    company: "Gnosis Research Center",
    href: "#",
    badges: ["Agentic AI", "LLMOps", "Distributed Systems"],
    location: "Chicago, IL",
    title: "Research Assistant",
    logoUrl: "/gnosis.png",
    start: "Feb 2025",
    end: "Jun 2025",
    description:
      "At Gnosis, I built the plumbing that keeps large-scale AI research flowing. We orchestrated 13+ MCP servers to handle HPC workloads with near-perfect uptime, letting researchers run 500+ jobs every week without breaking stride. I automated deployment across protocols like STDIO and SSE, slashed setup times by 85%, and built a provider-agnostic Python client that talks to OpenAI, Anthropic, Gemini, and Ollama with equal ease. One of my favorite parts? A natural language interface that turns plain English into job specs for HPC workflows."
  },
  {
    company: "TatvaSoft",
    href: "https://tatvasoft.com",
    badges: ["Database Optimization", "DevOps"],
    location: "Ahmedabad, India",
    title: "Software Developer Intern",
    logoUrl: "/tatvasoft.png",
    start: "Jun 2022",
    end: "Jul 2022",
    description:
      "At TatvaSoft, I got my hands dirty with database optimization and DevOps. I worked on tightening reliability for Azure SQL and MongoDB, hitting near-constant uptime, and introduced CI/CD pipelines with Jenkins that made deployments run 70% faster. It was my first real taste of how much impact small improvements in delivery speed and stability can have."
  },
  {
    company: "ADventure",
    href: "#",
    badges: ["Data Science", "Machine Learning"],
    location: "Pune, Maharashtra, India",
    title: "Data Scientist",
    logoUrl: "/adventure.png",
    start: "Apr 2021",
    end: "Oct 2021",
    description:
      "At ADventure, I built a rules-driven API that crunched through more than 10,000 requests a day, powering real-time decisions for client platforms. Along the way, I fine-tuned model pipelines to cut inference latency by 15% and orchestrated multi-layered processing with Kubernetes. We leaned into CI/CD to keep deployments humming, which meant we could push features and fixes with real confidence."
  }
],


  // ─────────────────────────────────────────────────────
  // Volunteering / Leadership (separated from work)
  // ─────────────────────────────────────────────────────
  volunteering: [
    {
      organization: "Hack Club SVIT",
      href: "#",
      badges: ["Technical Leadership"],
      location: "Vasad",
      title: "Technical Lead",
      logoUrl: "/hackclub-svit.png",
      start: "Oct 2021",
      end: "Dec 2024",
      description:
        "Drove innovation and mentored a technical team; oversaw project development to deliver high-impact solutions aligned with the club’s mission."
    },
    {
      organization: "Sardar Vallabhbhai Patel Institute of Technology",
      href: "#",
      badges: ["Operations"],
      location: "Vasad, India",
      title: "TNP Senior Coordinator",
      logoUrl: "/svpit-tnp.png",
      start: "Mar 2021",
      end: "Jun 2023",
      description:
        "Partnered with employers to streamline placement; supported apprentices, verified eligibility, and ran on-site operations during drives."
    },
    {
      organization: "Sardar Vallabhbhai Patel Institute of Technology",
      href: "#",
      badges: ["Technical Leadership"],
      location: "Vasad, India",
      title: "Technical Lead of Vision XI",
      logoUrl: "/svpit-tnp.png",
      start: "Nov 2021",
      end: "Dec 2021",
      description:
        "Coordinated an interdepartmental technical festival; managed logistics and delivered innovative activities with smooth execution."
    },
    {
      organization: "Tata Consultancy Services",
      href: "#",
      badges: ["Marketing"],
      location: "Anand, Gujarat, India",
      title: "Campus Ambassador",
      logoUrl: "/tcs.png",
      start: "Jan 2021",
      end: "Mar 2023",
      description:
        "Promoted TCS opportunities; organized sessions and meetups; acted as liaison to share insights about culture and growth paths."
    },
    {
      organization: "Unschool",
      href: "#",
      badges: ["Community"],
      location: "Vadodara, Gujarat, India",
      title: "Campus Ambassador",
      logoUrl: "/unschool.png",
      start: "Jun 2020",
      end: "Dec 2020",
      description:
        "Organized sessions/workshops to increase engagement in online learning; improved enrollments and participation."
    },
    {
      organization: "Merry Faces",
      href: "#",
      badges: ["Marketing"],
      location: "Vadodara, Gujarat, India",
      title: "Social Media Manager",
      logoUrl: "/merryfaces.png",
      start: "Aug 2019",
      end: "Feb 2020",
      description:
        "Executed multi-channel strategies, engaged influencers, and ran campaigns (contests/giveaways) to expand brand reach."
    },
    {
      organization: "Riptidee",
      href: "#",
      badges: ["Marketing"],
      location: "Mumbai, Maharashtra, India",
      title: "Marketing Intern",
      logoUrl: "/riptidee.png",
      start: "Feb 2019",
      end: "Aug 2019",
      description:
        "Curated platform-specific content; optimized marketplace listings with SEO-driven copy; ran promotions that improved conversions."
    }
  ],

  // ─────────────────────────────────────────────────────
  // Education
  // ─────────────────────────────────────────────────────
  education: [
    {
      school: "Illinois Institute of Technology",
      href: "https://www.iit.edu/",
      degree: "Master of Applied Science in Computer Science (GPA: 3.83/4.0)",
      logoUrl: "/iit.png",
      start: "2023",
      end: "May 2025",
      details:
        "Member, Upsilon Pi Epsilon (UPE) — top 35% academically; presented poster at the 37th International Conference on Scalable Scientific Data Management."
    },
    {
      school: "Gujarat Technological University",
      href: "https://www.gtu.ac.in/",
      degree: "Bachelor of Engineering in Computer Engineering (GPA: 3.76/4.0)",
      logoUrl: "/gtu.png",
      start: "2019",
      end: "May 2023",
      details:
        "Led HackSVIT technical ops for 400+ participants; mentored 300+ developers at Mecia Hacks."
    }
  ],

  // ─────────────────────────────────────────────────────
  // Projects (image links unchanged)
  // ─────────────────────────────────────────────────────
  projects: [
    {
      title: "MCP Monorepo",
      href: "https://github.com/aumsathwara/MCP",
      dates: "Jan 2024 – Present",
      active: true,
      description:
        "Modular Python monorepo of MCP servers (IOWarp, Arxiv-MCP, Pandas-MCP, Compression-MCP, etc.) with uv-powered installs and clean subdirectory packaging so agents/tools compose easily.",
      technologies: ["Python", "MCP", "uv", "Git", "Monorepo"],
      links: [
        { type: "GitHub", href: "https://github.com/aumsathwara/MCP", icon: <Icons.globe className="size-3" /> }
      ],
      image: "/mcp_monorepo.png",
      video: ""
    },
    {
      title: "OMOPSync — Healthcare ETL to OMOP CDM", 
      href: "https://github.com/aumsathwara/OMOPSync",
      dates: "2025",
      active: true,
      description:
        "Automated Synthea→OMOP ETL with Python + R validation; −75% setup time (80 → 20 min). Added RAG for compliance queries via pgvector embeddings and Gemini.",
      technologies: ["Python", "R", "SQL", "PostgreSQL", "AWS", "LangChain", "MCP", "pgvector"],
      links: [
        { type: "GitHub", href: "https://github.com/aumsathwara/OMOPSync", icon: <Icons.globe className="size-3" /> }
      ],
      image: "/omopsync.png",
      video: ""
    },
    {
      title: "Real-time NLP Pipeline Deployment",
      href: "#",
      dates: "Jan 2025 – Feb 2025",
      active: true,
      description:
        "High-throughput NLP on GCP (Vertex AI + Cloud Run) behind FastAPI with GitHub Actions. Sustained 1,000+ RPS with sub-100 ms handler times via caching and concurrency tuning.",
      technologies: ["Python", "FastAPI", "Google Cloud", "Vertex AI", "Cloud Run", "GitHub Actions"],
      links: [],
      image: "/real_time_nlp.png",
      video: ""
    },
    {
      title: "Valentino Chatbot",
      href: "#",
      dates: "Dec 2024 – Jan 2025",
      active: true,
      description:
        "BERT-powered chatbot on AWS Lambda. 500+ RPM with real-time entity recognition; serverless deployment for cost-effective scalability.",
      technologies: ["PyTorch", "BERT", "AWS Lambda", "Serverless Architecture"],
      links: [],
      image: "/valentino.png",
      video: ""
    },
    {
      title: "AI-Driven Software Development Pipeline using Waterfall Model",
      href: "https://github.com/aumsathwara/SDusingAI",
      dates: "Aug 2024 – Dec 2024",
      active: false,
      description:
        "Multi-agent workflow orchestrating roles (developer, tester, doc engineer, PM) to generate, validate, and ship artifacts via a Waterfall cadence.",
      technologies: ["Artificial Intelligence (AI)", "Software Development", "SDLC", "Large Language Models (LLM)", "OpenAI"],
      links: [
        { type: "GitHub", href: "https://github.com/aumsathwara/SDusingAI", icon: <Icons.globe className="size-3" /> }
      ],
      image: "/SDAI.png",
      video: ""
    },
    {
      title: "Chest X-Ray VQA System",
      href: "https://github.com/aumsathwara/VQA-ChestXray",
      dates: "Sep 2023 – Dec 2023",
      active: false,
      description:
        "Hybrid ViT + BERT model trained on VQA-RAD and Indiana datasets; explored attention maps and error modes for clinical Q&A.",
      technologies: ["PyTorch", "Transformers", "Vision Transformer (ViT)", "BERT", "Python"],
      links: [
        { type: "GitHub", href: "https://github.com/aumsathwara/VQA-ChestXray", icon: <Icons.globe className="size-3" /> }
      ],
      image: "/vqa_chest_xray.png",
      video: ""
    },
    {
      title: "Diabetic Retinopathy",
      href: "https://github.com/aumsathwara/Diabetic-Retinopathy",
      dates: "Aug 2023 – Dec 2023",
      active: false,
      description:
        "CNN, DenseNet+XGBoost, EfficientNet, and Inception V3 ensembles for DR severity classification with augmentation and hyperparameter sweeps; ~95% accuracy in controlled settings.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Scikit-learn", "XGBoost", "Matplotlib", "NumPy"],
      links: [
        { type: "GitHub", href: "https://github.com/aumsathwara/Diabetic-Retinopathy", icon: <Icons.globe className="size-3" /> }
      ],
      image: "/diabetic_retinopathy.png",
      video: ""
    }
  ],

  // ─────────────────────────────────────────────────────
  // Hackathons (image links unchanged)
  // ─────────────────────────────────────────────────────
  hackathons: [
    {
      title: "Scarlet Hawk Hacks",
      dates: "2024",
      location: "Chicago, IL",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgO15UCPDzz70H5cphJL716R0s8jjCOW0_VA&s",
      description:
        "Built WindyCityWander, a full-stack travel planner that helps budget-conscious adventurers explore Chicago like locals—AI-curated itineraries and real-time transit hacks.",
      links: []
    },
    {
      title: "Grainger Computing Innovation Challenge",
      dates: "2024",
      location: "Illinois Institute of Technology, Chicago",
      image:
        "https://www.iit.edu/sites/default/files/styles/width_1280/public/2023-11/Grainger%20stream%20slide%201_0.jpg?itok=uwpqqjte",
      description:
        "VisionSentinel: real-time CV on CCTV streams to detect suspicious activity with high-precision alerting.",
      links: []
    },
    {
      title: "HackSVIT",
      dates: "2022",
      location: "Ahmedabad, India",
      image:
        "https://hacksvit2022.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F557c4287de754d8d8f9c640232af1b76%2Fassets%2Ffavicon%2F104.png&w=1440&q=75",
      description:
        "Organized a 36-hour hackathon with 400+ participants; mentored teams and ran technical operations.",
      links: []
    },
    {
      title: "MECIA Hacks",
      dates: "2022",
      location: "Ahmedabad, India",
      image:
        "https://mecia-hacks.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F154ac31229a842f4a09687bb8238e9df%2Fassets%2Ffavicon%2F541.png&w=1440&q=75",
      description:
        "Mentored 300+ developers on ML tips & tricks; helped teams ship working demos on tight timelines.",
      links: []
    }
  ]
} as const
