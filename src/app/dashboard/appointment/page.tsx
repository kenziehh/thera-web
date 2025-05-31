import AppointmentContainer from '@/features/qppointments/containers/appintment-container';
import { AppointmentService } from '@/features/qppointments/services/appointment.service'
import React from 'react'

export default async function AppointmentPage() {
    const appointments = await AppointmentService.getAllAppointments();

    return (
        <AppointmentContainer appointments={appointments} />
    )
}
