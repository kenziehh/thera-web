import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

type Hospital = {
    id: string;
    name: string;
    address: string;
};

type Patient = {
    id: string;
    full_name: string;
    id_number: string;
    phone_number: string;
    address: string;
    date_of_birth: string;
    gender: string;
    height: number;
    weight: number;
    blood_type: string;
    allergies: string;
    medical_record_number: string;
    hospital: Hospital;
    created_at: string;
    updated_at: string;
};

export default function PatientContainer({ patients }: { patients: Patient[] }) {
    return (
        <main className="min-h-screen w-full py-20 container">
            <div className="flex flex-col items-center gap-4 mb-10">
                <h1 className="text-2xl font-bold">Patient Dashboard</h1>
                <p className="text-gray-600">Manage your patients data here</p>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>ID Number</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>DOB</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Blood</TableHead>
                        <TableHead>Allergies</TableHead>
                        <TableHead>Hospital</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {patients.map((patient, index) => (
                        <TableRow key={patient.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{patient.full_name}</TableCell>
                            <TableCell>{patient.id_number}</TableCell>
                            <TableCell>{patient.phone_number}</TableCell>
                            <TableCell>{new Date(patient.date_of_birth).toLocaleDateString()}</TableCell>
                            <TableCell>{patient.gender}</TableCell>
                            <TableCell>{patient.blood_type}</TableCell>
                            <TableCell>{patient.allergies}</TableCell>
                            <TableCell>{patient.hospital.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    );
}
