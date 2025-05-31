import { api } from "@/lib/axios";

export class PatientService {
    static async getPatients() {
        try {
            const response = await api.get("/patients");
            return response.data.payload.patients;
        } catch (error) {
            console.error("Error fetching patients:", error);
            throw error;
        }
    }


}