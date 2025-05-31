import NotificationContainer from '@/features/notification/containers/notification-container'
import { NotificationService } from '@/features/notification/services/notification.service';
import React from 'react'

export default async function NotificationDashboardPage() {

    const notifications = await NotificationService.getNotifications();

    return (
        <>
            <NotificationContainer notification={notifications} />
        </>
    )
}
