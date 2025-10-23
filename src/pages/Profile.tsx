import { useState } from "react"
import { useParams } from "react-router-dom"
import { MessageCircle, MapPin, Link, Calendar, MoreHorizontal, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PostCard } from "@/components/post/post-card"
import { mockUsers, mockPosts, mockCircles } from "@/data/mock-data"

export default function Profile() {
  const { handle } = useParams()
  
  // Mock user data - in real app this would come from API
  const user = mockUsers[0] // Using first mock user for demo
  const userPosts = mockPosts.filter(post => post.author.handle === user.handle)
  const userCircles = mockCircles.filter(circle => user.circles.includes(circle.slug))

  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className="content-container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <Card className="surface-card p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="w-24 h-24 ring-4 ring-border">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-brand-surface text-brand-primary text-2xl font-semibold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-headline-2 mb-1">{user.name}</h1>
                  <p className="text-lg text-foreground-muted">@{user.handle}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleFollow}
                    className={
                      isFollowing
                        ? "border-brand-primary text-brand-primary hover:bg-brand-surface"
                        : "bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary"
                    }
                    variant={isFollowing ? "outline" : "default"}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-surface-elevated border-border">
                      <DropdownMenuItem>Share Profile</DropdownMenuItem>
                      <DropdownMenuItem>Copy Link</DropdownMenuItem>
                      <DropdownMenuItem className="text-danger">Report User</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <p className="text-body text-foreground-secondary mb-4">{user.bio}</p>
              
              <div className="flex items-center gap-6 text-sm text-foreground-muted mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  San Francisco
                </div>
                <div className="flex items-center gap-1">
                  <Link className="w-4 h-4" />
                  <a href="#" className="hover:text-brand-primary">sarahchen.design</a>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined March 2024
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="font-semibold text-foreground">{user.following}</span>
                  <span className="text-foreground-muted ml-1">Following</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">{user.followers}</span>
                  <span className="text-foreground-muted ml-1">Followers</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">{userCircles.length}</span>
                  <span className="text-foreground-muted ml-1">Circles</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Badges */}
          {user.badges && user.badges.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-sm font-medium text-foreground-secondary mb-3">Achievements</h3>
              <div className="flex flex-wrap gap-2">
                {user.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="gap-2">
                    <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    {badge.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Profile Content */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="posts">Posts ({userPosts.length})</TabsTrigger>
            <TabsTrigger value="circles">Circles ({userCircles.length})</TabsTrigger>
            <TabsTrigger value="collections">Collections (2)</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            {userPosts.length > 0 ? (
              userPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-surface-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-foreground-muted" />
                </div>
                <h3 className="text-headline-3 mb-2">No posts yet</h3>
                <p className="text-body text-foreground-secondary">
                  {user.name} hasn't shared any posts yet.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="circles" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userCircles.map((circle) => (
                <Card key={circle.id} className="surface-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{circle.name}</h3>
                      <p className="text-sm text-foreground-muted">
                        {circle.memberCount} members
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground-secondary mb-4 line-clamp-2">
                    {circle.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {circle.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="collections" className="space-y-6">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-surface-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-foreground-muted" />
              </div>
              <h3 className="text-headline-3 mb-2">No public collections</h3>
              <p className="text-body text-foreground-secondary">
                {user.name} hasn't shared any collections yet.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
