"use client"
import * as React from "react"
import {
  BookOpen,
  BookOpenCheck,
  BrainCog,
  Code2,
  Settings2,
  SquareTerminal,
} from "lucide-react"
import { FileText, Github, MessagesSquare, Home, BookMarked, Users, MessageCircle, Code, Folder, Star, History, Filter } from "lucide-react";
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

// This is sample data.
const data = {
  user: {
    name: "Gowtham",
    email: "42110395",
    avatar: "/sample-avatar.jpg",
  },
  teams: [
    { 
      id: "rms-0",
      name: "RMS",
      logo: FileText,
      plan: "Dashboard",
      route: "/dashboard",
      shortcut:"M"
    },
    { 
      id: "rms-1",
      name: "RMS",
      logo: FileText,
      plan: "Research Papers",
      route: "/dashboard/research_papers",
      shortcut:"R"
    },
    {
      id: "rms-2",
      name: "RMS",
      logo: Github,
      plan: "Github Repositories",
      route: "/dashboard/github_collaboration",
      shortcut:"G"
    },
    {
      id: "rms-3",
      name: "RMS",
      logo: MessagesSquare,
      plan: "Discussion Forum",
      route: "/dashboard/discussion_forum",
      shortcut:"D"
    },
  ],
  // Default dashboard navigation
  dashboardNav: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Code Editor",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "PYQs",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Past Year Questions",
          url: "#",
        },
        {
          title: "Upload Questions",
          url: "#",
        },
        {
          title: "Solutions",
          url: "#",
        },
      ],
    },
    
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
  // Research Papers navigation
  researchPapersNav: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "All Papers",
      url: "/dashboard/research_papers",
      icon: FileText,
      isActive: true,
    },
    {
      title: "Categories",
      url: "#",
      icon: Filter,
      items: [
        {
          title: "AI & Machine Learning",
          url: "#",
        },
        {
          title: "Computer Science",
          url: "#",
        },
        {
          title: "Engineering",
          url: "#",
        },
        {
          title: "Mathematics",
          url: "#",
        },
      ],
    },
    {
      title: "My Library",
      url: "#",
      icon: BookMarked,
      items: [
        {
          title: "Saved Papers",
          url: "#",
        },
        {
          title: "Reading List",
          url: "#",
        },
        {
          title: "Citations",
          url: "#",
        },
      ],
    },
  ],
  // Github Repositories navigation
  githubNav: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Repositories",
      url: "#",
      icon: Github,
      isActive: true,
    },
    {
      title: "My Projects",
      url: "#",
      icon: Folder,
      items: [
        {
          title: "Active",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Collaborations",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Team Projects",
          url: "#",
        },
        {
          title: "Pull Requests",
          url: "#",
        },
        {
          title: "Issues",
          url: "#",
        },
      ],
    },
    {
      title: "Code Reviews",
      url: "#",
      icon: Code,
    },
  ],
  // Discussion Forum navigation
  discussionForumNav: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Forums",
      url: "/dashboard/discussion_forum",
      icon: MessagesSquare,
      isActive: true,
    },
    {
      title: "Topics",
      url: "#",
      icon: MessageCircle,
      items: [
        {
          title: "Research",
          url: "#",
        },
        {
          title: "Projects",
          url: "#",
        },
        {
          title: "Assignments",
          url: "#",
        },
        {
          title: "General",
          url: "#",
        },
      ],
    },
    {
      title: "My Activity",
      url: "#",
      icon: History,
      items: [
        {
          title: "My Posts",
          url: "#",
        },
        {
          title: "Replies",
          url: "#",
        },
        {
          title: "Bookmarked",
          url: "#",
        },
      ],
    },
    {
      title: "Starred Discussions",
      url: "#",
      icon: Star,
    },
  ],
  projects: [
    {
      name: "LLMs",
      url: "#",
      icon: BrainCog,
    },
    {
      name: "Research",
      url: "#",
      icon: BookOpenCheck,
    },
    {
      name: "WebDev",
      url: "#",
      icon: Code2,
    },
  ],
  footer: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  
  // Determine which navigation to show based on current route
  const getNavItems = () => {
    if (pathname === "/dashboard/research_papers") {
      return data.researchPapersNav;
    } else if (pathname === "/dashboard/github_collaboration") {
      return data.githubNav;
    } else if (pathname === "/dashboard/discussion_forum") {
      return data.discussionForumNav;
    } else {
      return data.dashboardNav;
    }
  }
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={getNavItems()} />
        {/* Only show projects on main dashboard */}
        {pathname === "/dashboard" && <NavProjects projects={data.projects} />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}