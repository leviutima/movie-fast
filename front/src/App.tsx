import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { queryClient } from "./lib/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./context/theme/themeProvider";

export function App() {
  return (
    <ThemeProvider storageKey="movie-fast-theme" defaultTheme="dark">
      <HelmetProvider>
        <Helmet titleTemplate="%s | Movie Fast" />
        <Toaster richColors closeButton />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}
