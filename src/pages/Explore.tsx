import { useState } from "react"
import { Search, TrendingUp, Users, Bookmark } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CircleCard } from "@/components/circle/circle-card"
import { PostCard } from "@/components/post/post-card"
import { Badge } from "@/components/ui/badge"
import { mockCircles, mockPosts } from "@/data/mock-data"

const trendingTags = [
  { name: "design-systems", count: 127 },
  { name: "web-performance", count: 98 },
  { name: "react", count: 156 },
  { name: "productivity", count: 89 },
  { name: "indie-hacking", count: 67 },
  { name: "learning", count: 143 },
]

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="content-container py-8">
      <div className="mb-8">
        <h1 className="text-headline-1 mb-4">Explore</h1>
        <p className="text-body-lg text-foreground-secondary mb-6">
          Discover new circles, people, and conversations that match your interests.
        </p>
        
        {/* Search */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-muted" />
          <Input
            placeholder="Search circles, people, posts, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 text-base bg-surface-elevated border-border focus:border-brand-primary"
          />
        </div>
      </div>

      <Tabs defaultValue="circles" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="circles" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Circles
          </TabsTrigger>
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Posts
          </TabsTrigger>
          <TabsTrigger value="collections" className="flex items-center gap-2">
            <Bookmark className="w-4 h-4" />
            Collections
          </TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
        </TabsList>

        <TabsContent value="circles" className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-headline-3">Discover Circles</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">All</Button>
                  <Button variant="ghost" size="sm">Public</Button>
                  <Button variant="ghost" size="sm">Private</Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockCircles.map((circle) => (
                  <CircleCard key={circle.id} circle={circle} />
                ))}
              </div>
            </div>
            
            <div className="lg:w-80">
              <div className="surface-card p-6">
                <h3 className="text-headline-3 mb-4">Trending Topics</h3>
                <div className="space-y-3">
                  {trendingTags.map((tag) => (
                    <div key={tag.name} className="flex items-center justify-between">
                      <Badge variant="secondary" className="hover:bg-brand-surface hover:text-brand-primary cursor-pointer">
                        #{tag.name}
                      </Badge>
                      <span className="text-sm text-foreground-muted">
                        {tag.count} posts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="posts" className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-headline-3">Trending Posts</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Today</Button>
              <Button variant="ghost" size="sm">This Week</Button>
              <Button variant="ghost" size="sm">This Month</Button>
            </div>
          </div>
          <div className="space-y-6">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="collections" className="space-y-6">
          <div className="text-center py-12">
            <Bookmark className="w-12 h-12 text-foreground-muted mx-auto mb-4" />
            <h3 className="text-headline-3 mb-2">Collections Coming Soon</h3>
            <p className="text-body text-foreground-secondary">
              Discover curated collections of insights and conversations.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="people" className="space-y-6">
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-foreground-muted mx-auto mb-4" />
            <h3 className="text-headline-3 mb-2">People Discovery Coming Soon</h3>
            <p className="text-body text-foreground-secondary">
              Find interesting people to follow and connect with.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
