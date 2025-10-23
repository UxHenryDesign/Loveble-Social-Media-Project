import { Bookmark, Plus, Search, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Collections() {
  return (
    <div className="content-container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-headline-1 mb-2">Collections</h1>
          <p className="text-body-lg text-foreground-secondary">
            Curated sets of posts, insights, and resources you've saved.
          </p>
        </div>
        <Button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary">
          <Plus className="w-4 h-4 mr-2" />
          New Collection
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-lg mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" />
        <Input
          placeholder="Search collections..."
          className="pl-10 bg-surface-elevated border-border focus:border-brand-primary"
        />
      </div>

      <Tabs defaultValue="my" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mb-8">
          <TabsTrigger value="my">My Collections</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="my" className="space-y-6">
          {/* Empty State */}
          <div className="text-center py-20">
            <Bookmark className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
            <h3 className="text-headline-3 mb-2">No collections yet</h3>
            <p className="text-body text-foreground-secondary mb-6 max-w-md mx-auto">
              Create your first collection to organize posts, insights, and resources into curated sets.
            </p>
            <div className="space-y-3">
              <Button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary">
                Create Your First Collection
              </Button>
              <div>
                <Button variant="ghost" className="text-foreground-secondary hover:text-foreground">
                  Learn about collections
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-6">
          <div className="text-center py-20">
            <Bookmark className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
            <h3 className="text-headline-3 mb-2">No saved collections</h3>
            <p className="text-body text-foreground-secondary mb-6 max-w-md mx-auto">
              Save collections from other members to keep track of curated content you find valuable.
            </p>
            <Button variant="outline">
              Explore Collections
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
