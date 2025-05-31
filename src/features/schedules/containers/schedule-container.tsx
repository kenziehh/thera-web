import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

export default function ScheduleContainer({ schedules }: { schedules: Schedule[] }) {

    return (
        <main className='container py-10 md:py-20'>
            <section className='flex flex-col gap-4'>
                <h1 className='font-bold text-3xl'>Doctor Schedules</h1>
                <Table className='border rounded-xl'>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='py-6 px-4'>Doctor</TableHead>
                            <TableHead className='py-6 px-4'>Day of Week</TableHead>
                            <TableHead className='py-6 px-4'>Start Time</TableHead>
                            <TableHead className='py-6 px-4'>End Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {schedules.map((schedule) => (
                            <TableRow key={schedule.id}>
                                <TableCell className='py-6 px-4'>{schedule.doctor.full_name}</TableCell>
                                <TableCell className='py-6 px-4'>{schedule.day_of_week}</TableCell>
                                <TableCell className='py-6 px-4'>{schedule.start_time}</TableCell>
                                <TableCell className='py-6 px-4'>{schedule.end_time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </main>
    )
}
