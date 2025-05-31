import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import React from 'react'


export default function MitraContainer({ hospital }: { hospital: Mitra[] }) {
    return (
        <main className="container py-10 md:py-20 w-full">
            <h1 className="text-2xl font-bold mb-6">Daftar Mitra</h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Dari Rumah Sakit</TableHead>
                        <TableHead>Ke Rumah Sakit</TableHead>
                        <TableHead>Tipe Mitra</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Tanggal Dibuat</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {hospital.map((mitra) => (
                        <TableRow key={mitra.id}>
                            <TableCell className="font-medium">
                                {mitra.from_hospital.name} ({mitra.from_hospital.type})
                            </TableCell>
                            <TableCell>
                                {mitra.to_hospital.name} ({mitra.to_hospital.type})
                            </TableCell>
                            <TableCell>{mitra.partner_type}</TableCell>
                            <TableCell>
                                <span
                                    className={`${mitra.status === 'active' ? 'text-green-600' : 'text-red-600'
                                        }`}
                                >
                                    {mitra.status.charAt(0).toUpperCase() + mitra.status.slice(1)}
                                </span>
                            </TableCell>
                            <TableCell>
                                {new Date(mitra.created_at).toLocaleDateString('id-ID', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    );
}