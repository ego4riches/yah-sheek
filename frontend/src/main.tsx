import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from "@/app/App.tsx";
import {APP_NAME} from "@/shared";

const container = document.getElementById('root')!;
const root = createRoot(container);
document.title = APP_NAME;

root.render(
        <StrictMode>
            <App/>
        </StrictMode>,
);