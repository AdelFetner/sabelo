import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"

interface MonthlySummaryProps {
    amount: string
    change: number
    type: "income" | "expenses" | "savings"
}

export function MonthlySummary({ amount, change, type }: MonthlySummaryProps) {
    const isPositive = change > 0
    const changeText = `${isPositive ? "+" : ""}${change}%`

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Monthly {type}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-white">{amount}</div>
                <div className="mt-1 flex items-center text-xs">
                    {isPositive ? (
                        <ArrowUp className="mr-1 h-3 w-3 text-[#0fcf9c]" />
                    ) : (
                        <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                    )}
                    <span className={isPositive ? "text-[#0fcf9c]" : "text-red-500"}>{changeText}</span>
                    <span className="ml-1 text-gray-400">Compared to last month</span>
                </div>
            </CardContent>
        </Card>
    )
}

