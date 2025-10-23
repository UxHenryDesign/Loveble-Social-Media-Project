import { useState } from "react"
import { 
  Home, 
  Compass, 
  Users, 
  MessageCircle, 
  BookmarkPlus, 
  Settings,
  Bell,
  Plus,
  Search,
  Sparkles
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Explore", url: "/explore", icon: Compass },
  { title: "Circles", url: "/circles", icon: Users },
  { title: "Messages", url: "/messages", icon: MessageCircle },
  { title: "Collections", url: "/collections", icon: BookmarkPlus },
  { title: "Notifications", url: "/notifications", icon: Bell },
]

const secondaryItems = [
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/"
    }
    return currentPath.startsWith(path)
  }

  const getNavClassName = (path: string) => {
    const active = isActive(path)
    return `
      flex items-center w-full text-left transition-all duration-150 ease-out
      ${active 
        ? "bg-brand-surface text-brand-primary font-medium" 
        : "text-foreground-secondary hover:bg-interactive-hover hover:text-foreground"
      }
    `
  }

  return (
    <Sidebar className={`border-r border-border ${isCollapsed ? "w-20" : "w-72"}`} collapsible="icon">
      <SidebarHeader className="border-b border-border px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-brand-on-primary" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-headline-3 font-semibold">Lumen</h1>
              <p className="text-sm text-foreground-muted">Circles</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        {/* Create Button */}
        <div className="mb-8">
          <Button 
            className={`w-full bg-brand-primary hover:bg-brand-primary-hover text-brand-on-primary font-medium ${
              isCollapsed ? "px-0" : ""
            }`}
            size={isCollapsed ? "icon" : "default"}
            asChild
          >
            <NavLink to="/create">
              <Plus className="w-4 h-4" />
              {!isCollapsed && <span className="ml-2">Create</span>}
            </NavLink>
          </Button>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Secondary Navigation */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Theme Toggle */}
        {!isCollapsed && (
          <div className="mt-6 pt-6 border-t border-border">
            <ThemeToggle />
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}
