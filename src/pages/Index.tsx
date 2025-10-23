import { useState } from "react"
import { InlineComposer } from "@/components/composer/inline-composer"
import { PostCard } from "@/components/post/post-card"
import { MoodFilter } from "@/components/ui/mood-filter"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Sparkles } from "lucide-react"
import { mockPosts, mockCircles } from "@/data/mock-data"

const Index = () => {
  const [selectedMood, setSelectedMood] = useState("all")

  return (
    <div className="content-container py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Feed */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-8">
            <h1 className="text-headline-1 mb-2">Home</h1>
            <p className="text-body-lg text-foreground-secondary">
              Welcome back to your personalized feed of insights and conversations.
            </p>
          </div>

          {/* Composer */}
          <InlineComposer />

          {/* Mood Filter */}
          <div className="mb-6">
            <MoodFilter 
              selectedMood={selectedMood} 
              onMoodChange={setSelectedMood}
            />
          </div>

          {/* Feed */}
          <div className="space-y-6">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-80 space-y-6">
          {/* Trending Now */}
          <Card className="surface-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-brand-primary" />
              <h3 className="text-headline-3">Trending Now</h3>
            </div>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium text-foreground">Design Systems</div>
                <div className="text-foreground-muted">127 posts today</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-foreground">Web Performance</div>
                <div className="text-foreground-muted">98 posts today</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-foreground">Learning in Public</div>
                <div className="text-foreground-muted">143 posts today</div>
              </div>
            </div>
          </Card>

          {/* Suggested Circles */}
          <Card className="surface-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-brand-primary" />
              <h3 className="text-headline-3">Suggested Circles</h3>
            </div>
            <div className="space-y-4">
              {mockCircles.slice(0, 2).map((circle) => (
                <div key={circle.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                  <div className="font-medium text-foreground mb-1">{circle.name}</div>
                  <div className="text-sm text-foreground-secondary mb-2 line-clamp-2">
                    {circle.description}
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Join Circle
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Welcome */}
          <Card className="surface-card p-6 bg-brand-surface border-brand-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-brand-primary" />
              <h3 className="text-headline-3 text-brand-primary">Welcome to Lumen</h3>
            </div>
            <p className="text-sm text-foreground-secondary mb-4">
              You're part of a thoughtful community focused on meaningful conversations and shared learning.
            </p>
            <Button size="sm" className="w-full bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary">
              Explore Circles
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Index
