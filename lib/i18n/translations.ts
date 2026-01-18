export const translations = {
  vi: {
    // Navigation
    nav: {
      home: "Trang chủ",
      portfolio: "Dự án",
      blog: "Blog",
      contact: "Liên hệ",
    },
    // Hero Section
    hero: {
      badge: "Portfolio OS / 2026",
      role: "Kỹ sư phần mềm",
      greeting: "Xin chào, mình là",
      name: "Nguyễn Văn Nam",
      subtitle: "Software engineer tập trung vào Android, Web và AI.",
      bio: "Mình thiết kế và phát triển sản phẩm với kỹ thuật sạch, UX tinh tế và hệ thống ổn định. Khám phá các dự án của mình ngay trong trải nghiệm OS này.",
      exploreProjects: "Khám phá dự án",
      sourceCode: "Source Code",
      viewCV: "Xem CV",
      downloadCV: "Tải CV",
      tryIt: "Thử ngay",
      tryItDesc: "Chạm icon để mở apps và xem case studies.",
    },
    // Explore divider
    explore: "Khám phá",
    // Projects Section
    projects: {
      title: "Dự án nổi bật",
      subtitle: "Các sản phẩm tiêu biểu mình đã xây dựng — tập trung vào UX tinh gọn và hiệu năng.",
      featuredTitle: "Dự án tiêu biểu",
      featuredSubtitle: "Những dự án mình tự hào nhất — cân bằng giữa kỹ thuật vững và trải nghiệm tinh tế.",
      viewAll: "Xem toàn bộ",
      explore: "Khám phá",
    },
    // Contact Section
    contact: {
      title: "Cùng tạo sản phẩm có hồn",
      subtitle: "Mình giúp teams ship Android, web, và AI products với trải nghiệm tinh gọn. Biến ý tưởng thành sản phẩm đáng tin cậy, có tác động thực.",
      cta: "Kết nối",
      viewCV: "Xem CV",
      downloadCV: "Tải CV",
    },
    // Blog
    blog: {
      title: "Blog & Insights",
      subtitle: "Suy nghĩ, hướng dẫn và insights về Android, AI và System Programming.",
      readMore: "Đọc bài viết",
      backToHome: "Về trang chủ",
      backToBlog: "Quay lại Blog",
    },
    // Footer
    footer: {
      craftedWith: "Tạo nên với",
      copyright: "© {year} Nam Nguyen.",
    },
    // Theme
    theme: {
      toggle: "Chuyển đổi giao diện",
      light: "Sáng",
      dark: "Tối",
    },
    // Language
    language: {
      toggle: "Chuyển ngôn ngữ",
      vi: "Tiếng Việt",
      en: "English",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      badge: "Portfolio OS / 2026",
      role: "Software Engineer",
      greeting: "Hi, I'm",
      name: "Nam Nguyen",
      subtitle: "Software engineer focused on Android, Web, and AI.",
      bio: "I design and ship products with clean engineering, thoughtful UX, and reliable systems. Explore my projects right within this OS experience.",
      exploreProjects: "Explore Projects",
      sourceCode: "Source Code",
      viewCV: "View CV",
      downloadCV: "Download CV",
      tryIt: "Try it",
      tryItDesc: "Tap icons to open apps and view case studies.",
    },
    // Explore divider
    explore: "Explore",
    // Projects Section
    projects: {
      title: "Selected Projects",
      subtitle: "A curated mix of tools and apps built for real-world impact — focusing on clean UX and performance.",
      featuredTitle: "Featured Projects",
      featuredSubtitle: "Projects I'm most proud of — balancing solid engineering with refined experience.",
      viewAll: "View All",
      explore: "Explore",
    },
    // Contact Section
    contact: {
      title: "Let's build with intent",
      subtitle: "I help teams ship Android, web, and AI products with lean, refined experiences. Let's turn ideas into reliable, high-impact builds.",
      cta: "Contact",
      viewCV: "View CV",
      downloadCV: "Download CV",
    },
    // Blog
    blog: {
      title: "Blog & Insights",
      subtitle: "Thoughts, tutorials, and insights on Android, AI, and System Programming.",
      readMore: "Read Article",
      backToHome: "Back to Home",
      backToBlog: "Back to Blog",
    },
    // Footer
    footer: {
      craftedWith: "Crafted with",
      copyright: "© {year} Nam Nguyen.",
    },
    // Theme
    theme: {
      toggle: "Toggle theme",
      light: "Light",
      dark: "Dark",
    },
    // Language
    language: {
      toggle: "Switch language",
      vi: "Tiếng Việt",
      en: "English",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.vi;
