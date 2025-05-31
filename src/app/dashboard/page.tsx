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
import { ChartLineMultiple } from "@/features/dashboard/components/chart-multiple-line"
import { ChartPieDonut } from "@/features/dashboard/components/chart-pie-donut"

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

