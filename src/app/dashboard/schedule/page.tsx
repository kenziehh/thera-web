import ScheduleContainer from '@/features/schedules/containers/schedule-container'
import { ScheduleService } from '@/features/schedules/services/schedule.service'
import React from 'react'

export default async function SchedulePage() {

    const schedules = await ScheduleService.getSchedules();

    return (
        <ScheduleContainer schedules={schedules ?? []} />
    )
}
