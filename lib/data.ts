export const PROFILE = {
  name: "Nguyen Van Nam",
  handle: "@Nam0101",
  role: "Software Engineer | Vibe Coder",
  bio: "Student at Hanoi University of Science & Technology (HUST). GitHub Developer Program Member. Passionate about Android, System Programming (C/C++), and AI Agents.",
  location: "Ha Noi, Viet Nam",
  email: "nam.nv205106@gmail.com",
  github: "https://github.com/Nam0101",
  linkedin: "https://www.linkedin.com/in/nam-nguy%E1%BB%85n-v%C4%83n-50514621a/",
  facebook: "https://www.facebook.com/nam.nv5106",
  cv: "/Nguyen_Van_Nam_CV.pdf",
};

export const PROJECTS = [
  {
    id: "android-mcp-toolkit",
    title: "Android MCP Toolkit",
    type: "Tooling",
    tagline: "Figma-to-XML + Gradle insights",
    description: "Accelerated Android asset workflows with MCP tools for Figma conversion, Gradle analysis, and automated pipelines.",
    tags: ["TypeScript", "MCP", "Android", "DX"],
    link: "https://github.com/Nam0101/android-mcp-toolkit",
  },
  {
    id: "check-adobe-account",
    title: "Check Adobe Account",
    type: "Automation",
    tagline: "Account health at a glance",
    description: "Built a lightweight automation suite to validate Adobe account states and surface key status changes quickly.",
    tags: ["Python", "Automation", "CLI"],
    link: "https://github.com/Nam0101/check-adobe-account",
  },
  {
    id: "chess-socket-server",
    title: "Chess Socket Server",
    type: "Systems",
    tagline: "Real-time multiplayer sockets",
    description: "Implemented a multiplayer chess server with custom socket protocol, matchmaking, and reliable move sync.",
    tags: ["C", "Sockets", "Networking"],
    link: "https://github.com/Nam0101/ChessSocketServer",
  },
  {
    id: "old-car-price-prediction",
    title: "Car Price Prediction",
    type: "Data Science",
    tagline: "Practical price modeling",
    description: "Trained and evaluated ML models for used car pricing, with feature engineering and visual diagnostics.",
    tags: ["Jupyter", "ML", "Python"],
    link: "https://github.com/Nam0101/Old-car-price-prediction",
  },
  {
    id: "data-structures-algorithms",
    title: "DSA Implementations",
    type: "Education",
    tagline: "C++ core algorithms",
    description: "Curated C++ implementations of classic data structures and algorithms with clean, reusable templates.",
    tags: ["C++", "Algorithms", "Education"],
    link: "https://github.com/Nam0101/data-structures-and-algorithms",
  },
  {
    id: "portfolio",
    title: "Design Portfolio",
    type: "Web Experience",
    tagline: "Aurora glass UI system",
    description: "Crafted a motion-rich portfolio with Next.js + Tailwind, featuring an interactive OS simulator.",
    tags: ["Next.js", "Tailwind", "React"],
    link: "https://github.com/Nam0101/portfolio",
  }
];

export const BLOG_POSTS = [
  {
    slug: "building-android-mcp-server",
    title: "Building an Android MCP Server",
    excerpt: "How I created a custom Model Context Protocol server to automate Android assets generation.",
    date: "2025-12-25",
    content: "Content relating to building the MCP server...",
    tags: ["MCP", "Android", "Engineering"]
  },
  {
    slug: "network-programming-c",
    title: "Deep Dive into C Sockets",
    excerpt: "Understanding the fundamentals of network programming through building a Chess Server.",
    date: "2025-11-10",
    content: "Sockets are the fundamental building blocks...",
    tags: ["C", "Networking", "Systems"]
  }
];
