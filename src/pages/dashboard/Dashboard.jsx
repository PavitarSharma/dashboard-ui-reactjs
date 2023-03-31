import { Box } from "@mui/material";
import React from "react";
import { tasks } from "../../assets/data";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import Filter from "../../components/dashboard/Filter";
import Tasks from "../../components/Tasks";
import LeftAnimation from "../../utils/LeftAnimation";

const Dashboard = () => {
  const backlogTasks = [...tasks].filter((task) => task.isBacklog === true);
  const todoTasks = [...tasks].filter((task) => task.isTodo === true);
  const proesssingTasks = [...tasks].filter(
    (task) => task.isProcessing === true
  );
  const completedTasks = [...tasks].filter((task) => task.isCompleted === true);
  return (
    <Box>
      {/* dashboard header*/}
      <DashboardHeader />

      {/* Dashboard Filter */}
      <Filter />

      {/* dashbard tasks */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            lg: "repeat(4, 1fr)",
            md: "repeat(3, 1fr)",
            sm: "1fr 1fr",
          },
          gap: "20px",
        }}
      >
        <LeftAnimation>
          <Tasks title="Backlog Tasks" backlogTask={5} tasks={backlogTasks} />
        </LeftAnimation>

        <LeftAnimation>
          <Tasks title="To Do Tasks" backlogTask={3} tasks={todoTasks} />
        </LeftAnimation>

        <LeftAnimation>
          <Tasks
            title="In Process Tasks"
            backlogTask={2}
            tasks={proesssingTasks}
          />
        </LeftAnimation>

        <LeftAnimation>
          <Tasks title="Done" backlogTask={5} tasks={completedTasks} />
        </LeftAnimation>
      </Box>
    </Box>
  );
};

export default Dashboard;
