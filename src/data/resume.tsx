import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react"

export const DATA = {
  name: "Aum Sathwara",
  initials: "AS",
  // Feel free to update this URL to wherever you'd like users to go!
  url: "https://aumsathwara.github.io/portfolio",
  location: "Chicago, IL",
  locationLink: "https://www.google.com/maps/place/Chicago,+IL",
  description:
    "I train machines to think smarter, learn faster, and occasionally act like they invented intelligence. Big on AI, curious by nature, and always chasing the next wild idea.",
  summary:
    "Currently juggling roles as a Deep Learning Intern at Find Me LLC and Research Assistant at Gnosis Research Center. Proud Master’s candidate at Illinois Tech, where I tinker with all things Machine Learning, from building real-time NLP pipelines to dabbling in RAG and LLM fine-tuning. When I’m not wrangling data, you can find me shipping new side projects and playing hackathon wizard. Check out some of my escapades below!",
  avatarUrl: "/me.png",
  // Showcase your top skills here. Add or remove as you please!
  skills: [
    "Python",
    "Java",
    "R",
    "Go",
    "C#",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "NumPy",
    "Pandas",
    "PySpark",
    "BERT",
    "RAG",
    "Prompt Engineering",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Azure",
    "SQL",
    "MongoDB",
    "Cassandra",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sathwara.aum@gmail.com",
    tel: "872-279-9667",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aumsathwara",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aumsathwara",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X (formerly Twitter)",
        url: "https://twitter.com/SathwaraAum",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sathwara.aum@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1K-KpARk4zuwZ6VqfNVe0T-IuErUgNRc-/view?usp=drive_link",
        icon: Icons.resume,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Find Me LLC",
      href: "#",
      badges: [],
      location: "Charlotte, NC",
      title: "Deep Learning Developer Intern",
      logoUrl: "/findme_logo.jpg", // Just a placeholder—update as needed!
      start: "Feb 2025",
      end: "Present",
      description:
        "Developed a face recognition model with TensorFlow + OpenCV (sub-2s latency!). Containerized everything with Docker and launched to Kubernetes (AKS) for 25K+ images/day. Amped up CI/CD and kept our pipeline on the fast lane.",
    },
    {
      company: "Gnosis Research Center",
      href: "#",
      badges: [],
      location: "Chicago, IL",
      title: "Research Assistant",
      logoUrl: "/gnosis.png", // Just a placeholder—update as needed!
      start: "Feb 2025",
      end: "Present",
      description:
        "Engineered backend infrastructure to handle ML model storage and inference across 5+ distributed systems. Obsessed over LLM performance, whipped the architecture into shape to reduce latency by 12%. Built automated monitoring to keep model drift in check. Because unstoppable ML is the best ML!",
    },
    {
      company: "TatvaSoft",
      badges: [],
      href: "https://tatvasoft.com",
      location: "Ahmedabad, India",
      title: "Software Developer Intern",
      logoUrl: "/tatvasoft.png", // Just a placeholder—update as needed!
      start: "Jun 2022",
      end: "Jul 2022",
      description:
        "Optimized databases with SQL Azure & MongoDB for 99.9% uptime. Powered up DevOps with Jenkins, slashing deployment time by 70%. All while learning to handle the Indian summer heat!",
    },
    {
      company: "Hack Club SVIT",
      href: "#",
      badges: [],
      location: "Vasad",
      title: "Technical Lead",
      logoUrl: "/hackclub-svit.png", // Placeholder
      start: "Oct 2021",
      end: "Dec 2024",
      description:
        "Drove innovation and nurtured a dynamic technical environment, mentoring a team of passionate individuals. Oversaw project development to create and deliver high-impact solutions that aligned with the club’s mission. Championed collaborative learning and continuous improvement through strategic planning and technical leadership.",
    },
    {
      company: "Sardar Vallabhbhai Patel Institute of Technology",
      href: "#",
      badges: [],
      location: "Vasad, India",
      title: "TNP Senior Coordinator",
      logoUrl: "/svpit-tnp.png", // Placeholder
      start: "Mar 2021",
      end: "Jun 2023",
      description:
        "Pitched companies to collaborate with our institute, facilitating an unhindered hiring process. Assisted apprenticeship participants, verified employment eligibility, and provided on-site support during placement drives to streamline the employer-student experience.",
    },
    {
      company: "Sardar Vallabhbhai Patel Institute of Technology",
      href: "#",
      badges: [],
      location: "Vasad, India",
      title: "Technical Lead of Vision XI",
      logoUrl: "/svpit-tnp.png", // Placeholder
      start: "Nov 2021",
      end: "Dec 2021",
      description:
        "Coordinated an interdepartmental technical festival, managing event logistics and engaging participants. Led the team to orchestrate innovative activities, drawing on past experience to elevate the festival’s impact through unique ideas and flawless execution.",
    },
    {
      company: "Tata Consultancy Services",
      href: "#",
      badges: [],
      location: "Anand, Gujarat, India",
      title: "Campus Ambassador",
      logoUrl: "/tcs.png", // Placeholder
      start: "Jan 2021",
      end: "Mar 2023",
      description:
        "Promoted TCS events and career opportunities on campus, boosting brand visibility among students. Organized and executed TCS-sponsored meetups, serving as a liaison to share insights about company culture and pathways to professional growth.",
    },
    {
      company: "ADventure",
      href: "#",
      badges: [],
      location: "Pune, Maharashtra, India",
      title: "Data Scientist",
      logoUrl: "/adventure.png", // Placeholder
      start: "Apr 2021",
      end: "Oct 2021",
      description:
        "Developed a rules-based API framework handling 10,000+ daily requests to enable real-time decision-making. Reduced model inference latency by 15% and leveraged Kubernetes for scalable, multi-layered data processing. Implemented CI/CD pipelines, cutting deployment time by 30% and speeding feature releases.",
    },
    {
      company: "Unschool",
      href: "#",
      badges: [],
      location: "Vadodara, Gujarat, India",
      title: "Campus Ambassador",
      logoUrl: "/unschool.png", // Placeholder
      start: "Jun 2020",
      end: "Dec 2020",
      description:
        "Served as a liaison for Unschool on campus, organizing informational sessions and workshops to spark student interest in online learning. Facilitated communication between students and Unschool representatives, bolstering course enrollments and user engagement.",
    },
    {
      company: "Merry Faces",
      href: "#",
      badges: [],
      location: "Vadodara, Gujarat, India",
      title: "Social Media Manager",
      logoUrl: "/merryfaces.png", // Placeholder
      start: "Aug 2019",
      end: "Feb 2020",
      description:
        "Created and executed social media strategies for multiple channels, engaging influencers to amplify brand messaging. Monitored community interactions and spearheaded promotional campaigns—contests, giveaways—to expand brand awareness and foster meaningful audience engagement.",
    },
    {
      company: "Riptidee",
      href: "#",
      badges: [],
      location: "Mumbai, Maharashtra, India",
      title: "Marketing Intern",
      logoUrl: "/riptidee.png", // Placeholder
      start: "Feb 2019",
      end: "Aug 2019",
      description:
        "Curated content for diverse social media platforms to increase brand recognition and generate leads for clients. Optimized marketplace listings (Amazon, Flipkart, Myntra), updating high-traffic keywords and SEO-driven product descriptions. Strategized promotional campaigns that elevated user engagement and boosted conversions.",
    },
  ],
  education: [
    {
      school: "Illinois Institute of Technology",
      href: "https://www.iit.edu/",
      degree: "Master of Applied Science in Computer Science",
      logoUrl: "/iit.png", // Just a placeholder—update as needed!
      start: "2023",
      end: "2025",
    },
    {
      school: "Gujarat Technological University",
      href: "https://www.gtu.ac.in/",
      degree: "Bachelor of Engineering in Computer Engineering",
      logoUrl: "/gtu.png", // Just a placeholder—update as needed!
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Real-time NLP Pipeline Deployment",
      href: "#",
      dates: "Jan 2025 – Feb 2025",
      active: true,
      description:
        "Built out a high-throughput NLP pipeline using FastAPI, GCP (VertexAI + Cloud Run), and GitHub Actions. Tamed 1,000+ concurrent requests with sub-100ms latency—like wrangling caffeinated cats!",
      technologies: [
        "Python",
        "FastAPI",
        "Google Cloud",
        "VertexAI",
        "Cloud Run",
        "GitHub Actions",
      ],
      links: [],
      image: "/real_time_nlp.png",
      video: "",
    },
    {
      title: "Valentino Chatbot",
      href: "#",
      dates: "Dec 2024 – Jan 2025",
      active: true,
      description:
        "Deployed a BERT-powered chatbot on AWS Lambda. Handled 500+ requests per minute with real-time entity recognition for next-level conversation engagement. Because chatbots deserve a little swagger, too!",
      technologies: ["PyTorch", "BERT", "AWS Lambda", "Serverless Architecture"],
      links: [],
      image: "/valentino.png",
      video: "",
    },
    {
      title: "AI-Driven Software Development Pipeline using Waterfall Model",
      href: "https://github.com/aumsathwara/SDusingAI",
      dates: "Aug 2024 - Dec 2024",
      active: false,
      description:
        "This project leverages OpenAI's AI agents to automate the entire SDLC using the Waterfall model. With just a single prompt, the notebook orchestrates roles like software developer, system tester, document engineer, and project manager, guiding the process from requirements to release.",
      technologies: [
        "Artificial Intelligence (AI)",
        "Software Development",
        "SDLC",
        "Analytical Skills",
        "Large Language Models (LLM)",
        "OpenAI",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/aumsathwara/SDusingAI",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/SDAI.png",
      video: "",
    },
    {
      title: "Diabetic Retinopathy",
      href: "https://github.com/aumsathwara/Diabetic-Retinopathy",
      dates: "Aug 2023 - Dec 2023",
      active: false,
      description:
        "Developed and implemented deep learning models (CNN, DenseNet + XGBoost, EfficientNet, Inception V3, Stacked EfficientNet) to classify diabetic retinopathy severity levels from retinal images. Achieved 95% accuracy leveraging ensemble learning, hyperparameter tuning, and advanced preprocessing. Associated with Illinois Institute of Technology.",
      technologies: [
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Python",
        "OpenCV",
        "XGBoost",
        "Matplotlib",
        "NumPy",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/aumsathwara/Diabetic-Retinopathy",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/diabetic_retinopathy.png",
      video: "",
    },
    {
      title: "MCP Monorepo",
      href: "https://github.com/aumsathwara/MCP",
      dates: "Jan 2024 - Present",
      active: true,
      description:
       "Engineered a modular Python monorepo of MCP servers with uv-powered installs and Git subdirectory magic—because managing isolated microservices *should* feel like hacking a clean API matrix.",
      technologies: [
        "Python",
        "uv",
        "Git",
        "Monorepo",
        "Pyproject.toml"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/aumsathwara/MCP",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mcp_monorepo.png",
      video: "",
    },    
    {
      title: "Chest X-Ray VQA System",
      href: "https://github.com/aumsathwara/VQA-ChestXray",
      dates: "Sep 2023 – Dec 2023",
      active: false,
      description:
        "Architectured a hybrid ViT+BERT powerhouse and trained it to read chest X-rays and answer medical questions—basically gave transformers an MD in radiology.",
      technologies: [
        "PyTorch",
        "Transformers",
        "Vision Transformer (ViT)",
        "BERT",
        "Python",
        "VQA-RAD",
        "Indiana Chest X-ray Dataset"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/aumsathwara/VQA-ChestXray",
          icon: <Icons.globe className="size-3" />, 
        },
      ],
      image: "/vqa_chest_xray.png",
      video: "",
    },    
  ],
  hackathons: [
    {
      title: "Scarlet Hawk Hacks",
      dates: "2024",
      location: "Chicago, IL",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgO15UCPDzz70H5cphJL716R0s8jjCOW0_VA&s", // placeholder hackathon-style logo
      description:
        "Built WindyCityWander, a full-stack travel planner that helps budget-conscious adventurers explore Chicago like locals—complete with AI-curated itineraries and real-time transit hacks.",
      links: [],
    },
    {
      title: "Grainger Computing Innovation Challenge",
      dates: "2024",
      location: "Illinois Institute of Technology, Chicago",
      image:
        "https://www.iit.edu/sites/default/files/styles/width_1280/public/2023-11/Grainger%20stream%20slide%201_0.jpg?itok=uwpqqjte", // another placeholder hackathon logo
      description:
        "Developed VisionSentinel, a computer vision system that scans CCTV footage in real-time to detect suspicious behavior—like giving shoplifters nowhere to hide (except maybe the cloud).",
      links: [],
    },        
    {
      title: "HackSVIT",
      dates: "2022",
      image:
      "https://hacksvit2022.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F557c4287de754d8d8f9c640232af1b76%2Fassets%2Ffavicon%2F104.png&w=1440&q=75",
      location: "Ahmedabad, India",
      description:
        "Organized a 36-hour hackathon with 400+ participants—wrangling hungry coders, near-endless coffee, and endless creativity. Mentored novices, championed insane ideas, and watched mayhem turn into magic.",
      links: [],
    },
    {
      title: "MECIA Hacks",
      dates: "2022",
      location: "Ahmedabad, India",
      image:
      "https://mecia-hacks.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F154ac31229a842f4a09687bb8238e9df%2Fassets%2Ffavicon%2F541.png&w=1440&q=75",
      description:
        "Mentored 300+ participants on ML tips & tricks. Because machine learning is more fun when you share the nerdy love.",
      links: [],
    },
  ],
} as const
