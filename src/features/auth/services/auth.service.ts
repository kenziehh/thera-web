import { api } from "@/lib/axios";

export class AuthService {
    static async getProfile() {
        try {
            const response = await api.get("/admins/sessions");
            return response.data.payload.admin as User;
        } catch (error) {
            console.error("Error fetching profile:", error);
            throw error;
        }
    }
}