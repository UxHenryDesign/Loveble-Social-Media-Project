import { Search, Command } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { UserNav } from "./user-nav"

export function TopNav() {
  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="content-container h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-foreground-muted hover:text-foreground" />
          
          {/* Global Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" />
            <Input
              placeholder="Search circles, people, posts..."
              className="w-80 pl-10 pr-20 bg-surface-elevated border-border focus:border-brand-primary"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-foreground-subtle">
              <Command className="w-3 h-3" />
              <span>K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="w-4 h-4" />
          </Button>
          <UserNav />
        </div>
      </div>
    </header>
  )
}
