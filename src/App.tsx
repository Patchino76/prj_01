import { Stack } from "@mui/material";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoImg from "./assets/direct-hit.png";
import doingImg from "./assets/glowing-star.png";
import doneImg from "./assets/check-mark-button.png";
import { GoGoal } from "react-icons/go";
import { TbProgressCheck } from "react-icons/tb";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

function App() {
  return (
    <>
      <div
        style={{
          width: "80vw",
          display: "flex",
          border: "1px solid black",
        }}
      >
        <TaskForm></TaskForm>{" "}
      </div>
      <div style={{ width: "80vw", border: "1px solid black", marginTop: 20 }}>
        <Stack direction="row" justifyContent="space-around">
          <TaskColumn title="To Do">
            <GoGoal />
          </TaskColumn>
          <TaskColumn title="In Progress">
            <TbProgressCheck />
          </TaskColumn>
          <TaskColumn title="Done">
            <IoCheckmarkDoneCircleOutline />
          </TaskColumn>
        </Stack>
      </div>
    </>
  );
}

export default App;
