import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"

export function TransactionHistory() {
    const transactions = [
        {
            id: "1",
            user: "Ellie Lismie",
            accountNumber: "ABC-5767",
            maskedNumber: "••• ••• 567",
            date: "05-AUG-2024",
            amount: "10000",
            status: "Confirmed",
        },
        {
            id: "2",
            user: "Ellie Lismie",
            accountNumber: "ABC-5767",
            maskedNumber: "••• ••• 567",
            date: "05-AUG-2024",
            amount: "10000",
            status: "Cancelled",
        },
        {
            id: "3",
            user: "Ellie Lismie",
            accountNumber: "ABC-5767",
            maskedNumber: "••• ••• 567",
            date: "05-AUG-2024",
            amount: "10000",
            status: "Pending",
        },
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Confirmed":
                return "bg-[#0fcf9c] text-black"
            case "Cancelled":
                return "bg-red-400 text-black"
            case "Pending":
                return "bg-yellow-200 text-black"
            default:
                return "bg-gray-400 text-black"
        }
    }

    return (
        <div className="space-y-4">
            {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt={transaction.user} />
                            <AvatarFallback>EL</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium text-white">{transaction.user}</p>
                            <p className="text-xs text-gray-400">{transaction.accountNumber}</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400">{transaction.maskedNumber}</div>
                    <div className="text-sm text-gray-400">{transaction.date}</div>
                    <div className="text-sm font-medium text-white">{transaction.amount}</div>
                    <Badge className={`${getStatusColor(transaction.status)}`}>{transaction.status}</Badge>
                </div>
            ))}
        </div>
    )
}

