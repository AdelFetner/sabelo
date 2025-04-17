import { Progress } from "../ui/progress"

export function Goals() {
    const goals = [
        {
            name: "Paris",
            progress: 75,
        },
        {
            name: "Dream Car",
            progress: 50,
        },
        {
            name: "Emergency Funds",
            progress: 40,
        },
    ]

    return (
        <div className="space-y-6">
            {goals.map((goal) => (
                <div key={goal.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span>{goal.name}</span>
                        <span className="text-gray-400">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2 bg-[#374151]" />
                </div>
            ))}
        </div>
    )
}

