import DoctorContainer from '@/features/doctor/containers/doctor-container'
import { DoctorService } from '@/features/doctor/services/doctor.service'
import PatientContainer from '@/features/patient/containers/patient-container';
import { PatientService } from '@/features/patient/services/patient.service';
import React from 'react'

export default async function PatientManagementDashboardPage() {
    const patients = await PatientService.getPatients();
    return (
        <PatientContainer patients={patients} />
    )
}
