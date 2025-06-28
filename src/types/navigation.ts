import type { Icon } from '@tabler/icons-react';

export interface NavItem {
  title: string;
  url: string;
  icon: Icon;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

export interface SidebarData {
  demoUser: UserProfile;
  navMain: NavItem[];
  navSecondary: NavItem[];
  admin: NavItem[];
}

export interface MetricCard {
  title: string;
  value: string;
  description: string;
  trend: {
    type: 'up' | 'down';
    value: string;
  };
  footer: {
    message: string;
    description: string;
  };
}
