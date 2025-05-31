import { api } from "@/lib/axios";

export class DoctorService {
    static async getDoctors() {
        try {
            const response = await api.get("/doctors");
            return response.data.payload.doctors;
        } catch (error) {
            console.error("Error fetching doctors:", error);
            throw error;
        }
    }
}