import DoctorContainer from '@/features/doctor/containers/doctor-container'
import { DoctorService } from '@/features/doctor/services/doctor.service'
import React from 'react'

export default async function DoctorManagementDashboardPage() {
    const doctors = await DoctorService.getDoctors();
    return (
        <DoctorContainer doctors={doctors} />
    )
}
