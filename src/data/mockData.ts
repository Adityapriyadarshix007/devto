
export type Article = {
  id: string;
  title: string;
  coverImage: string; // Making this required instead of optional
  authorName: string;
  authorImage: string;
  publishedDate: string;
  description?: string;
  content?: string;
  tags: string[];
  readTime: string;
  reactions: number;
  comments: number;
};

export const articles: Article[] = [
  {
    id: "1",
    title: "Understanding React Hooks: A Comprehensive Guide",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3R8ZW58MHx8MHx8fDA%3D",
    authorName: "Sarah Drasner",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    publishedDate: "May 15, 2025",
    description: "React Hooks have revolutionized how we write React components. In this comprehensive guide, we'll dive deep into the most commonly used hooks...",
    content: "React Hooks have revolutionized how we write React components. In this comprehensive guide, we'll dive deep into the most commonly used hooks and explore best practices for implementing them in your applications...",
    tags: ["react", "javascript", "webdev", "beginners"],
    readTime: "8 min read",
    reactions: 120,
    comments: 25,
  },
  {
    id: "2",
    title: "Building Accessible Web Applications",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWNjZXNzaWJpbGl0eXxlbnwwfHwwfHx8MA%3D%3D",
    authorName: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    publishedDate: "May 10, 2025",
    description: "Learn how to make your web applications accessible to all users with these essential techniques and best practices.",
    tags: ["accessibility", "webdev", "html", "css"],
    readTime: "7 min read",
    reactions: 89,
    comments: 15,
  },
  {
    id: "3",
    title: "Building a Full Stack App with Next.js and Prisma",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    authorName: "Alex Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    publishedDate: "May 5, 2025",
    description: "Learn how to build a modern full-stack application using Next.js for the frontend and Prisma for database operations.",
    tags: ["nextjs", "prisma", "fullstack", "react"],
    readTime: "12 min read",
    reactions: 210,
    comments: 45,
  },
  {
    id: "4",
    title: "CSS Grid Layout: A Comprehensive Guide",
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNzcyUyMGdyaWR8ZW58MHx8MHx8fDA%3D",
    authorName: "Emily Wilson",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    publishedDate: "May 1, 2025",
    description: "Master CSS Grid Layout with this step-by-step guide. Learn how to create complex layouts with ease.",
    tags: ["css", "webdev", "frontend"],
    readTime: "8 min read",
    reactions: 156,
    comments: 28,
  },
  {
    id: "5",
    title: "10 Python Tips to Boost Your Productivity",
    coverImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    authorName: "David Kim",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    publishedDate: "Apr 28, 2025",
    description: "Improve your Python coding with these 10 productivity tips that will save you time and make your code more efficient.",
    tags: ["python", "productivity", "programming"],
    readTime: "6 min read",
    reactions: 178,
    comments: 34,
  },
];

export const popularTags = [
  "javascript",
  "webdev",
  "react", 
  "beginners", 
  "programming", 
  "css",
  "python",
  "typescript",
  "tutorial",
  "nextjs"
];

export const navigationLinks = [
  { name: "Home", href: "/", icon: "Home" },
  { name: "Reading List", href: "/reading-list", icon: "Book" },
  { name: "Tags", href: "/tags", icon: "Tag" },
  { name: "FAQ", href: "/faq", icon: "HelpCircle" },
  { name: "About", href: "/about", icon: "Info" },
  { name: "Contact", href: "/contact", icon: "Mail" },
];

export const otherLinks = [
  { name: "Code of Conduct", href: "/code-of-conduct" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Use", href: "/terms" },
];

export const listings = [
  {
    title: "Senior Full Stack Developer at Remote Company",
    category: "jobs",
    link: "#"
  },
  {
    title: "Virtual JavaScript Conference 2025",
    category: "events",
    link: "#"
  },
  {
    title: "Launch: New Developer Productivity Tool",
    category: "products",
    link: "#"
  }
];
