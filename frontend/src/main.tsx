import {App} from "@/app/App.tsx";
import {APP_NAME, queryClient} from "@/shared";
import {QueryClientProvider} from "@tanstack/react-query";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

const container = document.getElementById('root')!;
const root = createRoot(container);
document.title = APP_NAME;

root.render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </StrictMode>,
);