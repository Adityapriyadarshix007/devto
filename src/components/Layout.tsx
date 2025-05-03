
import { ReactNode } from "react";
import Header from "./Header";
import { LeftSidebar, RightSidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

type LayoutProps = {
  children: ReactNode;
  showLeftSidebar?: boolean;
  showRightSidebar?: boolean;
};

const Layout = ({
  children,
  showLeftSidebar = true,
  showRightSidebar = true,
}: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="dev-container flex-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4">
          {showLeftSidebar && !isMobile && (
            <div className="md:col-span-3 lg:col-span-2">
              <LeftSidebar />
            </div>
          )}
          
          <main className={`${showLeftSidebar && showRightSidebar && !isMobile ? 'md:col-span-6 lg:col-span-7' : (showLeftSidebar || showRightSidebar) && !isMobile ? 'md:col-span-9 lg:col-span-10' : 'md:col-span-12'}`}>
            {children}
          </main>
          
          {showRightSidebar && !isMobile && (
            <div className="md:col-span-3">
              <RightSidebar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
