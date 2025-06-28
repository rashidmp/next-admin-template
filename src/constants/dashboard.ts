import type { MetricCard } from '@/types/navigation';

export const DASHBOARD_METRICS: MetricCard[] = [
  {
    title: 'Total Revenue',
    value: '$1,250.00',
    description: 'Monthly revenue',
    trend: {
      type: 'up',
      value: '+12.5%',
    },
    footer: {
      message: 'Trending up this month',
      description: 'Revenue for the last 6 months',
    },
  },
  {
    title: 'New Customers',
    value: '1,234',
    description: 'New customer acquisitions',
    trend: {
      type: 'down',
      value: '-20%',
    },
    footer: {
      message: 'Down 20% this period',
      description: 'Acquisition needs attention',
    },
  },
  {
    title: 'Active Accounts',
    value: '45,678',
    description: 'Currently active accounts',
    trend: {
      type: 'up',
      value: '+12.5%',
    },
    footer: {
      message: 'Strong user retention',
      description: 'Engagement exceeds targets',
    },
  },
  {
    title: 'Growth Rate',
    value: '4.5%',
    description: 'Monthly growth percentage',
    trend: {
      type: 'up',
      value: '+4.5%',
    },
    footer: {
      message: 'Steady performance increase',
      description: 'Meets growth projections',
    },
  },
];
