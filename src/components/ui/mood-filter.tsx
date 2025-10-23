import { useState } from "react"
import { Button } from "@/components/ui/button"

const moods = [
  { id: "all", label: "All", emoji: "✨" },
  { id: "build", label: "Build", emoji: "🔨" },
  { id: "learn", label: "Learn", emoji: "📚" },
  { id: "reflect", label: "Reflect", emoji: "🤔" },
  { id: "celebrate", label: "Celebrate", emoji: "🎉" },
]

interface MoodFilterProps {
  selectedMood: string
  onMoodChange: (mood: string) => void
  className?: string
}

export function MoodFilter({ selectedMood, onMoodChange, className = "" }: MoodFilterProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {moods.map((mood) => (
        <Button
          key={mood.id}
          variant={selectedMood === mood.id ? "default" : "outline"}
          size="sm"
          onClick={() => onMoodChange(mood.id)}
          className={`gap-2 transition-all ${
            selectedMood === mood.id 
              ? "bg-brand-primary text-brand-on-primary shadow-md" 
              : "hover:bg-brand-surface hover:text-brand-primary border-border"
          }`}
        >
          <span className="text-sm">{mood.emoji}</span>
          <span className="hidden sm:inline">{mood.label}</span>
        </Button>
      ))}
    </div>
  )
}
