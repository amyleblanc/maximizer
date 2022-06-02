import "./App.css";
import Tag from "./components/Tag";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material/";

const apiURL =
  "https://ej2services.syncfusion.com/production/web-services/api/Kanban";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!data) return null;

  const filterTaskStatus = (array, status) => {
    const filtered = [];
    for (const obj of array) {
      if (obj.Status === status) {
        filtered.push(obj);
      }
    }
    return filtered;
  };

  const todoTasks = filterTaskStatus(data, "Open");
  const inProgressTasks = filterTaskStatus(data, "InProgress");
  const testingTasks = filterTaskStatus(data, "Testing");
  const doneTasks = filterTaskStatus(data, "Close");

  return (
    <main>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 3,
          }}
        >
          {/* To Do Tasks*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ECEEEE",
                margin: 1,
              }}
            >
              <Typography sx={{ fontSize: 16, fontWeight: "bold", padding: 2 }}>
                To Do - {todoTasks.length} Items
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ECEEEE",
                margin: 1,
              }}
            >
              {todoTasks.map((task) => (
                <Card sx={{ width: 350, margin: 3 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "bold" }}
                      gutterBottom
                    >
                      Task - {task.Id}
                    </Typography>
                    <br />
                    <Typography variant="p">{task.Summary}</Typography>
                  </CardContent>
                  {task.Tags && <Tag task={task} />}
                </Card>
              ))}
            </Box>
          </Box>

          {/* In Progress Tasks */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ECEEEE",
                margin: 1,
              }}
            >
              <Typography sx={{ fontSize: 16, fontWeight: "bold", padding: 2 }}>
                In Progress - {inProgressTasks.length} Items
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ECEEEE",
                margin: 1,
              }}
            >
              {inProgressTasks.map((task) => (
                <Card sx={{ width: 350, margin: 3 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "bold" }}
                      gutterBottom
                    >
                      Task - {task.Id}
                    </Typography>
                    <br />
                    <Typography variant="p">{task.Summary}</Typography>
                  </CardContent>
                  {task.Tags && <Tag task={task} />}
                </Card>
              ))}
            </Box>
          </Box>

          {/* Testing Tasks */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ECEEEE",
                margin: 1,
              }}
            >
              <Typography sx={{ fontSize: 16, fontWeight: "bold", padding: 2 }}>
                Testing - {testingTasks.length} Items
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ECEEEE",
                margin: 1,
              }}
            >
              {testingTasks.map((task) => (
                <Card sx={{ width: 350, margin: 3 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "bold" }}
                      gutterBottom
                    >
                      Task - {task.Id}
                    </Typography>
                    <br />
                    <Typography variant="p">{task.Summary}</Typography>
                  </CardContent>
                  {task.Tags && <Tag task={task} />}
                </Card>
              ))}
            </Box>
          </Box>

          {/* Done Tasks */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ECEEEE",
                margin: 1,
              }}
            >
              <Typography sx={{ fontSize: 16, fontWeight: "bold", padding: 2 }}>
                Done - {doneTasks.length} Items
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ECEEEE",
                margin: 1,
              }}
            >
              {doneTasks.map((task) => (
                <Card sx={{ width: 350, margin: 3 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "bold" }}
                      gutterBottom
                    >
                      Task - {task.Id}
                    </Typography>
                    <br />
                    <Typography variant="p">{task.Summary}</Typography>
                  </CardContent>
                  {task.Tags && <Tag task={task} />}
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </main>
  );
}

export default App;
