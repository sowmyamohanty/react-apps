import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import AppHeader from "@components/AppHeader";
import Sidebar from "@components/Sidebar";
import AppFooter from "@components/AppFooter";
import routes from "@/routes";

import { Routes, Route } from "react-router-dom";

const drawerWidth = 240;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
        <AppHeader />
        <Box sx={{ display: "flex", flex: 1 }}>
          <Sidebar drawerWidth={drawerWidth} />
          <Box
            component="main"
            sx={{
              flex: 1,
              p: 3,
              ml: { sm: `${drawerWidth}px` },
              backgroundColor: (theme) => theme.palette.background.default,
            }}
          >
            <Routes>
              {routes.map(({ path, element }, idx) => (
                <Route key={idx} path={path} element={element} />
              ))}
            </Routes>
          </Box>
        </Box>
        <AppFooter />
      </Box>
    </BrowserRouter>
  );
};

export default App;
