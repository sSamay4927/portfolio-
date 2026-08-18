export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack MERN' | 'Algorithm Visualization' | 'Quant & NLP';
  badge: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  architectureNotes: string;
}

export const RESUME_DATA = {
  personal: {
    name: "Samay Shankar Dubey",
    shortName: "Samay Dubey",
    title: "Full-Stack Engineer & System Architect",
    role: "B.Tech CS Student at IIIT Nagpur",
    email: "samaydubey232@gmail.com",
    location: "Nagpur / Lucknow, India",
    github: "https://github.com/sSamay4927",
    linkedin: "https://www.linkedin.com/in/samay-dubey-356376352/",
    leetcode: "https://leetcode.com/u/sSamay/",
    codeforces: "https://codeforces.com/profile/shadow_striker_9",
    heroDescription:
      "B.Tech CS Student at IIIT Nagpur crafting high-performance full-stack architectures and real-time systems.",
  },
  education: [
    {
      institution: "Indian Institute of Information Technology, Nagpur",
      degree: "B.Tech in Computer Science",
      period: "2023 – Present",
      score: "CGPA: 7.2 / 10",
      details: "Specializing in High-Performance Computing, Distributed Systems & Algorithms.",
    },
    {
      institution: "Kendriya Vidyalaya, Gomti Nagar, Lucknow",
      degree: "Senior Secondary (Class XII & X)",
      period: "2020 – 2023",
      score: "Class XII: 89.8% | Class X: 96.4%",
      details: "Science & Mathematics stream with academic excellence distinction.",
    },
  ],
  skills: {
    languages: ["C++", "Python", "JavaScript (ES6+)", "TypeScript", "SQL"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "D3.js", "Redux Toolkit"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.IO", "Python (subprocess)"],
    databases: ["MongoDB (Mongoose)", "PostgreSQL", "MySQL"],
    devops: ["AWS", "Vercel", "Git", "GitHub", "Postman", "Vite", "Linux"],
  },
  projects: [
    {
      id: "fit-quest",
      title: "FIT QUEST",
      subtitle: "Gamified Full-Stack Fitness Platform",
      category: "Full-Stack MERN",
      badge: "Real-time & AI Vision",
      techStack: [
        "MongoDB",
        "Express.js",
        "React 18",
        "Node.js",
        "Socket.IO",
        "Stripe",
        "MediaPipe",
        "Cloudinary",
        "Redux Toolkit",
      ],
      githubUrl: "https://github.com/sSamay4927/FitQuest",
      summary:
        "Comprehensive gamified fitness platform featuring real-time AI computer vision posture estimation, sub-80ms WebSocket leaderboards, and production-grade security.",
      highlights: [
        "Designed and built a full-stack MERN fitness platform with 10 Mongoose models (User, Workout, WorkoutLog, MealLog, Challenge, League) and 200+ REST API endpoints secured with Helmet, CORS, and express-rate-limit middleware.",
        "Implemented JWT authentication with HTTP-only refresh tokens, bcrypt password hashing, and a Nodemailer password-reset flow; integrated Cloudinary and Multer for scalable media uploads.",
        "Built a Socket.IO real-time layer across 4 namespaces with JWT-authenticated middleware, enabling live leaderboard pushes at sub-80ms latency and synced community feeds.",
        "Integrated a MediaPipe pose-analysis engine for real-time AI-powered workout form feedback and repetition counter.",
      ],
      metrics: [
        { label: "REST Endpoints", value: "200+" },
        { label: "Mongoose Models", value: "10" },
        { label: "WebSocket Latency", value: "<80ms" },
        { label: "AI Pose Engine", value: "MediaPipe" },
      ],
      architectureNotes:
        "Micro-modular REST API with layered service architecture, multi-namespace WebSocket clustering, rate limiting, and HTTP-only cookie JWT auth.",
    },
    {
      id: "graphy",
      title: "GRAPHY",
      subtitle: "Interactive Graph Algorithm Visualizer",
      category: "Algorithm Visualization",
      badge: "Sub-16ms Canvas 60 FPS",
      techStack: ["React 18", "Node.js", "Express.js", "D3.js", "HTML Canvas", "GSAP", "Framer Motion"],
      githubUrl: "https://github.com/sSamay4927/GRAPHY",
      summary:
        "High-performance custom canvas graph algorithm engine executing 9 complex graph traversals and minimum spanning tree algorithms with sub-16ms frame updates.",
      highlights: [
        "Implemented 9 graph algorithms (BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall, Prim, Kruskal, Cycle Detection, Connected Components) using a custom Min-Heap Priority Queue, achieving O((V+E) log V) complexity with 120+ recorded execution traces.",
        "Architected a high-performance Canvas renderer with a decoupled requestAnimationFrame loop and D3 force simulation, delivering sub-16ms frame updates synchronized with GSAP and Framer Motion animations.",
        "Engineered step-by-step playback controls, pseudo-code execution pointer, weight matrix visualizer, and custom graph generation topology.",
      ],
      metrics: [
        { label: "Algorithms Built", value: "9" },
        { label: "Frame Budget", value: "<16ms (60 FPS)" },
        { label: "Trace History", value: "120+ Traces" },
        { label: "Time Complexity", value: "O((V+E) log V)" },
      ],
      architectureNotes:
        "Decoupled virtual canvas loop with web worker trace calculation to prevent main UI thread blocking during intensive pathfinding runs.",
    },
    {
      id: "cryptosentinel",
      title: "CryptoSentinel",
      subtitle: "Crypto Intelligence & Backtesting Platform",
      category: "Quant & NLP",
      badge: "FinBERT NLP & Backtest",
      techStack: ["React 19", "Node.js", "Express.js", "PostgreSQL", "Python", "FinBERT", "Recharts", "node-cron"],
      githubUrl: "https://github.com/sSamay4927/MarketPulse-",
      summary:
        "Quantitative crypto analytics platform that fuses FinBERT sentiment scoring from live financial feeds with technical indicators to backtest algorithmic trading strategies.",
      highlights: [
        "Designed a PostgreSQL schema with composite B-tree indexes on (symbol, time) and (time, headline), achieving sub-200ms query response times across 1,440+ Binance OHLCV records.",
        "Integrated a FinBERT (Hugging Face Transformers) NLP pipeline via a Python subprocess for financial sentiment scoring; fused sentiment signals with PostgreSQL window-function-computed MA50 to power a rule-based trading strategy.",
        "Automated an ETL pipeline via node-cron to ingest data from Binance and Reddit APIs daily, processing 125+ articles per run into a centralized sentiment logs table.",
        "Built a backtesting engine that joins price and sentiment data to simulate trades, reporting ROI, win rate, max drawdown, and final equity visualized with Recharts interactive charts.",
      ],
      metrics: [
        { label: "Query Latency", value: "<200ms" },
        { label: "Daily ETL Articles", value: "125+/run" },
        { label: "OHLCV Records", value: "1,440+" },
        { label: "NLP Model", value: "FinBERT" },
      ],
      architectureNotes:
        "PostgreSQL window-function aggregations + Python subprocess bridge for asynchronous zero-overhead NLP sentiment inference.",
    },
  ] as ProjectData[],
  achievements: [
    {
      title: "Codeforces Specialist",
      rating: "1550 Peak Rating",
      stat: "550+ Problems Solved",
      description: "Ranked among top competitive coders globally, demonstrating mastery in graph theory, dynamic programming, and number theory.",
      badge: "Specialist",
      icon: "trophy",
      link: "https://codeforces.com/profile/shadow_striker_9",
    },
    {
      title: "LeetCode Knight",
      rating: "1858 Peak Rating",
      stat: "240+ Problems Solved",
      description: "Achieved top ~4% globally with consistent contest participation and fast problem solving.",
      badge: "Knight",
      icon: "shield",
      link: "https://leetcode.com/u/sSamay/",
    },
    {
      title: "ICPC Online Prelims 2025",
      rating: "Rank 738 Nationwide",
      stat: "3-Member Team Qualifier",
      description: "Secured a competitive rank nationwide among top collegiate programming teams in the ICPC online preliminary round.",
      badge: "Top 800",
      icon: "award",
    },
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Object-Oriented Programming",
    "Software Engineering",
  ],
};
