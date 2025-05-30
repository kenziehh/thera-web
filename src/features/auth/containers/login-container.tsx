"use client"

import Image from "next/image"
import { useState } from "react"
import BackgroundAuth from "@/assets/images/bg-auth.png"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { type SignInFormData, signInSchema } from "../services/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function LoginContainer() {
    // Add state for password visibility
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
    })

    const onSubmit = async (data: SignInFormData) => {
        const { email, password } = data
        console.log(email)
        try {
            const response = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password,
                callbackUrl: "/",
            })
            if (response?.error) {
                if (response.error.includes("Invalid login credentials")) {
                    toast.error("Invalid email or password.")
                } else {
                    toast.error("An error occurred. Please try again.")
                }
            } else {
                toast.success("Login Success")
                setTimeout(() => {
                    router.push("/dashboard")
                }, 2500)
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.")
            console.error(error)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <main className="relative min-h-screen flex justify-center items-center">
            <Image src={BackgroundAuth || "/placeholder.svg"} alt="" className="absolute left-0 top-0 h-[100vh] -z-20" />

            <div className="py-14 px-10 w-[400px] bg-white rounded-[40px] shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-2">Sign-in to your account</h1>
                <p className="text-sm text-gray-500 text-center mb-6">Enter your email and password to log in</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="Email"
                            {...register("email")}
                            className={cn(errors.email && "border-red-500 focus-visible:ring-red-500")}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                {...register("password")}
                                className={cn(errors.password && "border-red-500 focus-visible:ring-red-500")}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <Button type="submit" className="w-full rounded-2xl bg-[#016ACC] h-16">
                        Sign In
                    </Button>
                </form>
            </div>
        </main>
    )
}
