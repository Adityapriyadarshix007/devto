
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookmarkProvider } from "@/contexts/BookmarkContext";

// Pages
import Index from "./pages/Index";
import Home from "./pages/Home";
import ReadingList from "./pages/ReadingList";
import ArticleDetail from "./pages/ArticleDetail";
import CreatePost from "./pages/CreatePost";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BookmarkProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/index" element={<Index />} />
            <Route path="/" element={<Home />} />
            <Route path="/reading-list" element={<ReadingList />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BookmarkProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
