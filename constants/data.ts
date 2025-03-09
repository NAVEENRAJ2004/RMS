// Define the type directly in this file
interface NavItem {
  title: string;
  url: string;
  icon: string;
  isActive: boolean;
  shortcut: string[];
  items?: NavItem[]; // Make items optional with the ? operator
}

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: []
  },
  {
    title: 'Research Paper',
    url: '/dashboard/research_paper',
    icon: 'product',
    shortcut: ['ctrl', 'r'],
    isActive: false,
    items: []
  },
  {
    title: 'GitHub Collaboration',
    url: '/dashboard/github_collaboration',
    icon: 'billing',
    shortcut: ['ctrl', 'g'],
    isActive: false,
    items: []
  },
  {
    title: 'Discussion Forum',
    url: '/dashboard/discussion_forum',
    icon: 'kanban',
    shortcut: ['ctrl', 'd'],
    isActive: false,
    items: []
  }
];