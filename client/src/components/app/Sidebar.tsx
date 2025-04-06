"use client"

import { BarChart2, CreditCard, LayoutDashboard, LogIn, LogOut, Menu, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    const navigation = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "My Cards", href: "/cards", icon: CreditCard },
        { name: "Transactions", href: "/transactions", icon: CreditCard },
        { name: "Analytics", href: "/analytics", icon: BarChart2 },
        { name: "Settings", href: "/settings", icon: Settings },
    ]

    return (
        <>
            {/* Mobile menu button */}
            <Button
                variant="ghost"
                size="icon"
                className="fixed top-4 right-4 z-50 md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
                <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            </Button>

            {/* Sidebar for mobile and desktop */}
            <nav
                className={cn(
                    "border-r border-[#2a2f36] p-4 flex flex-col",
                    "fixed inset-y-0 left-0 z-40 w-[250px] transform transition-transform duration-200 ease-in-out",
                    "md:relative md:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                )}
            >
                <div className="flex items-center gap-2 px-2 py-4">
                    {/* temporary logo */}
                    <div className="flex items-center justify-center h-8 w-8 rounded bg-[#0fcf9c] text-white font-bold">S</div>
                    <span className="text-[#0fcf9c] font-bold text-xl">Sabelo</span>
                </div>

                <ul className="mt-8 space-y-1">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium",
                                    pathname === item.href
                                        ? "bg-[#9fe870] text-black"
                                        : "text-gray-400 hover:text-white hover:bg-[#2a2f36]",
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                <item.icon className="h-5 w-5" aria-hidden="true" />
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto">
                    {/* login / logout */}
                    {isLogged ? (
                        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2f36]">
                            <LogOut className="mr-2 h-5 w-5" aria-hidden="true" />
                            Log out
                        </Button>
                    ) : (
                        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#2a2f36]">
                            <LogIn className="mr-2 h-5 w-5" aria-hidden="true" />
                            Log in
                        </Button>
                    )}
                </div>

                <section className="mt-6 bg-[#9fe870] rounded-lg p-4 text-black">
                    <h3 className="font-bold text-lg">Get Premium</h3>
                    <p className="text-xs mt-1 mb-4">
                        Get exclusive insights, enhanced features, and greater control over your financial data for a seamless and
                        smarter experience.
                    </p>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Upgrade Now</Button>
                </section>
            </nav>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    )
}

