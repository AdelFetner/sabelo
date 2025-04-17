"use client"
import { useQuery } from '@apollo/client';
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { GET_RECENT_TRANSACTIONS } from '@/lib/gql/transactions';

interface Transaction {
    id: string;
    description: string;
    category: string;
    account?: {
        bankName: string;
        currency: string;
    };
    date: string;
    type: 'INCOME' | 'EXPENSE';
    amount: string;
}

export function TransactionHistory() {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 5;

    const { data, loading, error, refetch } = useQuery(GET_RECENT_TRANSACTIONS, {
        variables: {
            userId: "37643e14-97a2-4670-b91e-c9e0828b9015",
            page: page,
            pageSize: pageSize
        },
        fetchPolicy: "network-only",
        onCompleted: (newData) => {
            setTotalPages(newData?.transactions.totalPages || 1);
        }
    });


    const currentData = loading ? data : data;

    const formatCurrency = (amount: string, currency: string) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: currency || 'ARS',
            minimumFractionDigits: 2
        }).format(parseFloat(amount));
    };

    const handlePreviousPage = () => {
        setPage(prev => Math.max(1, prev - 1));
        refetch();
    };

    const handleNextPage = () => {
        setPage(prev => prev + 1);
        refetch();
    };

    if (error) return <div>Error loading transactions</div>;

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle>Recent Transactions</CardTitle>
                <TooltipProvider>
                    <div className="flex items-center gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 hover:bg-[#1f2328] border-none"
                                    onClick={handlePreviousPage}
                                    disabled={page === 1}
                                >
                                    <ArrowLeft className="h-4 w-4 text-gray-400" />
                                    <span className="sr-only">Previous page</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Previous Page</p>
                            </TooltipContent>
                        </Tooltip>

                        <span className="text-sm text-gray-400 mx-2">
                            Page {page} of {totalPages}
                        </span>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 bg-inherit hover:bg-[#1f2328] border-none"
                                    onClick={handleNextPage}
                                    disabled={page >= (currentData?.transactions.totalPages || 1)}
                                >
                                    <ArrowRight className="h-4 w-4 text-gray-400 border-none" />
                                    <span className="sr-only">Next page</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Next Page</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Description</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Account</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            Array(5).fill(0).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                                </TableRow>
                            ))
                        ) : data?.transactions.items.map((tx: Transaction) => (
                            <TableRow key={tx.id}>
                                <TableCell className="font-medium">
                                    {tx.description || 'No description'}
                                </TableCell>
                                <TableCell>
                                    <Badge variant="secondary" className="capitalize">
                                        {tx.category || 'Uncategorized'}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {tx.account ? (
                                        <span>{tx.account.bankName}</span>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}