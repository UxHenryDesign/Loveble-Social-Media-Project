// Mock data for Lumen Circles

export const mockUsers = [
  {
    id: "1",
    name: "Sarah Chen",
    handle: "sarahchen",
    avatar: "/api/placeholder/40/40",
    bio: "Design systems advocate • Building the future of digital products",
    followers: 1240,
    following: 380,
    circles: ["design-systems", "indie-research", "visual-essays"],
    badges: ["signal-giver", "first-insight"]
  },
  {
    id: "2", 
    name: "Marcus Rodriguez",
    handle: "marcusr",
    avatar: "/api/placeholder/40/40",
    bio: "Performance engineer • Making the web faster, one optimization at a time",
    followers: 890,
    following: 250,
    circles: ["web-performance", "calm-productivity"],
    badges: ["performance-guru"]
  },
  {
    id: "3",
    name: "Elena Kowalski",
    handle: "elenadev",
    avatar: "/api/placeholder/40/40", 
    bio: "Full-stack developer • Learning in public about modern web technologies",
    followers: 450,
    following: 180,
    circles: ["learning-out-loud", "web-performance"],
    badges: ["learning-champion"]
  },
]

export const mockCircles = [
  {
    id: "1",
    name: "Design Systems",
    slug: "design-systems",
    description: "A thoughtful community exploring the craft of design systems, component libraries, and design tokens.",
    cover: "/api/placeholder/400/200",
    memberCount: 1200,
    isPrivate: false,
    isJoined: true,
    tags: ["design", "systems", "components", "tokens"],
    activity: {
      postsThisWeek: 23,
      trend: "up" as const
    },
    recentMembers: [
      { name: "Sarah Chen", avatar: "/api/placeholder/32/32" },
      { name: "Alex Kim", avatar: "/api/placeholder/32/32" },
      { name: "Maria Santos", avatar: "/api/placeholder/32/32" },
    ]
  },
  {
    id: "2",
    name: "Calm Productivity", 
    slug: "calm-productivity",
    description: "Sustainable approaches to deep work, mindful technology use, and intentional living.",
    cover: "/api/placeholder/400/200",
    memberCount: 850,
    isPrivate: false,
    isJoined: false,
    tags: ["productivity", "mindfulness", "focus", "wellbeing"],
    activity: {
      postsThisWeek: 18,
      trend: "stable" as const
    },
    recentMembers: [
      { name: "Marcus Rodriguez", avatar: "/api/placeholder/32/32" },
      { name: "Lisa Wang", avatar: "/api/placeholder/32/32" },
    ]
  },
  {
    id: "3",
    name: "Web Performance",
    slug: "web-performance", 
    description: "Deep dives into web performance optimization, core web vitals, and user experience metrics.",
    memberCount: 680,
    isPrivate: false,
    isJoined: true,
    tags: ["performance", "web", "optimization", "metrics"],
    activity: {
      postsThisWeek: 31,
      trend: "up" as const
    },
    recentMembers: [
      { name: "Marcus Rodriguez", avatar: "/api/placeholder/32/32" },
      { name: "Elena Kowalski", avatar: "/api/placeholder/32/32" },
    ]
  },
  {
    id: "4",
    name: "Indie Research",
    slug: "indie-research",
    description: "Independent researchers sharing findings, methodologies, and insights across disciplines.",
    memberCount: 320,
    isPrivate: true,
    isJoined: false,
    isPending: true,
    tags: ["research", "methodology", "insights", "academia"],
    activity: {
      postsThisWeek: 12,
      trend: "stable" as const
    },
    recentMembers: [
      { name: "Dr. Jane Smith", avatar: "/api/placeholder/32/32" },
      { name: "Research Bot", avatar: "/api/placeholder/32/32" },
    ]
  },
]

export const mockPosts = [
  {
    id: "1",
    author: mockUsers[0],
    content: "Been thinking about the role of design tokens in maintaining consistency across platforms. The key insight? Tokens aren't just about visual consistency—they're about decision consistency.\n\nWhen we encode our design decisions as tokens, we're creating a shared language that bridges the gap between design intent and implementation reality.",
    timestamp: "2 hours ago",
    circle: mockCircles[0],
    stats: {
      likes: 24,
      comments: 8,
      collections: 12
    },
    isLiked: false,
    isSaved: true,
    type: "short" as const,
  },
  {
    id: "2", 
    author: mockUsers[1],
    content: "Just shipped a 40% reduction in Time to Interactive on our main dashboard. The secret? Aggressive code splitting and strategic preloading.\n\nHere's what moved the needle:\n• Split chunks by route AND feature\n• Preload critical resources during idle time\n• Defer non-critical JavaScript execution\n• Optimize font loading with font-display: swap\n\nPerformance isn't just about metrics—it's about respecting your users' time and attention.",
    timestamp: "4 hours ago", 
    circle: mockCircles[2],
    stats: {
      likes: 31,
      comments: 15,
      collections: 8
    },
    isLiked: true,
    isSaved: false,
    type: "short" as const,
  },
  {
    id: "3",
    author: mockUsers[2],
    content: "Learning React Server Components feels like learning React all over again. The mental model shift from 'everything is client-side' to 'default to server, opt into client' is profound.\n\nWhat's clicking for me: RSCs aren't just about performance. They're about rethinking the boundary between server and client in a way that feels natural to the component model we already know and love.",
    timestamp: "6 hours ago",
    circle: mockCircles[4],
    stats: {
      likes: 18,
      comments: 22,
      collections: 6
    },
    isLiked: false,
    isSaved: false,
    type: "short" as const,
  },
]

export const mockCollections = [
  {
    id: "1",
    title: "Performance Playbook Week 1",
    description: "Essential reads and insights from the web performance community",
    author: mockUsers[1],
    itemCount: 12,
    isPublic: true,
    cover: "/api/placeholder/300/200",
    tags: ["performance", "web", "optimization"]
  },
  {
    id: "2",
    title: "Best of Dialog-First Comments",
    description: "Thoughtful responses that became conversations worth having",
    author: mockUsers[0], 
    itemCount: 8,
    isPublic: true,
    cover: "/api/placeholder/300/200",
    tags: ["discussion", "dialogue", "community"]
  }
]
