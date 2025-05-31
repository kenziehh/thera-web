"use client"

import { Line, LineChart, Pie, PieChart, XAxis, YAxis } from "recharts"

import { RollingNumber } from "@/components/rolling-number"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"

export default function DashboardPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className='grid grid-cols-6 grid-rows-4 gap-4'>
        <div className='col-span-4 row-span-1 rounded-2xl grid grid-cols-4 grid-rows-1 gap-4'>
          <div className='col-span-1 bg-[#EDEEFC] rounded-2xl p-6 flex flex-col gap-2 justify-center'>
            <span className="text-sm">
              Available Doctor
            </span>
            <RollingNumber
              value={7265}
              className="text-2xl font-semibold"
            />
          </div>
          <div className='col-span-1 bg-[#EDEEFC] rounded-2xl p-6 flex flex-col gap-2 justify-center'>
            <span className="text-sm">
              Patients Count
            </span>
            <RollingNumber
              value={3671}
              className="text-2xl font-semibold"
            />
          </div>
          <div className='col-span-1 bg-[#EDEEFC] rounded-2xl p-6 flex flex-col gap-2 justify-center'>
            <span className="text-sm">
              Overworked Doctors
            </span>
            <RollingNumber
              value={136}
              className="text-2xl font-semibold"
            />
          </div>
          <div className='col-span-1 bg-[#EDEEFC] rounded-2xl p-6 flex flex-col gap-2 justify-center'>
            <span className="text-sm">
              Active Users
            </span>
            <RollingNumber
              value={2318}
              className="text-2xl font-semibold"
            />
          </div>
        </div>
        <div className='col-span-2 row-span-4 rounded-lg grid grid-cols-1 grid-row-6 gap-4'>
          <div className='col-span-1 rounded-2xl h-min'>
            <ChartPieDonut />
          </div>

          <div className='col-span-1  row-span-1 bg-[#EDEEFC] rounded-2xl p-6 flex flex-col gap-2 justify-center'>
            <span className="text-sm">
              ⚠️ Operational gaps detected. Check doctor schedules, meds, and training.
            </span>
          </div>
          <div className='col-span-1  row-span-1 bg-[#EDEEFC] rounded-2xl p-6 flex flex-col gap-2 justify-center'>
            <span className="text-sm">
              🚨 Resource shortage: Some shifts or supplies are below required levels.
            </span>
          </div>
          <div className='col-span-1  row-span-1 bg-[#EDEEFC] rounded-2xl p-6 flex flex-col gap-2 justify-center'>
            <span className="text-sm">
              ⚠️ Incomplete assignments. Doctor or training schedules need attention.
            </span>
          </div>
          <div className='col-span-1  row-span-1 bg-[#EDEEFC] rounded-2xl p-6 flex flex-col gap-2 justify-center'>
            <span className="text-sm">
              ⚠️ Schedule conflict or missing training sessions found."
            </span>
          </div>
        </div>
        <div className='col-span-4 row-span-3 rounded-lg'>
          <ChartLineMultiple />
        </div>
      </div>
    </div>
  )
}

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


export function ChartPieDonut() {
  const chartData = [
    { bed: "occupied", count: 2300, fill: "#344BFD" },
    { bed: "available", count: 1000, fill: "#FFD200" },
  ]

  const chartConfig = {
    count: {
      label: "Count",
    },
    occupied: {
      label: "Bed Occupied",
      color: "#344BFD",
    },
    available: {
      label: "Bed Available",
      color: "#FFD200",
    },
  } satisfies ChartConfig

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Week 4</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="aspect-square"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="bed"
              innerRadius={60}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="bed" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
