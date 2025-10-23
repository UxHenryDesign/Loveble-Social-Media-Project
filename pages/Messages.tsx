import { MessageCircle, Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Messages() {
  return (
    <div className="content-container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-headline-1 mb-2">Messages</h1>
          <p className="text-body-lg text-foreground-secondary">
            Private conversations with other members.
          </p>
        </div>
        <Button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary">
          <Plus className="w-4 h-4 mr-2" />
          New Message
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-lg mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" />
        <Input
          placeholder="Search conversations..."
          className="pl-10 bg-surface-elevated border-border focus:border-brand-primary"
        />
      </div>

      {/* Empty State */}
      <div className="text-center py-20">
        <MessageCircle className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
        <h3 className="text-headline-3 mb-2">No messages yet</h3>
        <p className="text-body text-foreground-secondary mb-6 max-w-md mx-auto">
          Start meaningful conversations with other members. Messages are private and secure.
        </p>
        <div className="space-y-3">
          <Button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary">
            Start a Conversation
          </Button>
          <div>
            <Button variant="ghost" className="text-foreground-secondary hover:text-foreground">
              Learn about messaging
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
