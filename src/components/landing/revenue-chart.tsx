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

const chartData = [
  { month: 'Janeiro', revenue: 1860 },
  { month: 'Fevereiro', revenue: 3050 },
  { month: 'Março', revenue: 2370 },
  { month: 'Abril', revenue: 7300 },
  { month: 'Maio', revenue: 20900 },
  { month: 'Junho', revenue: 54000 },
];

const chartConfig = {
  revenue: {
    label: 'Faturamento',
    color: 'hsl(var(--primary))',
  },
};

export function RevenueChart() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border border-white/10 transition-all hover:border-primary/50">
      <CardHeader>
        <CardTitle>Crescimento de Faturamento</CardTitle>
        <CardDescription>
          Média de faturamento de um criador após 6 meses usando ViralBe.AI
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
                `R$${Number(value).toLocaleString('pt-BR', {
                  notation: 'compact',
                })}`
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
              formatter={(value) =>
                `R$${Number(value).toLocaleString('pt-BR')}`
              }
            />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
