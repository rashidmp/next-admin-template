import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DASHBOARD_METRICS } from '@/constants/dashboard';
import type { MetricCard } from '@/types/navigation';

interface MetricCardItemProps {
  metric: MetricCard;
}

function MetricCardItem({ metric }: MetricCardItemProps) {
  const TrendIcon = metric.trend.type === 'up' ? IconTrendingUp : IconTrendingDown;

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{metric.description}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {metric.value}
        </CardTitle>
        <CardAction>
          <Badge variant="outline">
            <TrendIcon />
            {metric.trend.value}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {metric.footer.message} <TrendIcon className="size-4" />
        </div>
        <div className="text-muted-foreground">{metric.footer.description}</div>
      </CardFooter>
    </Card>
  );
}

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {DASHBOARD_METRICS.map((metric) => (
        <MetricCardItem key={metric.title} metric={metric} />
      ))}
    </div>
  );
}
