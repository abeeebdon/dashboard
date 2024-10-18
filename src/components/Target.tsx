import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { CardContent } from '@/components/Card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/charts'

export const description = 'A multiple bar chart'

const chartData = [
  { month: 'January', desktop: 500, mobile: 300 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 450, mobile: 500 },
  { month: 'April', desktop: 300, mobile: 400 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 550, mobile: 450 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(60, 100%, 50%)',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function Target() {
  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  )
}
