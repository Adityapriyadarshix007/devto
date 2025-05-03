
import { Link } from "react-router-dom";
import { 
  Home, Book, Tag, HelpCircle, Info, 
  Mail, ExternalLink 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationLinks, otherLinks, popularTags, listings } from "@/data/mockData";

type SidebarProps = {
  position: "left" | "right";
  className?: string;
  children?: React.ReactNode;
};

const getIcon = (name: string) => {
  const icons: Record<string, any> = {
    Home: Home,
    Book: Book,
    Tag: Tag,
    HelpCircle: HelpCircle,
    Info: Info,
    Mail: Mail
  };
  return icons[name] || ExternalLink;
};

export const LeftSidebar = ({ className }: { className?: string }) => {
  return (
    <Sidebar position="left" className={className}>
      <nav className="flex flex-col space-y-2 mb-6">
        {navigationLinks.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Icon className="mr-3 h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-5">
        <h3 className="px-3 text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">
          Other
        </h3>
        <nav className="flex flex-col space-y-2">
          {otherLinks.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center rounded-md px-3 py-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </Sidebar>
  );
};

export const RightSidebar = ({ className }: { className?: string }) => {
  return (
    <Sidebar position="right" className={className}>
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-5 mb-5">
        <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap">
          {popularTags.map((tag) => (
            <Link 
              key={tag} 
              to={`/tag/${tag}`} 
              className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md px-3 py-1 mr-2 mb-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
        <h3 className="text-lg font-bold mb-4">Listings</h3>
        <ul className="space-y-4">
          {listings.map((listing, index) => (
            <li key={index} className="border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0 last:pb-0">
              <Link to={listing.link} className="text-base hover:text-blue-600 dark:hover:text-blue-400 block">
                {listing.title}
              </Link>
              <p className="text-xs text-gray-500">{listing.category}</p>
            </li>
          ))}
        </ul>
        <Link to="/listings" className="text-sm text-blue-600 dark:text-blue-400 block mt-4 hover:underline">
          See all listings
        </Link>
      </div>
    </Sidebar>
  );
};

const Sidebar = ({ position, className, children }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "w-full sticky top-[3.75rem]",
        position === "left" ? "pr-4" : "pl-4",
        className
      )}
    >
      <div className="h-[calc(100vh-3.75rem)] overflow-y-auto py-5 flex flex-col">
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
