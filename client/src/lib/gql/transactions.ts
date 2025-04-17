import { gql } from "@apollo/client";

export const GET_RECENT_TRANSACTIONS = gql`
    query GetRecentTransactions($userId: ID!, $page: Int, $pageSize: Int) {
        transactions(userId: $userId, page: $page, pageSize: $pageSize) {
            items {
                id
                amount
                type
                date
                user {
                    email
                }
                account {
                    bankName
                    cbu
                    currency
                }
            }
            total
            currentPage
            totalPages
        }
    }
`;
