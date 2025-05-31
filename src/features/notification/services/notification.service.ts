import { api } from "@/lib/axios";

export class NotificationService {
    static async getNotifications() {
        try {
            const response = await api("/notifications/me")
            console.log(response.data.payload)
            return response.data.payload.notifications;
        } catch (error) {
            throw error;
        }
    }
}