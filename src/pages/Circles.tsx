import { useState } from "react"
import { Plus, Search, Users, Lock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CircleCard } from "@/components/circle/circle-card"
import { mockCircles } from "@/data/mock-data"

export default function Circles() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const joinedCircles = mockCircles.filter(circle => circle.isJoined)
  const availableCircles = mockCircles.filter(circle => !circle.isJoined)

  return (
    <div className="content-container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-headline-1 mb-2">My Circles</h1>
          <p className="text-body-lg text-foreground-secondary">
            Manage your circles and discover new communities.
          </p>
        </div>
        <Button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary">
          <Plus className="w-4 h-4 mr-2" />
          Create Circle
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-lg mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" />
        <Input
          placeholder="Search your circles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-surface-elevated border-border focus:border-brand-primary"
        />
      </div>

      <Tabs defaultValue="joined" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mb-8">
          <TabsTrigger value="joined" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Joined ({joinedCircles.length})
          </TabsTrigger>
          <TabsTrigger value="discover" className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            Discover
          </TabsTrigger>
        </TabsList>

        <TabsContent value="joined" className="space-y-6">
          {joinedCircles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {joinedCircles.map((circle) => (
                  <CircleCard key={circle.id} circle={circle} />
                ))}
              </div>
              
              {/* Circle Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="surface-card p-6 text-center">
                  <div className="text-2xl font-bold text-brand-primary mb-2">
                    {joinedCircles.length}
                  </div>
                  <div className="text-sm text-foreground-muted">Circles Joined</div>
                </div>
                <div className="surface-card p-6 text-center">
                  <div className="text-2xl font-bold text-success mb-2">
                    47
                  </div>
                  <div className="text-sm text-foreground-muted">Posts This Month</div>
                </div>
                <div className="surface-card p-6 text-center">
                  <div className="text-2xl font-bold text-info mb-2">
                    156
                  </div>
                  <div className="text-sm text-foreground-muted">Total Interactions</div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
              <h3 className="text-headline-3 mb-2">No circles yet</h3>
              <p className="text-body text-foreground-secondary mb-6">
                Join your first circle to start engaging with like-minded people.
              </p>
              <Button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary">
                Discover Circles
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="discover" className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-headline-3">Suggested for You</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Globe className="w-3 h-3" />
                Public
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Lock className="w-3 h-3" />
                Private
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCircles.map((circle) => (
              <CircleCard key={circle.id} circle={circle} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
