import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { MainLayout } from "@/components/layout/main-layout";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import Circles from "./pages/Circles";
import Messages from "./pages/Messages";
import Collections from "./pages/Collections";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="lumen-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <MainLayout>
                <Index />
              </MainLayout>
            } />
            <Route path="/explore" element={
              <MainLayout>
                <Explore />
              </MainLayout>
            } />
            <Route path="/circles" element={
              <MainLayout>
                <Circles />
              </MainLayout>
            } />
            <Route path="/circles/:slug" element={
              <MainLayout>
                <div>Circle Detail Page</div>
              </MainLayout>
            } />
            <Route path="/messages" element={
              <MainLayout>
                <Messages />
              </MainLayout>
            } />
            <Route path="/collections" element={
              <MainLayout>
                <Collections />
              </MainLayout>
            } />
            <Route path="/notifications" element={
              <MainLayout>
                <Notifications />
              </MainLayout>
            } />
            <Route path="/settings" element={
              <MainLayout>
                <Settings />
              </MainLayout>
            } />
            <Route path="/create" element={
              <MainLayout>
                <Create />
              </MainLayout>
            } />
            <Route path="/profile/:handle" element={
              <MainLayout>
                <Profile />
              </MainLayout>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
