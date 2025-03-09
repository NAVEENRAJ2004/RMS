"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    id:string
    name: string
    logo: React.ElementType
    plan: string
    route: string
    shortcut: string
  }[]
}) {
  const router = useRouter()
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])
  React.useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    // Check for Ctrl key combinations
    if (event.ctrlKey) {
      switch (event.key.toLowerCase()) {
        case 'm':
          event.preventDefault();
          router.push('/dashboard');
          // Update active team if needed
          const dashboardteam = teams.find(team => team.route === '/dashboard');
          if (dashboardteam) setActiveTeam(dashboardteam);
          break;
        case 'r':
          event.preventDefault();
          router.push('/dashboard/research_papers');
          // Update active team if needed
          const researchTeam = teams.find(team => team.route === '/dashboard/research_papers');
          if (researchTeam) setActiveTeam(researchTeam);
          break;
        case 'g':
          event.preventDefault();
          router.push('/dashboard/github_collaboration');
          // Update active team if needed
          const githubTeam = teams.find(team => team.route === '/dashboard/github_collaboration');
          if (githubTeam) setActiveTeam(githubTeam);
          break;
        case 'd':
          event.preventDefault();
          router.push('/dashboard/discussion_forum');
          // Update active team if needed
          const forumTeam = teams.find(team => team.route === '/dashboard/discussion_forum');
          if (forumTeam) setActiveTeam(forumTeam);
          break;
      }
    }
  };

  // Add event listener
  window.addEventListener('keydown', handleKeyDown);

  // Cleanup function
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [router, teams, setActiveTeam]);
  if (!activeTeam) {
    return null
  }

    const handleTeamChange = (team: typeof teams[0]) => {
    setActiveTeam(team)
    router.push(team.route)
  }

  

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Dashboard
            </DropdownMenuLabel>
            {teams.map((team) => (
             <DropdownMenuItem
  key={team.id}
  onClick={() => handleTeamChange(team)}
  
  className="flex items-center gap-3 p-2"
>
  {/* Logo */}
  <div className="flex size-8 items-center justify-center rounded-xs border">
    <team.logo className="size-5 shrink-0" />
  </div>

  {/* Name & Plan in Two Rows */}
  <div className="flex flex-col">
    <span className="font-medium leading-tight">{team.plan}</span>
    
  </div>

                <DropdownMenuShortcut>⌘{team.shortcut}</DropdownMenuShortcut>
</DropdownMenuItem>

            ))}
            
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
