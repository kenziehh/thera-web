import { api } from "@/lib/axios";

export class MitraService {
    static async getMitra() {
        try {
            const response = await api.get("/hospital-partners/me");
            return response.data.payload.hospital_partners;
        } catch (error) {
            console.error('Error fetching mitra:', error);
            throw error;
        }
    }
}