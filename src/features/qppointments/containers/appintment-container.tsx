"use client"

import React from 'react'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    ColumnDef,
} from '@tanstack/react-table'
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'



const columns: ColumnDef<Appointment>[] = [
    {
        accessorKey: 'doctor',
        header: 'Doctor',
        cell: info => info.getValue() && typeof info.getValue() === 'object'
            ? (info.getValue() as Doctor).full_name
            : '',
    },
    {
        accessorKey: 'patient',
        header: 'Patient',
        cell: info => info.getValue() && typeof info.getValue() === 'object'
            ? (info.getValue() as Patient).full_name
            : '',
    },
    {
        accessorKey: 'appointment_date',
        header: 'Date',
        cell: info => {
            const value = info.getValue();
            if (!value) return '';
            const date = new Date(value as string);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day} ${month} ${year}`;
        },
    },
    {
        accessorKey: 'start_time',
        header: 'Start Time',
        cell: info => {
            const value = info.getValue();
            if (!value) return '';
            const date = new Date(`1970-01-01T${value}`);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        },
    },
    {
        accessorKey: 'end_time',
        header: 'End Time',
        cell: info => {
            const value = info.getValue();
            if (!value) return '';
            const date = new Date(`1970-01-01T${value}`);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        },
    },
]

export default function AppointmentContainer({ appointments }: { appointments: Appointment[] }) {
    const table = useReactTable({
        data: appointments,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <main className='container py-10 md:py-20 min-h-screen'>
            <section className=' flex flex-col gap-4'>
                <h1 className='font-bold text-3xl'>Doctor Appointments</h1>
                <Table className='border rounded-xl'>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead className='py-6 px-4' key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.map(row => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <TableCell className='py-4 px-4' key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </main>
    )
}
