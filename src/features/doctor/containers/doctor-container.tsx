import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function DoctorContainer({ doctors }: { doctors: Doctor[] }) {
    return (
        <main className="min-h-screen w-full py-20 container">
            <div className="flex flex-col items-center gap-4 mb-10">
                <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
                <p className="text-gray-600">Manage your doctors data here</p>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Specialty</TableHead>
                        <TableHead>Hospital</TableHead>
                        <TableHead>Created At</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {doctors.map((doctor, index) => (
                        <TableRow key={doctor.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{doctor.full_name}</TableCell>
                            <TableCell>{doctor.email}</TableCell>
                            <TableCell>{doctor.phone_number}</TableCell>
                            <TableCell>{doctor.specialty}</TableCell>
                            <TableCell>{doctor.hospital.name}</TableCell>
                            <TableCell>{new Date(doctor.created_at).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    );
}