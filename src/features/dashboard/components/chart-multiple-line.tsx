import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis } from "recharts"

export function ChartLineMultiple() {
  const chartData = [
    { day: "Sunday", malaria: 34, dbd: 40, flu: 24, hiv: 12 },
    { day: "Monday", malaria: 57, dbd: 50, flu: 30, hiv: 30 },
    { day: "Tuesday", malaria: 64, dbd: 55, flu: 44, hiv: 23 },
    { day: "Wednesday", malaria: 80, dbd: 70, flu: 49, hiv: 33 },
    { day: "Thursday", malaria: 90, dbd: 94, flu: 56, hiv: 40 },
    { day: "Friday", malaria: 120, dbd: 121, flu: 80, hiv: 52 },
    { day: "Saturday", malaria: 200, dbd: 170, flu: 112, hiv: 59 },
  ]

  const ChartConfig = {
    malaria: {
      label: "Malaria",
    },
    dbd: {
      label: "DBD",
    },
    flu: {
      label: "Flu",
    },
    hiv: {
      label: "HIV",
    },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader>
        <CardTitle>Disease Trends in 7 days</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={ChartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <YAxis
              label={{
                value: "Patient Counts",
                angle: -90,
                position: 'insideLeft',
              }}
              tickLine={false}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="malaria"
              type="linear"
              stroke="#EDC161"
              strokeWidth={4}
              dot={false}
            />
            <Line
              dataKey="dbd"
              type="linear"
              stroke="#5D45DB"
              strokeWidth={4}
              dot={false}
            />
            <Line
              dataKey="flu"
              type="linear"
              stroke="#FF696D"
              strokeWidth={4}
              dot={false}
            />
            <Line
              dataKey="hiv"
              type="linear"
              stroke="#6CB9AD"
              strokeWidth={4}
              dot={false}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

