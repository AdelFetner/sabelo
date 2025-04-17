"use client"
import { useQuery } from '@apollo/client';
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";
import { GET_RECENT_TRANSACTIONS } from '@/lib/gql/transactions';

export function TransactionHistory() {
    const { data, loading, error } = useQuery(GET_RECENT_TRANSACTIONS, {
        variables: {
            userId: "37643e14-97a2-4670-b91e-c9e0828b9015",
            page: 1,
            pageSize: 5
        }
    });

    const formatCurrency = (amount: string, currency: string) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: currency || 'ARS',
            minimumFractionDigits: 2
        }).format(parseFloat(amount));
    };

    const maskCBU = (cbu?: string) => {
        if (!cbu) return 'N/A';
        return `${cbu.slice(0, 4)}****${cbu.slice(-4)}`;
    };

    if (error) return <div>Error loading transactions</div>;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Account</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Type</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            Array(5).fill(0).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-[70px]" /></TableCell>
                                </TableRow>
                            ))
                        ) : data?.transactions.items.map((tx) => (
                            <TableRow key={tx.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-6 w-6">
                                            <AvatarFallback>
                                                {tx.user.email[0].toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        {tx.user.email}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {tx.account ? (
                                        <div className="flex flex-col">
                                            <span>{tx.account.bankName}</span>
                                            <span className="text-xs text-muted-foreground">
                                                {maskCBU(tx.account.cbu)}
                                            </span>
                                        </div>
                                    ) : 'Cash Transaction'}
                                </TableCell>
                                <TableCell>
                                    {new Date(tx.date).toLocaleDateString('es-AR', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                </TableCell>
                                <TableCell className={tx.type === 'INCOME' ? 'text-green-500' : 'text-red-500'}>
                                    {formatCurrency(tx.amount, tx.account?.currency || 'ARS')}
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={tx.type === 'INCOME' ? 'default' : 'destructive'}
                                        className="capitalize"
                                    >
                                        {tx.type.toLowerCase()}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}