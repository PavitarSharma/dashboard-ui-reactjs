import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context/ContextProvider";
import RightAnimation from "./utils/RightAnimation";
import Dashboard from "./pages/dashboard/Dashboard"

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#F7F8FA",
        }}
      >
        {activeMenu ? (
          <Box
            sx={{
              minWidth: { lg: "18rem", xs: "100%" },
              position: { lg: "static", xs: "fixed" },
              overflowY: { lg: "hidden", xs: "scroll" },
              borderRight: "1px solid #EBEEF2",
              zIndex: { lg: 1, xs: 900 },
              height: "100%",
           
              top: "80px"
            }}
          >
            <Sidebar />
          </Box>
        ) : (
          <Box
            sx={{
              width: "0px",
              overflowY: "scroll",
              scrollBehavior: "smooth",
            }}
          >
            <Sidebar />
          </Box>
        )}
        <main className="main">
          <Box sx={{ padding: "20px", width: "100%", flex: 2 }}>
  
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
  
          </Box>
        </main>

        <RightAnimation>
          <Box
            sx={{
              width: "5rem",
              right: 0,
              borderLeft: "1px solid #EBEEF2",
              minHeight: "100vh",
              display: { lg: "flex", xs: "none" },
              justifyContent: "center",
            }}
          >
            <RightSidebar />
          </Box>
        </RightAnimation>
      </Box>
    </BrowserRouter>
  );
};

export default App;
