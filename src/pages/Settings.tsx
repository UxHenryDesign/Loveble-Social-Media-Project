import { User, Bell, Shield, Palette, Download, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Settings() {
  return (
    <div className="content-container py-8">
      <div className="mb-8">
        <h1 className="text-headline-1 mb-2">Settings</h1>
        <p className="text-body-lg text-foreground-secondary">
          Manage your account, privacy, and preferences.
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5 max-w-3xl mb-8">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="account" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Account
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="surface-card p-6">
            <h3 className="text-headline-3 mb-6">Profile Information</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue="Jane Doe" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="handle">Handle</Label>
                  <Input id="handle" defaultValue="janedoe" className="mt-2" />
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  defaultValue="Design systems advocate • Building beautiful digital experiences"
                  className="mt-2 min-h-[100px]"
                />
                <p className="text-sm text-foreground-muted mt-1">140 characters max</p>
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="San Francisco" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://example.com" className="mt-2" />
              </div>
              <Button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary">
                Save Changes
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="surface-card p-6">
            <h3 className="text-headline-3 mb-6">Notification Preferences</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-foreground-muted">Receive notifications via email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Mentions</Label>
                  <p className="text-sm text-foreground-muted">When someone mentions you</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Replies</Label>
                  <p className="text-sm text-foreground-muted">When someone replies to your posts</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Circle Activity</Label>
                  <p className="text-sm text-foreground-muted">Updates from circles you've joined</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Weekly Digest</Label>
                  <p className="text-sm text-foreground-muted">Summary of activity in your circles</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="surface-card p-6">
            <h3 className="text-headline-3 mb-6">Privacy & Safety</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Private Profile</Label>
                  <p className="text-sm text-foreground-muted">Only approved followers can see your posts</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Allow Messages</Label>
                  <p className="text-sm text-foreground-muted">Let others send you direct messages</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Show Online Status</Label>
                  <p className="text-sm text-foreground-muted">Let others see when you're active</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Indexable by Search Engines</Label>
                  <p className="text-sm text-foreground-muted">Allow search engines to find your public posts</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="surface-card p-6">
            <h3 className="text-headline-3 mb-6">Appearance</h3>
            <div className="space-y-6">
              <div>
                <Label className="text-base">Theme</Label>
                <p className="text-sm text-foreground-muted mb-4">Choose your preferred theme</p>
                <ThemeToggle />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Reduced Motion</Label>
                  <p className="text-sm text-foreground-muted">Minimize animations and transitions</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Dense Layout</Label>
                  <p className="text-sm text-foreground-muted">Show more content on screen</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card className="surface-card p-6">
            <h3 className="text-headline-3 mb-6">Account Management</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Export Data</h4>
                <p className="text-sm text-foreground-muted mb-4">
                  Download a copy of your posts, circles, and account data
                </p>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Request Data Export
                </Button>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2 text-danger">Danger Zone</h4>
                <p className="text-sm text-foreground-muted mb-4">
                  These actions cannot be undone. Please be careful.
                </p>
                <Button variant="destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
