import { useState } from "react"
import { ArrowLeft, Save, Send, Image, Link, Code, Quote } from "lucide-react"
import { Link as RouterLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const postTypes = [
  { value: "short", label: "Quick Thought", description: "Share a brief insight or question" },
  { value: "long", label: "Long Form", description: "Write a detailed post or essay" },
  { value: "link", label: "Link Share", description: "Share and discuss a link" },
]

const visibilityOptions = [
  { value: "public", label: "Public", description: "Anyone can see this post" },
  { value: "circle", label: "Circle only", description: "Only circle members can see" },
  { value: "private", label: "Draft", description: "Save as private draft" },
]

const moodFilters = [
  { id: "build", label: "Build", emoji: "🔨" },
  { id: "learn", label: "Learn", emoji: "📚" },
  { id: "reflect", label: "Reflect", emoji: "🤔" },
  { id: "celebrate", label: "Celebrate", emoji: "🎉" },
]

export default function Create() {
  const [postType, setPostType] = useState("short")
  const [visibility, setVisibility] = useState("public")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handlePublish = () => {
    // TODO: Implement post creation
    console.log("Publishing post:", { postType, visibility, selectedMood, title, content })
  }

  const handleSaveDraft = () => {
    // TODO: Implement draft saving
    console.log("Saving draft:", { postType, visibility, selectedMood, title, content })
  }

  return (
    <div className="content-container py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <RouterLink to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </RouterLink>
        <div>
          <h1 className="text-headline-1">Create</h1>
          <p className="text-body text-foreground-secondary">
            Share your thoughts, insights, or questions with the community.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Editor */}
          <div className="flex-1">
            <Card className="surface-card p-8">
              {/* Post Type Selection */}
              <div className="mb-8">
                <label className="text-sm font-medium text-foreground-secondary mb-3 block">
                  What type of post is this?
                </label>
                <Select value={postType} onValueChange={setPostType}>
                  <SelectTrigger className="w-full bg-surface border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-surface-elevated border-border">
                    {postTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div>
                          <div className="font-medium">{type.label}</div>
                          <div className="text-xs text-foreground-muted">{type.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Title (for long form) */}
              {postType === "long" && (
                <div className="mb-6">
                  <Input
                    placeholder="Enter a compelling title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-2xl font-semibold border-none bg-transparent p-0 h-auto placeholder:text-foreground-muted focus-visible:ring-0"
                  />
                </div>
              )}

              {/* Content Editor */}
              <div className="mb-8">
                <Textarea
                  placeholder={
                    postType === "short" 
                      ? "Share an insight, a question, or a spark..." 
                      : "Start writing your post..."
                  }
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className={`resize-none border-none bg-transparent p-0 placeholder:text-foreground-muted focus-visible:ring-0 ${
                    postType === "long" ? "min-h-[400px]" : "min-h-[200px]"
                  }`}
                />
              </div>

              {/* Formatting Tools */}
              <div className="flex items-center gap-2 mb-8">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Image className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Link className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Code className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Quote className="w-4 h-4" />
                </Button>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    onClick={handleSaveDraft}
                    variant="outline"
                    className="gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Draft
                  </Button>
                </div>
                <Button
                  onClick={handlePublish}
                  disabled={!content.trim()}
                  className="bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary gap-2"
                >
                  <Send className="w-4 h-4" />
                  Publish
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Mood Selection */}
            <Card className="surface-card p-6">
              <h3 className="text-headline-3 mb-4">What's your mood?</h3>
              <div className="grid grid-cols-2 gap-2">
                {moodFilters.map((mood) => (
                  <Button
                    key={mood.id}
                    variant={selectedMood === mood.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedMood(selectedMood === mood.id ? null : mood.id)}
                    className={`gap-2 justify-start ${
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
            </Card>

            {/* Visibility Settings */}
            <Card className="surface-card p-6">
              <h3 className="text-headline-3 mb-4">Who can see this?</h3>
              <Select value={visibility} onValueChange={setVisibility}>
                <SelectTrigger className="w-full bg-surface border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-surface-elevated border-border">
                  {visibilityOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-xs text-foreground-muted">{option.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Card>

            {/* Writing Tips */}
            <Card className="surface-card p-6">
              <h3 className="text-headline-3 mb-4">Writing Tips</h3>
              <div className="space-y-3 text-sm text-foreground-secondary">
                <div>
                  <strong>Be authentic:</strong> Share your genuine thoughts and experiences.
                </div>
                <div>
                  <strong>Add context:</strong> Help readers understand your perspective.
                </div>
                <div>
                  <strong>Ask questions:</strong> Encourage meaningful dialogue.
                </div>
                <div>
                  <strong>Tag thoughtfully:</strong> Use relevant topics to help others discover your post.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
