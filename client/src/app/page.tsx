import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    BarChart2,
    CreditCard,
    PieChart,
    Shield,
    Smartphone,
    Zap,
    CheckCircle,
    Wallet,
    TrendingUp,
    BellRing,
    Target,
} from "lucide-react"
import { SpendingChart } from "@/components/app/spending-chart"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#0c0c0c] text-white">
            {/* Navbar */}
            <nav className="border-b border-[#222] bg-[#0c0c0c]/80 backdrop-blur-md fixed top-0 w-full z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-[#9fe870] flex items-center justify-center text-black font-bold">
                            S
                        </div>
                        <span className="text-[#9fe870] font-bold text-xl">Sabelo</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
                            How It Works
                        </Link>
                        <Link href="#goals" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Goals
                        </Link>
                        <Link href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <Link href="#testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Testimonials
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Log in
                        </Link>
                        <Button className="bg-[#9fe870] hover:bg-[#8ad75f] text-black">Sign up free</Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333] text-sm text-[#9fe870]">
                                Financial freedom starts here
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Take control of your <span className="text-[#9fe870]">financial future</span>
                            </h1>
                            <p className="text-lg text-gray-400 max-w-lg">
                                Track expenses, manage budgets, and reach your financial goals with our powerful yet simple finance
                                tracker.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button className="bg-[#9fe870] hover:bg-[#8ad75f] text-black text-lg py-6 px-8">
                                    Get Started Free
                                </Button>
                                <Button variant="outline" className="border-[#333] text-white hover:bg-[#1a1a1a] text-lg py-6 px-8">
                                    See how it works
                                </Button>
                            </div>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-2">
                                    <div className="h-8 w-8 rounded-full bg-blue-400 border-2 border-[#0c0c0c] relative z-30 flex items-center justify-center text-white text-xs font-bold">
                                        JD
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-purple-500 border-2 border-[#0c0c0c] relative z-20 flex items-center justify-center text-white text-xs font-bold">
                                        MC
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-green-500 border-2 border-[#0c0c0c] relative z-10 flex items-center justify-center text-white text-xs font-bold">
                                        ER
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-orange-500 border-2 border-[#0c0c0c] relative z-0 flex items-center justify-center text-white text-xs font-bold">
                                        SJ
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400">
                                    <span className="text-white font-medium">5,000+</span> happy users tracking their finances
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#9fe870] rounded-full filter blur-[120px] opacity-20"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#3b82f6] rounded-full filter blur-[120px] opacity-20"></div>

                            <div className="relative bg-[#1a1a1a] border border-[#333] rounded-xl overflow-hidden shadow-2xl">
                                <div className="p-4 border-b border-[#333] flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-sm text-gray-400">Dashboard</div>
                                    <div></div>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#9fe870]">
                                            <div className="text-xs text-gray-400">Monthly Income</div>
                                            <div className="text-xl font-bold">5.2500 ARS</div>
                                            <div className="text-xs text-[#9fe870] flex items-center">
                                                <span>+10%</span>
                                                <span className="text-gray-400 ml-1">vs last month</span>
                                            </div>
                                        </div>
                                        <div className="bg-[#222] p-4 rounded-lg border-l-4 border-red-500">
                                            <div className="text-xs text-gray-400">Monthly Expenses</div>
                                            <div className="text-xl font-bold">1.2750 ARS</div>
                                            <div className="text-xs text-red-500 flex items-center">
                                                <span>-7%</span>
                                                <span className="text-gray-400 ml-1">vs last month</span>
                                            </div>
                                        </div>
                                        <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#9fe870]">
                                            <div className="text-xs text-gray-400">Monthly Savings</div>
                                            <div className="text-xl font-bold">3.1850 ARS</div>
                                            <div className="text-xs text-[#9fe870] flex items-center">
                                                <span>+10%</span>
                                                <span className="text-gray-400 ml-1">vs last month</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#222] p-4 rounded-lg mb-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="font-medium">Spending by Category</div>
                                            <div className="text-xs text-gray-400">January</div>
                                        </div>
                                        <div className="h-[200px] relative overflow-hidden">
                                            <SpendingChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-[#0a0a0a]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful features to manage your finances</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Everything you need to take control of your money, all in one place.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <PieChart className="h-6 w-6 text-[#9fe870]" />,
                                title: "Expense Tracking",
                                description: "Easily track and categorize all your expenses in one place.",
                            },
                            {
                                icon: <BarChart2 className="h-6 w-6 text-[#9fe870]" />,
                                title: "Financial Analytics",
                                description: "Get insights into your spending habits with detailed charts and reports.",
                            },
                            {
                                icon: <CreditCard className="h-6 w-6 text-[#9fe870]" />,
                                title: "Card Management",
                                description: "Manage all your cards and accounts in a single dashboard.",
                            },
                            {
                                icon: <Zap className="h-6 w-6 text-[#9fe870]" />,
                                title: "Budget Planning",
                                description: "Create and manage budgets to keep your spending in check.",
                            },
                            {
                                icon: <Shield className="h-6 w-6 text-[#9fe870]" />,
                                title: "Secure & Private",
                                description: "Your financial data is encrypted and never shared with third parties.",
                            },
                            {
                                icon: <Smartphone className="h-6 w-6 text-[#9fe870]" />,
                                title: "Mobile Access",
                                description: "Access your finances anytime, anywhere with our mobile app.",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 hover:border-[#9fe870] transition-colors group"
                            >
                                <div className="bg-[#222] p-3 rounded-lg w-fit mb-4 group-hover:bg-[#9fe870]/10">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">How Sabelo works</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Getting started is easy. Follow these simple steps to take control of your finances.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="space-y-8">
                                {[
                                    {
                                        icon: <Wallet className="h-6 w-6 text-[#9fe870]" />,
                                        title: "Connect your accounts",
                                        description:
                                            "Securely link your bank accounts and credit cards to automatically import transactions and balances.",
                                        steps: [
                                            "Choose from 10,000+ supported financial institutions",
                                            "Bank-level encryption keeps your data secure",
                                            "Automatic categorization of transactions",
                                        ],
                                    },
                                    {
                                        icon: <TrendingUp className="h-6 w-6 text-[#9fe870]" />,
                                        title: "Track your spending",
                                        description:
                                            "Get a clear picture of where your money goes with automatic categorization and visual breakdowns.",
                                        steps: [
                                            "Customizable categories for your unique needs",
                                            "Real-time updates as you spend",
                                            "Identify spending patterns and trends",
                                        ],
                                    },
                                    {
                                        icon: <BellRing className="h-6 w-6 text-[#9fe870]" />,
                                        title: "Set goals and get insights",
                                        description:
                                            "Create budgets, set savings goals, and receive personalized insights to optimize your finances.",
                                        steps: [
                                            "Smart alerts for unusual spending",
                                            "Personalized recommendations based on your habits",
                                            "Track progress toward financial goals",
                                        ],
                                    },
                                ].map((step, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 transition-all hover:border-[#9fe870] hover:shadow-lg hover:shadow-[#9fe870]/5"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[#222] p-3 rounded-lg">{step.icon}</div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                                <p className="text-gray-400 mb-4">{step.description}</p>
                                                <ul className="space-y-2">
                                                    {step.steps.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <CheckCircle className="h-5 w-5 text-[#9fe870] shrink-0 mt-0.5" />
                                                            <span className="text-sm text-gray-300">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative">
                                <div className="absolute -z-10 w-64 h-64 bg-[#9fe870] rounded-full filter blur-[120px] opacity-20"></div>
                                <div className="relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[40px] border-4 border-[#333] overflow-hidden shadow-xl">
                                    {/* Phone notch */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>

                                    {/* App UI */}
                                    <div className="h-full bg-[#0c0c0c] pt-8 px-4 overflow-hidden">
                                        {/* App header */}
                                        <div className="flex justify-between items-center mb-6">
                                            <div>
                                                <div className="text-xs text-gray-400">Good morning</div>
                                                <div className="font-bold">Alex</div>
                                            </div>
                                            <div className="h-8 w-8 rounded-full bg-[#222] flex items-center justify-center">
                                                <div className="h-3 w-3 rounded-full bg-[#9fe870]"></div>
                                            </div>
                                        </div>

                                        {/* Balance card */}
                                        <div className="bg-gradient-to-br from-[#9fe870] to-[#7bc952] rounded-xl p-4 mb-6 text-black">
                                            <div className="text-xs opacity-80 mb-1">Total Balance</div>
                                            <div className="text-2xl font-bold mb-4">$12,580.35</div>
                                            <div className="flex justify-between">
                                                <div>
                                                    <div className="text-xs opacity-80">Income</div>
                                                    <div className="font-medium">$5,240</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs opacity-80">Expenses</div>
                                                    <div className="font-medium">$1,420</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quick actions */}
                                        <div className="grid grid-cols-4 gap-2 mb-6">
                                            {[
                                                { icon: "↑", label: "Send" },
                                                { icon: "↓", label: "Receive" },
                                                { icon: "📊", label: "Stats" },
                                                { icon: "+", label: "More" },
                                            ].map((action, i) => (
                                                <div key={i} className="flex flex-col items-center">
                                                    <div className="h-12 w-12 rounded-full bg-[#222] flex items-center justify-center mb-1">
                                                        <span>{action.icon}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-400">{action.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Transactions */}
                                        <div>
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="font-medium">Recent Transactions</div>
                                                <div className="text-xs text-[#9fe870]">See all</div>
                                            </div>

                                            <div className="space-y-4">
                                                {[
                                                    { name: "Grocery Store", amount: "-$85.20", date: "Today", icon: "🛒" },
                                                    { name: "Salary Deposit", amount: "+$3,200.00", date: "Yesterday", icon: "💼" },
                                                    { name: "Electric Bill", amount: "-$124.50", date: "Jan 15", icon: "⚡" },
                                                    { name: "Streaming Service", amount: "-$12.99", date: "Jan 12", icon: "📺" },
                                                ].map((tx, i) => (
                                                    <div key={i} className="flex items-center gap-3 bg-[#1a1a1a] p-3 rounded-lg">
                                                        <div className="h-10 w-10 rounded-full bg-[#222] flex items-center justify-center">
                                                            <span>{tx.icon}</span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="font-medium text-sm">{tx.name}</div>
                                                            <div className="text-xs text-gray-400">{tx.date}</div>
                                                        </div>
                                                        <div className={tx.amount.startsWith("+") ? "text-[#9fe870]" : "text-white"}>
                                                            {tx.amount}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financial Goals Section */}
            <section id="goals" className="py-20 bg-[#0a0a0a]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Achieve your financial goals</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Set meaningful targets, track your progress, and celebrate your financial wins with Sabelo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="space-y-8">
                                {[
                                    {
                                        icon: <Target className="h-6 w-6 text-[#9fe870]" />,
                                        title: "Custom savings goals",
                                        description: "Create personalized goals for anything from emergency funds to dream vacations.",
                                    },
                                    {
                                        icon: <TrendingUp className="h-6 w-6 text-[#9fe870]" />,
                                        title: "Progress tracking",
                                        description: "Watch your progress with visual indicators that keep you motivated and on track.",
                                    },
                                    {
                                        icon: <CreditCard className="h-6 w-6 text-[#9fe870]" />,
                                        title: "Debt reduction plans",
                                        description: "Create strategies to pay down credit cards, loans, and other debts faster.",
                                    },
                                    {
                                        icon: <Wallet className="h-6 w-6 text-[#9fe870]" />,
                                        title: "Milestone celebrations",
                                        description: "Celebrate your wins with achievement badges and progress milestones.",
                                    },
                                ].map((goal, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 transition-all hover:border-[#9fe870] hover:shadow-lg hover:shadow-[#9fe870]/5"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[#222] p-3 rounded-lg">{goal.icon}</div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                                                <p className="text-gray-400">{goal.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -z-10 w-64 h-64 bg-[#9fe870] rounded-full filter blur-[120px] opacity-20"></div>

                                <div className="bg-[#1a1a1a] border border-[#333] rounded-xl overflow-hidden shadow-2xl">
                                    <div className="p-4 border-b border-[#333] flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="text-sm text-gray-400">Financial Goals</div>
                                        <div></div>
                                    </div>

                                    <div className="p-6">
                                        <div className="bg-[#222] p-4 rounded-lg mb-4">
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="font-medium">My Goals</div>
                                                <div className="text-xs text-[#9fe870]">Add New Goal</div>
                                            </div>

                                            {[
                                                { name: "Emergency Fund", target: 10000, current: 6500, color: "#3b82f6" },
                                                { name: "Paris Vacation", target: 5000, current: 3750, color: "#f97316" },
                                                { name: "New Car", target: 20000, current: 5000, color: "#8b5cf6" },
                                            ].map((goal, i) => (
                                                <div key={i} className="mb-4 last:mb-0">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <div className="text-sm font-medium">{goal.name}</div>
                                                        <div className="text-xs text-gray-400">
                                                            ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                                                        </div>
                                                    </div>
                                                    <div className="h-2 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full w-[${(goal.current / goal.target) * 100}%] bg-[${goal.color}]`}
                                                        ></div>
                                                    </div>
                                                    <div className="flex justify-between items-center mt-1">
                                                        <div className="text-xs text-gray-400">
                                                            {Math.round((goal.current / goal.target) * 100)}% complete
                                                        </div>
                                                        <div className="text-xs text-[#9fe870]">
                                                            ${(goal.target - goal.current).toLocaleString()} to go
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-[#222] p-4 rounded-lg">
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="font-medium">Goal Timeline</div>
                                                <div className="text-xs text-gray-400">Projected completion</div>
                                            </div>

                                            <div className="space-y-4">
                                                {[
                                                    { name: "Emergency Fund", date: "August 2023", months: 3 },
                                                    { name: "Paris Vacation", date: "December 2023", months: 7 },
                                                    { name: "New Car", date: "May 2024", months: 12 },
                                                ].map((timeline, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-10 w-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#9fe870] font-bold">
                                                            {timeline.months}
                                                        </div>
                                                        <div>
                                                            <div className="text-sm">{timeline.name}</div>
                                                            <div className="text-xs text-gray-400">{timeline.date}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-4 pt-4 border-t border-[#333]">
                                                <div className="text-center">
                                                    <div className="text-sm font-medium mb-1">Stay on track with automatic contributions</div>
                                                    <button className="w-full py-2 bg-[#1a1a1a] hover:bg-[#333] rounded-md text-sm text-[#9fe870] border border-[#9fe870]/30">
                                                        Set up recurring transfers
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Choose the plan that works best for your financial needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Free",
                                price: "0 ARS",
                                description: "Perfect for getting started",
                                features: ["Basic expense tracking", "Up to 2 accounts", "Monthly reports", "Mobile access"],
                                cta: "Get Started",
                                popular: false,
                            },
                            {
                                name: "Premium",
                                price: "2.500 ARS",
                                period: "/month",
                                description: "For serious financial management",
                                features: [
                                    "Unlimited expense tracking",
                                    "Unlimited accounts",
                                    "Advanced analytics",
                                    "Budget planning",
                                    "Goal setting",
                                    "Priority support",
                                ],
                                cta: "Get Premium",
                                popular: true,
                            },
                            {
                                name: "Family",
                                price: "4.900 ARS",
                                period: "/month",
                                description: "For families and small teams",
                                features: [
                                    "Everything in Premium",
                                    "Up to 5 users",
                                    "Shared accounts",
                                    "Family budgeting",
                                    "Spending controls",
                                    "24/7 support",
                                ],
                                cta: "Get Family Plan",
                                popular: false,
                            },
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`bg-[#1a1a1a] border ${plan.popular ? "border-[#9fe870]" : "border-[#333]"} rounded-xl p-8 relative`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#9fe870] text-black px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-end mb-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
                                </div>
                                <p className="text-gray-400 mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-[#9fe870]/10 flex items-center justify-center mr-3">
                                                <div className="h-2 w-2 rounded-full bg-[#9fe870]"></div>
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className={`w-full py-6 ${plan.popular ? "bg-[#9fe870] hover:bg-[#8ad75f] text-black" : "bg-[#222] hover:bg-[#333] text-white"}`}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#333] rounded-lg px-6 py-3">
                            <div className="w-8 h-8 bg-[#009ee3] rounded-md flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                                    <path
                                        d="M19.6 6.8C18.1 5 16 4 13.7 4c-2.1 0-4.1.9-5.6 2.4-1.4 1.5-2.2 3.5-2.2 5.6 0 2.1.8 4.1 2.2 5.6 1.5 1.5 3.5 2.4 5.6 2.4 2.3 0 4.4-1 5.9-2.8.7-.9 1.2-1.9 1.5-3H16c-.3.5-.7.9-1.2 1.2-.8.5-1.7.7-2.6.6-.9-.1-1.7-.5-2.4-1.1-.6-.6-1-1.4-1.1-2.3h11c0-.2.1-.4.1-.6.1-2.1-.7-4.1-2.2-5.6zm-8.7 4c.1-.9.5-1.7 1.1-2.3.6-.6 1.5-1 2.3-1.1.9-.1 1.8.1 2.6.6.5.3.9.7 1.2 1.2H11c-.1-.5-.1-.9-.1-1.4v3h.1z"
                                        fill="#fff"
                                    />
                                </svg>
                            </div>
                            <span className="text-white">All paid plans can be processed through MercadoPago</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-[#0a0a0a]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">What our users say</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {"Don't just take our word for it. Here's what people are saying about Sabelo."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Sabelo has completely changed how I manage my money. I've saved over $3,000 in just 6 months!",
                                name: "Sarah Johnson",
                                title: "Marketing Manager",
                                avatar: "/placeholder.svg?height=64&width=64",
                                avatarBg: "bg-blue-400",
                            },
                            {
                                quote:
                                    "The analytics are incredible. I finally understand where my money is going and how to optimize my spending.",
                                name: "Michael Chen",
                                title: "Software Engineer",
                                avatar: "/placeholder.svg?height=64&width=64",
                                avatarBg: "bg-green-500",
                            },
                            {
                                quote:
                                    "As someone who was terrible with finances, this app has been a lifesaver. Simple, intuitive, and effective.",
                                name: "Emma Rodriguez",
                                title: "Freelance Designer",
                                avatar: "/placeholder.svg?height=64&width=64",
                                avatarBg: "bg-purple-500",
                            },
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-[#1a1a1a] border border-[#333] rounded-xl p-8">
                                <div className="flex mb-6">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <div key={star} className="text-[#9fe870]">
                                            ★
                                        </div>
                                    ))}
                                </div>
                                <p className="text-lg mb-6">{`"${testimonial.quote}"`}</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                            className={testimonial.avatarBg}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-gray-400 text-sm">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently asked questions</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">{"Got questions? We've got answers."}</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                question: "Is my financial data secure?",
                                answer:
                                    "Yes, we take security very seriously. All your data is encrypted using bank-level security standards, and we never share your information with third parties without your explicit consent.",
                            },
                            {
                                question: "Can I cancel my subscription anytime?",
                                answer:
                                    "You can cancel your subscription at any time with no questions asked. You'll continue to have access until the end of your billing period.",
                            },
                            {
                                question: "How do I connect my bank accounts?",
                                answer:
                                    "Connecting your accounts is simple and secure. We use industry-standard encryption and secure APIs to connect to your financial institutions. Just select your bank, enter your credentials, and we'll handle the rest.",
                            },
                            {
                                question: "Is there a mobile app available?",
                                answer:
                                    "Yes, we have mobile apps for both iOS and Android devices. You can download them from the App Store or Google Play Store and access your finances on the go.",
                            },
                            {
                                question: "Can I export my financial data?",
                                answer:
                                    "Yes, you can export your data in various formats including CSV, PDF, and Excel. This makes it easy to use your data in other applications or for tax purposes.",
                            },
                        ].map((faq, index) => (
                            <div key={index} className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                                <p className="text-gray-400">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#222] border border-[#333] rounded-2xl p-12 relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#9fe870] rounded-full filter blur-[120px] opacity-10"></div>

                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to take control of your finances?</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Join thousands of users who have transformed their financial lives with Sabelo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-[#9fe870] hover:bg-[#8ad75f] text-black text-lg py-6 px-8">
                                    Get Started Free
                                </Button>
                                <Button variant="outline" className="border-[#333] text-white hover:bg-[#1a1a1a] text-lg py-6 px-8">
                                    See how it works
                                </Button>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">
                                No credit card required. Free 14-day trial. Pay with MercadoPago.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-[#222] bg-[#0c0c0c]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-8 w-8 rounded-md bg-[#9fe870] flex items-center justify-center text-black font-bold">
                                    S
                                </div>
                                <span className="text-[#9fe870] font-bold text-xl">Sabelo</span>
                            </div>
                            <p className="text-gray-400 mb-4">The modern way to manage your finances.</p>
                            <div className="flex gap-4">
                                <Link href="#" className="h-10 w-10 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="h-10 w-10 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Mobile App
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Integrations
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Guides
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        API Docs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-[#222] pt-8 text-center text-gray-400 text-sm">
                        <p>© {new Date().getFullYear()} Sabelo. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
