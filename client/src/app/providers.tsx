"use client";
import React, { ReactNode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const Providers = ({ children }: { children: ReactNode }) => {
    const client = new ApolloClient({
        uri: "http://localhost:3000/graphql",
        cache: new InMemoryCache(),
        defaultOptions: {
            watchQuery: {
                errorPolicy: 'all',
            },
            query: {
                errorPolicy: 'all',
            },
        }
    });
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};