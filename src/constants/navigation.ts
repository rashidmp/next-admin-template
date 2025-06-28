import {
  IconDashboard,
  IconDatabase,
  IconFileText,
  IconHelp,
  IconListDetails,
  IconPhoneCall,
  IconSearch,
  IconSettings,
  IconUserPlus,
  IconUsers,
} from '@tabler/icons-react';
import type { SidebarData } from '@/types/navigation';
import { APP_CONFIG } from '@/config/app';

export const SIDEBAR_DATA: SidebarData = {
  user: {
    name: 'John Doe',
    email: 'john@company.com',
    avatar: '/avatars/default.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard,
    },
    {
      title: 'Enquiries',
      url: '/enquiries',
      icon: IconUsers,
    },
    {
      title: 'Follow-ups',
      url: '/follow-ups',
      icon: IconListDetails,
    },
    {
      title: 'Call Register',
      url: '/call-register',
      icon: IconPhoneCall,
    },
  ],
  admin: [
    {
      title: 'Data Management',
      url: '/admin/data-management',
      icon: IconDatabase,
    },
    {
      title: 'Reports',
      url: '/admin/reports',
      icon: IconFileText,
    },
    {
      title: 'Users',
      url: '/admin/users',
      icon: IconUserPlus,
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '/settings',
      icon: IconSettings,
    },
    {
      title: 'Search',
      url: '/search',
      icon: IconSearch,
    },
    {
      title: 'Help & Support',
      url: '/help',
      icon: IconHelp,
    },
  ],
};

export const COMPANY_INFO = {
  name: APP_CONFIG.name,
  description: APP_CONFIG.description,
} as const;
