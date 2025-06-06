"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
    LayoutGrid,
    Clock,
    FileText,
    Gift,
    LogOut,
    Menu,
    User as UserIcon,
    Hospital,
    Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
    title: string;
    icon: React.ElementType;
    href: string;
    active?: boolean;
}

interface NavSection {
    title: string;
    items: NavItem[];
}

const navSections: NavSection[] = [
    {
        title: "MANAJEMEN RUMAH SAKIT",
        items: [
            {
                title: "Overview",
                icon: LayoutGrid,
                href: "/dashboard",
            },
            {
                title: "Schedule",
                icon: Clock,
                href: "/dashboard/schedule",
            },
            {
                title: "Appointment",
                icon: FileText,
                href: "/dashboard/appointment",
            },
            {
                title: "Mitra",
                icon: Hospital,
                href: "/dashboard/mitra",
            },

        ],
    },
    {
        title: "MANAJEMEN TENAGA KESEHATAN",
        items: [
            {
                title: "Doctor",
                icon: UserIcon,
                href: "/dashboard/doctor",
            },
            {
                title: "Patient",
                icon: UserIcon,
                href: "/dashboard/patient",
            },
            {
                title: "Notification",
                icon: Bell,
                href: "/dashboard/notification",
            },
        ],
    },

];

export function Sidebar({ user }: { user: User }) {
    const [isOpen, setIsOpen] = useState(true);
    const isMobile = useIsMobile();
    const pathName = usePathname();
    useEffect(() => {
        if (isMobile) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }, [isMobile]);

    return (
        <>
            {/* Mobile overlay */}
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Toggle button for mobile */}
            {isMobile && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="fixed top-4 left-4 z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "py-12 fixed inset-y-0 left-0 z-50 flex xl:w-[30vh] 2xl:w-[40vh] flex-col bg-black text-white transition-transform duration-300 px-4",
                    isMobile && !isOpen && "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 text-center">
                        <h1 className="text-h6 font-medium">Thera</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 space-y-8">
                        {navSections.map((section) => (
                            <div key={section.title} className="space-y-2">
                                <h2 className="text-xs tracking-wider text-gray-500 font-medium px-2">
                                    {section.title}
                                </h2>
                                <ul className="space-y-2">
                                    {section.items.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-6 px-6 py-4 rounded-lg text-body-lg xl:text-h6 transition-colors",
                                                    pathName === item.href
                                                        ? "bg-[#D7D3CD] "
                                                        : "hover:bg-[#262422]"
                                                )}
                                            >
                                                <item.icon
                                                    className={`${item.href === pathName ? "text-black" : "text-white"
                                                        } w-5 h-5`}
                                                />
                                                <span
                                                    className={`${item.href === pathName ? "text-black" : "text-white"
                                                        }`}
                                                >
                                                    {item.title}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>

                    {/* User profile */}
                    <div className="p-4 mt-auto border-t border-zinc-800">
                        <div className="flex items-center gap-3 mb-4">
                            <Avatar>
                                <AvatarImage
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="User avatar"
                                />
                                <AvatarFallback>JB</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col text-sm">
                                <span className="font-medium">{user.full_name}</span>
                                <span className="text-xs text-gray-400">{user.email}</span>
                                <span className="font-medium">{user.hospital.name}</span>

                            </div>
                        </div>
                        <Button
                            size={isMobile ? "sm" : "lg"}
                            variant="secondary"
                            className="w-full flex items-center justify-center rounded-2xl py-4"
                        >
                            <LogOut className="h-4 w-4 mr-2 rotate-180" />
                        </Button>
                    </div>
                </div>
            </aside>
        </>
    );
}