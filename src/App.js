// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
import {Avatar, Box, Card, CardContent, Container, Typography} from '@mui/material/';

const apiURL = "https://ej2services.syncfusion.com/production/web-services/api/Kanban";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setData(response.data);
      console.log("response: ", response.data);
    }).catch(error => {
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
  }

  const getInitials = (string) => {
    const initials = string
    .split(" ")
    .map(word => word[0])
    .join("");

    return initials.toUpperCase();
  }

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
          }}>

          {/* To Do */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
          }}>
            <Box sx={{
              backgroundColor: "#ECEEEE",
              margin: 1,
            }}>
              <Typography sx={{ fontSize: 16, fontWeight: "bold", padding: 2 }}>
                To Do - {todoTasks.length} Items
              </Typography>
            </Box>
            <Box sx={{
              backgroundColor: "#ECEEEE",
              margin: 1,
            }}>
              {todoTasks.map((task) => (
                <Card sx={{ width: 350, margin: 3 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                      Task - {task.Id}
                    </Typography>
                    <br/>
                    <Typography variant="p">
                      {task.Summary}
                    </Typography>
                    </CardContent>
                  {task.Tags && (
                    <CardContent sx={{paddingLeft: "8px"}}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                      }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                        }}>
                          {task.Tags.split(",").map((tag) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                margin: 1,
                                marginRight: 0,
                                backgroundColor: "#ECEEEE",
                                border: 1,
                                borderColor: "#ECEEEE",
                                borderRadius: "8px",
                                padding: "4px",
                            }}>
                              <Typography color="gray" variant="p">{tag}</Typography>
                            </Box>
                          ))}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignSelf: "center",
                          }}
                        >    
                          <Avatar>
                            {getInitials(task.Assignee)}
                          </Avatar>
                        </Box>
                      </Box>
                    </CardContent>
                  )}
                </Card>
              ))}
            </Box>
          </Box>

          {/* In Progress */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
          }}>
            <Box sx={{
              backgroundColor: "#ECEEEE",
              margin: 1,
            }}>
              <Typography sx={{ fontSize: 16, fontWeight: "bold", padding: 2 }}>
                In Progress - {inProgressTasks.length} Items
              </Typography>
            </Box>
            <Box sx={{
              backgroundColor: "#ECEEEE",
              margin: 1,
            }}>
              {inProgressTasks.map((task) => (
                <Card sx={{ width: 350, margin: 3 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                      Task - {task.Id}
                    </Typography>
                    <br/>
                    <Typography variant="p">
                      {task.Summary}
                    </Typography>
                    </CardContent>
                  {task.Tags && (
                    <CardContent sx={{paddingLeft: "8px"}}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                      }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                        }}>
                          {task.Tags.split(",").map((tag) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                margin: 1,
                                marginRight: 0,
                                backgroundColor: "#ECEEEE",
                                border: 1,
                                borderColor: "#ECEEEE",
                                borderRadius: "8px",
                                padding: "4px",
                            }}>
                              <Typography color="gray" variant="p">{tag}</Typography>
                            </Box>
                          ))}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignSelf: "center",
                          }}
                        >    
                          <Avatar>
                            {getInitials(task.Assignee)}
                          </Avatar>
                        </Box>
                      </Box>
                    </CardContent>
                  )}
                </Card>
              ))}
            </Box>
          </Box>

          {/* Testing */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
          }}>
            <Box sx={{
              backgroundColor: "#ECEEEE",
              margin: 1,
            }}>
              <Typography sx={{ fontSize: 16, fontWeight: "bold", padding: 2 }}>
                Testing - {testingTasks.length} Items
              </Typography>
            </Box>
            <Box sx={{
              backgroundColor: "#ECEEEE",
              margin: 1,
            }}>
              {testingTasks.map((task) => (
                <Card sx={{ width: 350, margin: 3 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                      Task - {task.Id}
                    </Typography>
                    <br/>
                    <Typography variant="p">
                      {task.Summary}
                    </Typography>
                    </CardContent>
                  {task.Tags && (
                    <CardContent sx={{paddingLeft: "8px"}}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                      }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                        }}>
                          {task.Tags.split(",").map((tag) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                margin: 1,
                                marginRight: 0,
                                backgroundColor: "#ECEEEE",
                                border: 1,
                                borderColor: "#ECEEEE",
                                borderRadius: "8px",
                                padding: "4px",
                            }}>
                              <Typography color="gray" variant="p">{tag}</Typography>
                            </Box>
                          ))}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignSelf: "center",
                          }}
                        >    
                          <Avatar>
                            {getInitials(task.Assignee)}
                          </Avatar>
                        </Box>
                      </Box>
                    </CardContent>
                  )}
                </Card>
              ))}
            </Box>
          </Box>

          {/* Done */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
          }}>
            <Box sx={{
              backgroundColor: "#ECEEEE",
              margin: 1,
            }}>
              <Typography sx={{ fontSize: 16, fontWeight: "bold", padding: 2 }}>
                Done - {doneTasks.length} Items
              </Typography>
            </Box>
            <Box sx={{
              backgroundColor: "#ECEEEE",
              margin: 1,
            }}>
              {doneTasks.map((task) => (
                <Card sx={{ width: 350, margin: 3 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                      Task - {task.Id}
                    </Typography>
                    <br/>
                    <Typography variant="p">
                      {task.Summary}
                    </Typography>
                    </CardContent>
                  {task.Tags && (
                    <CardContent sx={{paddingLeft: "8px"}}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                      }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                        }}>
                          {task.Tags.split(",").map((tag) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                margin: 1,
                                marginRight: 0,
                                backgroundColor: "#ECEEEE",
                                border: 1,
                                borderColor: "#ECEEEE",
                                borderRadius: "8px",
                                padding: "4px",
                            }}>
                              <Typography color="gray" variant="p">{tag}</Typography>
                            </Box>
                          ))}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignSelf: "center",
                          }}
                        >    
                          <Avatar>
                            {getInitials(task.Assignee)}
                          </Avatar>
                        </Box>
                      </Box>
                    </CardContent>
                  )}
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
