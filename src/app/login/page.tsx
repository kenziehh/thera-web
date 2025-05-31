import Image from 'next/image'
import React from 'react'
import BackgroundAuth from '@/assets/images/bg-auth.png';
import LoginContainer from '@/features/auth/containers/login-container';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function LoginPage() {

    const session = await getServerSession();
    if (session?.user) {
        redirect("/dashboard")
    }
    return (
        <LoginContainer />
    )
}
