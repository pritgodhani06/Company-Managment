import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import RootRouters from "./router/RootRouter";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/base/errorFallback/ErrorFallback";

function logError(error, info) {
  console.error("Error:", error);
  console.error("Component Stack:", info.componentStack);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
    >
      <ThemeProvider>
        <BrowserRouter>
          <RouteProvider>
            <RootRouters />
          </RouteProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);