import { useState } from "react"
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface PostCardProps {
  post: {
    id: string
    author: {
      name: string
      handle: string
      avatar?: string
    }
    content: string
    timestamp: string
    circle?: {
      name: string
      slug: string
    }
    stats: {
      likes: number
      comments: number
      collections: number
    }
    isLiked?: boolean
    isSaved?: boolean
    type: "short" | "long" | "image" | "link"
    media?: {
      type: "image" | "video"
      url: string
      alt?: string
    }[]
  }
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false)
  const [isSaved, setIsSaved] = useState(post.isSaved || false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  return (
    <Card className="surface-card p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.author.handle}`}>
            <Avatar className="w-10 h-10 ring-2 ring-border hover:ring-brand-primary transition-all">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback className="bg-brand-surface text-brand-primary font-medium">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Link 
                to={`/profile/${post.author.handle}`}
                className="font-medium text-foreground hover:text-brand-primary transition-colors"
              >
                {post.author.name}
              </Link>
              <span className="text-foreground-muted">@{post.author.handle}</span>
              {post.circle && (
                <>
                  <span className="text-foreground-subtle">•</span>
                  <Link to={`/circles/${post.circle.slug}`}>
                    <Badge variant="secondary" className="gap-1 hover:bg-brand-surface hover:text-brand-primary">
                      <Users className="w-3 h-3" />
                      {post.circle.name}
                    </Badge>
                  </Link>
                </>
              )}
            </div>
            <p className="text-sm text-foreground-muted">{post.timestamp}</p>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground-muted hover:text-foreground">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-surface-elevated border-border">
            <DropdownMenuItem className="text-foreground-secondary hover:text-foreground">
              Share post
            </DropdownMenuItem>
            <DropdownMenuItem className="text-foreground-secondary hover:text-foreground">
              Copy link
            </DropdownMenuItem>
            <DropdownMenuItem className="text-danger hover:bg-danger-surface hover:text-danger">
              Report post
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      <div className="mb-4">
        <div className="text-body leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
        
        {/* Media */}
        {post.media && post.media.length > 0 && (
          <div className="mt-4 rounded-xl overflow-hidden border border-border">
            {post.media.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt={item.alt || `Media ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`gap-2 transition-colors ${
              isLiked 
                ? "text-danger hover:text-danger" 
                : "text-foreground-muted hover:text-foreground"
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
            <span className="text-sm font-medium">{post.stats.likes}</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-foreground-muted hover:text-foreground"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">{post.stats.comments}</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-foreground-muted hover:text-foreground"
          >
            <Share className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-foreground-muted">
            {post.stats.collections} collections
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSave}
            className={`h-8 w-8 ${
              isSaved 
                ? "text-brand-primary hover:text-brand-primary" 
                : "text-foreground-muted hover:text-foreground"
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
          </Button>
        </div>
      </div>
    </Card>
  )
}
