import { Box } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context/ContextProvider";
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

const App = () => {
  const { activeMenu, activeUserMenu } = useStateContext();
  return (
    <BrowserRouter>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "white",
        }}
        className="header"
      >
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "100px",
        }}
      >
        {activeMenu ? (
          <Box
            sx={{
              width: "18rem",
              position: "fixed",
              boxShadow: "rgb(113 122 131 / 11%) 0px 7px 30px 0px",
              background: "#fff",
              left: 0,
            }}
          >
            <Sidebar />
          </Box>
        ) : (
          <Box sx={{ width: "0px" }}>
            <Sidebar />
          </Box>
        )}

        <Box
          sx={{
            minHeight: "100vh",
            width: "100%",
            marginLeft: activeMenu && "18rem",
            flex: !activeMenu && 2,
          }}
        >
          <main className="main">
            <Box sx={{ padding: "20px" }}>
              <Suspense>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                </Routes>
              </Suspense>
            </Box>
          </main>
          {activeUserMenu ? (
            <Box
              className="sidebar"
              sx={{
                background: "red",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                position: "fixed",
                right: 0,
                top: "10%",
                scrollBehavior: "smooth",
              }}
            >
              <RightSidebar />
            </Box>
          ) : (
            <Box className="sidebar" sx={{ width: "0px" }}>
              <RightSidebar />
            </Box>
          )}
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
