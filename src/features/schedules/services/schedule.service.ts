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
}