'use client';
import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useI18n } from '@/lib/i18n';

export function RevenueChart() {
  const { t, language } = useI18n();

  const chartData = [
    { month: t('months.january'), revenue: 1860 },
    { month: t('months.february'), revenue: 3050 },
    { month: t('months.march'), revenue: 2370 },
    { month: t('months.april'), revenue: 7300 },
    { month: t('months.may'), revenue: 20900 },
    { month: t('months.june'), revenue: 54000 },
  ];
  
  const chartConfig = {
    revenue: {
      label: t('revenueChart.label'),
      color: 'hsl(var(--primary))',
    },
  };

  const locale = language === 'pt' ? 'pt-BR' : language;

  return (
    <Card className="bg-card/50 backdrop-blur-lg border border-white/10 transition-all hover:border-primary/50">
      <CardHeader>
        <CardTitle>{t('revenueChart.title')}</CardTitle>
        <CardDescription>
          {t('revenueChart.description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickFormatter={(value) =>
                `R$${Number(value).toLocaleString(locale, {
                  notation: 'compact',
                })}`
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
              formatter={(value) =>
                `R$${Number(value).toLocaleString(locale)}`
              }
            />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
