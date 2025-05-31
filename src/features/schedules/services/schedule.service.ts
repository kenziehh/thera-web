import { api } from "@/lib/axios";

export class ScheduleService {
    static async getSchedules() {
        try {
            const response = await api.get('/doctor-schedules');
            console.log(response.data)
            return response.data.payload as Schedule[];
        } catch (error) {
            console.error('Error fetching schedules:', error);
            throw error;
        }
    }

    static async getPreviewNextSchedule(doctorId: string) {
        try {
            const response = await api.get(`https://pt-mencari-cinta-sejati-api.bccdev.id/api/v1/doctor-schedules/improved-next-schedule-preview?doctor_id=${doctorId}`);
            console.log(response.data.payload);
            return response.data.payload as { schedule: Schedule, next_schedule: Schedule };
        } catch (error) {
            console.error('Error fetching next schedule preview:', error);
            throw error;
        }

    }

    static async updateSchedule(scheduleId: number, start_time: string, end_time: string) {
        try {
            const response = await api.patch(`/doctor-schedules/${scheduleId}`, {
                start_time,
                end_time
            });
            return response.data.payload as Schedule;
        } catch (error) {
            console.error('Error updating schedule:', error);
            throw error;
        }
    }
}