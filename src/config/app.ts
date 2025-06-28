export const APP_CONFIG = {
  name: 'Next Admin',
  description: 'Next Admin Template',
  version: '1.0.0',
  author: {
    name: 'Rashid MP',
    url: 'https://github.com/rashidmp',
  },

  // Theme and UI settings
  theme: {
    defaultFont: 'DM Sans',
    sidebarWidth: 'calc(var(--spacing) * 72)',
    headerHeight: 'calc(var(--spacing) * 12)',
  },

  // Navigation settings
  navigation: {
    showQuickCreate: true,
    collapsibleSidebar: true,
  },

  siteHeader: {
    defaultTitle: 'Dashboard',
    showGitHubLink: true,
  },
} as const;

// Environment-specific configurations
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

// Export individual config sections for easier imports
export const { theme, navigation } = APP_CONFIG;
