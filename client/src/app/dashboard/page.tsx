import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const metadata: Metadata = {
    title: "Sabelo",
    description: "Track your finances with ease with Sabelo, plata segura.",
}

export default function DashboardPage() {
    return (
        <main className="flex-1 p-4 md:p-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
                <div>
                    {/* <h1 className="text-xl md:text-2xl font-bold text-white">Welcome back, {user ?? "User"}</h1> */}
                    <h1 className="text-xl md:text-2xl font-bold text-white">Welcome back, user!</h1>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="relative w-full md:w-auto">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                            placeholder="Search..."
                            className="w-full md:w-[300px] pl-10 bg-[#2a2f36] border-none text-white"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-full border-none bg-[#2a2f36]">
                            <Bell className="h-5 w-5 text-gray-400" />
                            <span className="sr-only">Notifications</span>
                        </Button>
                        <div className="h-10 w-10 rounded-full bg-gray-400 overflow-hidden">
                            <img src="/placeholder.svg?height=40&width=40" alt="User profile" />
                        </div>
                    </div>
                </div>
            </header>

            <section aria-labelledby="monthly-report">
                <h2 id="monthly-report" className="text-xl font-bold text-white mb-4">
                    How your month is going
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* monthly summary */}
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <Card className="col-span-1 md:col-span-8 bg-[#2a2f36] border-none text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-white">Fund Flow</CardTitle>
                        <TooltipProvider>
                            <div className="flex items-center gap-1">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="h-8 w-8 bg-inherit hover:bg-[#1f2328] border-none">
                                            <ArrowLeft className="h-4 w-4 text-gray-400" />
                                            <span className="sr-only">Previous month</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Previous Month</p>
                                    </TooltipContent>
                                </Tooltip>
                                {/* <span className="text-sm text-gray-400">{month ?? "Month unavailable"}</span> */}
                                <span className="text-sm text-gray-400">Jan</span>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="h-8 w-8 bg-inherit hover:bg-[#1f2328] border-none">
                                            <ArrowRight className="h-4 w-4 text-gray-400 border-none" />
                                            <span className="sr-only">Next month</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Next Month</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    </CardHeader>
                    <CardContent>
                        {/* fund flow chart */}
                    </CardContent>
                </Card>

                <Card className="col-span-1 md:col-span-4 bg-[#2a2f36] border-none text-white">
                    <CardHeader>
                        <CardTitle className="text-white">My Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* card container */}
                    </CardContent>
                </Card>

                <Card className="col-span-1 md:col-span-8 bg-[#2a2f36] border-none text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-white">Transaction History</CardTitle>
                        <Button variant="link" className="text-sm text-gray-400 p-0">
                            Recent
                        </Button>
                    </CardHeader>
                    <CardContent>
                        {/* transaction history */}
                    </CardContent>
                </Card>

                <Card className="col-span-1 md:col-span-4 bg-[#2a2f36] border-none text-white">
                    <CardHeader>
                        <CardTitle className="text-white">Goals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* goals */}
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

