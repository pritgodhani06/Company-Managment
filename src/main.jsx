import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import RootRouters from "./router/RootRouter";
createRoot(document.getElementById("root")).render(<StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <RouteProvider>
                   <RootRouters />
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>);