import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "theme/theme.ts";
import router from "routes/router.tsx";
import EditorProvider from "providers/EditorProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <EditorProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </EditorProvider>
    </ThemeProvider>
  </StrictMode>,
);
