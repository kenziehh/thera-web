import { api } from "@/lib/axios";

export class AppointmentService {
    static async getAllAppointments() {
        try {
            const response = await api.get('/doctor-appointments');
            return response.data.payload.doctor_appointments as Appointment[];
        } catch (error) {
            console.error('Error fetching appointments:', error);
            throw error;
        }
    }

}