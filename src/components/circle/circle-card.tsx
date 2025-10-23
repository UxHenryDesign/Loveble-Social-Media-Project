import { Users, Lock, Globe, Calendar, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CircleCardProps {
  circle: {
    id: string
    name: string
    slug: string
    description: string
    cover?: string
    memberCount: number
    isPrivate: boolean
    isJoined: boolean
    isPending?: boolean
    tags: string[]
    activity: {
      postsThisWeek: number
      trend: "up" | "down" | "stable"
    }
    recentMembers: {
      name: string
      avatar?: string
    }[]
  }
}

export function CircleCard({ circle }: CircleCardProps) {
  const handleJoinClick = () => {
    // TODO: Implement join/leave logic
    console.log("Join/leave circle:", circle.id)
  }

  const getJoinButtonText = () => {
    if (circle.isJoined) return "Joined"
    if (circle.isPending) return "Pending"
    return circle.isPrivate ? "Request to Join" : "Join"
  }

  const getJoinButtonVariant = () => {
    if (circle.isJoined) return "outline"
    return "default"
  }

  return (
    <Card className="surface-card p-6 interactive-scale">
      {/* Cover Image */}
      {circle.cover && (
        <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-surface-muted">
          <img
            src={circle.cover}
            alt={`${circle.name} cover`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Link to={`/circles/${circle.slug}`}>
              <h3 className="text-headline-3 font-semibold text-foreground hover:text-brand-primary transition-colors">
                {circle.name}
              </h3>
            </Link>
            {circle.isPrivate ? (
              <Lock className="w-4 h-4 text-foreground-muted" />
            ) : (
              <Globe className="w-4 h-4 text-foreground-muted" />
            )}
          </div>
          
          <div className="flex items-center gap-3 text-sm text-foreground-muted mb-3">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{circle.memberCount.toLocaleString()} members</span>
            </div>
            
            <div className="flex items-center gap-1">
              <TrendingUp className={`w-4 h-4 ${
                circle.activity.trend === "up" ? "text-success" : 
                circle.activity.trend === "down" ? "text-danger" : 
                "text-foreground-muted"
              }`} />
              <span>{circle.activity.postsThisWeek} posts this week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-body-sm text-foreground-secondary mb-4 line-clamp-2">
        {circle.description}
      </p>

      {/* Tags */}
      {circle.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {circle.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {circle.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{circle.tags.length - 3} more
            </Badge>
          )}
        </div>
      )}

      {/* Recent Members */}
      {circle.recentMembers.length > 0 && (
        <div className="flex items-center gap-3 mb-4">
          <div className="flex -space-x-2">
            {circle.recentMembers.slice(0, 4).map((member, index) => (
              <Avatar key={index} className="w-6 h-6 border-2 border-background">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="text-xs bg-brand-surface text-brand-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-xs text-foreground-muted">
            Recent activity from {circle.recentMembers[0].name}
            {circle.recentMembers.length > 1 && ` and ${circle.recentMembers.length - 1} others`}
          </span>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Link to={`/circles/${circle.slug}`}>
          <Button variant="ghost" size="sm" className="text-foreground-secondary hover:text-foreground">
            View Circle
          </Button>
        </Link>
        
        <Button
          onClick={handleJoinClick}
          variant={getJoinButtonVariant()}
          size="sm"
          disabled={circle.isPending}
          className={circle.isJoined ? "" : "bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary"}
        >
          {getJoinButtonText()}
        </Button>
      </div>
    </Card>
  )
}
