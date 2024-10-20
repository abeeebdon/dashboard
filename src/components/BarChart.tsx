import { Bar, BarChart, CartesianGrid } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/charts'

export const description = 'A stacked bar chart with a legend'

const chartData = [
  { month: 'January', volume: 186, services: 237 },
  { month: 'February', volume: 305, services: 200 },
  { month: 'March', volume: 237, services: 120 },
  { month: 'April', volume: 73, services: 190 },
  { month: 'May', volume: 209, services: 130 },
  { month: 'June', volume: 214, services: 237 },
  { month: 'JUly', volume: 237, services: 140 },
]

const chartConfig = {
  mobile: {
    label: 'Volume',
    color: 'hsla(205, 100%, 50%, 1)',
  },
  desktop: {
    label: 'Services',
    color: 'hsla(160, 100%, 44%, 1)',
  },
} satisfies ChartConfig

export function Volume() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData} barSize={15}>
        <CartesianGrid vertical={false} />

        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Bar
          dataKey="volume"
          stackId="a"
          fill="var(--color-desktop)"
          radius={[0, 0, 2, 2]}
        />
        <Bar
          dataKey="services"
          stackId="a"
          fill="var(--color-mobile)"
          radius={[2, 2, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  )
}
