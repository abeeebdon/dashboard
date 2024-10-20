import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/charts'

export const description = 'A multiple bar chart'

const chartData = [
  { day: 'Monday', online: 186, offline: 80 },
  { day: 'Tuesday', online: 305, offline: 200 },
  { day: 'Wednesday', online: 237, offline: 120 },
  { day: 'Thursday', online: 305, offline: 245 },
  { day: 'Friday', online: 209, offline: 130 },
  { day: 'Saturday', online: 214, offline: 250 },
  { day: 'Sunday', online: 214, offline: 140 },
]

const chartConfig = {
  desktop: {
    label: 'Online',
    color: '#0095FF',
  },
  mobile: {
    label: 'Offline',
    color: '#05C283',
  },
} satisfies ChartConfig

export function BarChartMultiple() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="online" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="offline" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
