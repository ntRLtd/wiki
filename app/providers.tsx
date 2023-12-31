// app/providers.tsx
"use client";

import Script from "next/script";
import loadable from "@loadable/component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export const iconparkUrl =
  "https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/icons_29249_4.74b2afd012c6146ba0472de7776191aa.js";

const NullDevTool = () => null;
const QueryClientDevTool =
  process.env.NODE_ENV === "development"
    ? loadable(() => import("@tanstack/react-query-devtools"), {
        resolveComponent: (module) => module.ReactQueryDevtools,
        ssr: false,
      })
    : NullDevTool;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 0,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Script src={iconparkUrl} />
      <QueryClientDevTool buttonPosition="bottom-left" />
      <CacheProvider>
        <ChakraProvider toastOptions={{ defaultOptions: { position: "top" } }}>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
