import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/switch-themes";
import KBar from '@/components/kbar';
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumbs } from "@/components/breadcrumbs"; // Import the new component
import SearchInput from "@/components/search-input";
import { UserNav } from "@/components/user-nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <KBar>
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
             <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumbs /> {/* Use Breadcrumbs component here */}
            
          </div>
          <div className='flex items-center gap-2 px-4'>
        <div className='hidden md:flex'>
          <SearchInput />
        </div>
          <ModeToggle />
          <UserNav />
          </div>
        </header>
        <main className="px-3 mx-3">{children}</main>

      </SidebarInset>
    </SidebarProvider>
    </KBar>
  );
}
