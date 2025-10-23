import { Bell, Settings, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Notifications() {
  return (
    <div className="content-container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-headline-1 mb-2">Notifications</h1>
          <p className="text-body-lg text-foreground-secondary">
            Stay updated with mentions, replies, and circle activity.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="mentions">Mentions</TabsTrigger>
          <TabsTrigger value="circles">Circles</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Empty State */}
          <div className="text-center py-20">
            <Bell className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
            <h3 className="text-headline-3 mb-2">All caught up!</h3>
            <p className="text-body text-foreground-secondary mb-6 max-w-md mx-auto">
              You're all up to date. New notifications will appear here when you have activity.
            </p>
            <Button variant="outline">
              Notification Settings
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="mentions" className="space-y-6">
          <div className="text-center py-20">
            <Bell className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
            <h3 className="text-headline-3 mb-2">No mentions yet</h3>
            <p className="text-body text-foreground-secondary">
              When someone mentions you in a post or comment, you'll see it here.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="circles" className="space-y-6">
          <div className="text-center py-20">
            <Bell className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
            <h3 className="text-headline-3 mb-2">No circle activity</h3>
            <p className="text-body text-foreground-secondary">
              Updates from your circles will appear here.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <div className="text-center py-20">
            <Bell className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
            <h3 className="text-headline-3 mb-2">No message notifications</h3>
            <p className="text-body text-foreground-secondary">
              New message notifications will appear here.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
