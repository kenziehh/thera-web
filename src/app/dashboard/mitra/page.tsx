import MitraContainer from '@/features/mitra/containers/mitra-container'
import { MitraService } from '@/features/mitra/services/mitra.service'
import React from 'react'

export default async function MitraDashboardPage() {
    const hospitalPartners = await MitraService.getMitra();

    return (
        <MitraContainer hospital={hospitalPartners ?? []} />
    )
}
