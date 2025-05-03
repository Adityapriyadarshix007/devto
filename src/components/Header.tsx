
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, Bell, User, Moon, Sun, TrendingUp, PenSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  // Effect to apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toast({
      title: isDarkMode ? "Light mode activated" : "Dark mode activated",
      duration: 2000,
    });
  };

  // Function to show "Copied to clipboard" notification
  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied to clipboard!",
      description: "Share it with your friends",
      duration: 3000,
    });
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="dev-container">
        <div className="flex items-center justify-between h-14">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* DEV Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                DEV
              </div>
            </Link>
          </div>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full max-w-2xl">
              <Input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 py-1 bg-gray-100 dark:bg-gray-800 border-none rounded-lg w-full"
              />
              <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          {/* Search - Mobile */}
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 dark:text-gray-300"
            >
              <Search className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/trending" className="flex items-center gap-1 text-gray-600 dark:text-gray-300 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
              <TrendingUp className="h-5 w-5" />
              <span>Trending</span>
            </Link>
            
            <Link to="/create-post" className="flex items-center gap-1 text-gray-800 dark:text-gray-200 px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
              <PenSquare className="h-5 w-5" />
              <span>Create Post</span>
            </Link>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-600 dark:text-gray-300"
              onClick={handleShareLink}
            >
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-600 dark:text-gray-300"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile search expanded */}
        {isSearchOpen && (
          <div className="md:hidden py-2 px-4 bg-white dark:bg-gray-900">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 py-1 bg-gray-100 dark:bg-gray-800 border-none"
              />
              <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}
        
        {/* Mobile menu expanded */}
        {isMenuOpen && (
          <div className="md:hidden py-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col">
              <Link to="/" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Home</Link>
              <Link to="/reading-list" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Reading List</Link>
              <Link to="/tags" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Tags</Link>
              <Link to="/faq" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">FAQ</Link>
              <Link to="/create-post" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Create Post</Link>
              <button 
                className="text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
              <button 
                className="text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={handleShareLink}
              >
                Share This Page
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
