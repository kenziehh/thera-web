import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { Pie, PieChart } from "recharts"

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
