import React from 'react'

export default function DoctorContainer({ doctors }: { doctors: Doctor[] }) {
    return (
        <main className='min-h-screen w-full py-20 container'>
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold mb-4">Doctor Dashboard</h1>
                <p className="text-gray-600">Manage your doctors data here</p>
            </div>

        </main>
    )
}
