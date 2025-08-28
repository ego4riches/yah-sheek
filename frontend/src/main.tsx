import { App } from "@/app/App";
import { APP_NAME, queryClient } from "@/shared";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root")!;
const root = createRoot(container);
document.title = APP_NAME;

root.render(
        <StrictMode>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <App/>
                </QueryClientProvider>
            </HelmetProvider>
        </StrictMode>
);