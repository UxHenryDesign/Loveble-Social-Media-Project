import { useState } from "react"
import { Send, Image, Smile, AtSign, Hash } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const visibilityOptions = [
  { value: "public", label: "Public", description: "Anyone can see this post" },
  { value: "circle", label: "Circle only", description: "Only circle members can see" },
  { value: "private", label: "Private", description: "Only you can see this draft" },
]

const moodFilters = [
  { id: "build", label: "Build", emoji: "🔨" },
  { id: "learn", label: "Learn", emoji: "📚" },
  { id: "reflect", label: "Reflect", emoji: "🤔" },
  { id: "celebrate", label: "Celebrate", emoji: "🎉" },
]

export function InlineComposer() {
  const [content, setContent] = useState("")
  const [visibility, setVisibility] = useState("public")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = () => {
    if (!content.trim()) return
    
    // TODO: Submit the post
    console.log("Submitting post:", { content, visibility, mood: selectedMood })
    
    // Reset form
    setContent("")
    setSelectedMood(null)
    setIsExpanded(false)
  }

  const handleFocus = () => {
    setIsExpanded(true)
  }

  return (
    <Card className="surface-card p-6 mb-6">
      <div className="flex gap-4">
        <Avatar className="w-10 h-10 ring-2 ring-border">
          <AvatarImage src="/api/placeholder/40/40" alt="Your avatar" />
          <AvatarFallback className="bg-brand-surface text-brand-primary font-medium">
            YU
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <Textarea
            placeholder="Share an insight, a question, or a spark..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={handleFocus}
            className="min-h-[80px] resize-none border-none bg-transparent p-0 text-base placeholder:text-foreground-muted focus-visible:ring-0"
          />
          
          {isExpanded && (
            <div className="mt-4 space-y-4 animate-fade-in">
              {/* Mood Filters */}
              <div>
                <p className="text-sm text-foreground-muted mb-2">What's your mood?</p>
                <div className="flex gap-2">
                  {moodFilters.map((mood) => (
                    <Button
                      key={mood.id}
                      variant={selectedMood === mood.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedMood(selectedMood === mood.id ? null : mood.id)}
                      className={`gap-2 ${
                        selectedMood === mood.id 
                          ? "bg-brand-primary text-brand-on-primary" 
                          : "hover:bg-brand-surface hover:text-brand-primary"
                      }`}
                    >
                      <span>{mood.emoji}</span>
                      {mood.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground-muted hover:text-foreground">
                    <Image className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground-muted hover:text-foreground">
                    <Smile className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground-muted hover:text-foreground">
                    <AtSign className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground-muted hover:text-foreground">
                    <Hash className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-3">
                  <Select value={visibility} onValueChange={setVisibility}>
                    <SelectTrigger className="w-32 h-8 bg-surface border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-surface-elevated border-border">
                      {visibilityOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Button
                    onClick={handleSubmit}
                    disabled={!content.trim()}
                    className="bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary disabled:opacity-50"
                    size="sm"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Post
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
