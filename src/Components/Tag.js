import React from "react";
import {
  Avatar,
  Box,
  CardContent,
  Typography,
} from "@mui/material/";

export default function Tag({task}) {

  const getInitials = (string) => {
    const initials = string
      .split(" ")
      .map((word) => word[0])
      .join("");

    return initials.toUpperCase();
  };

  return (
    <>
      <CardContent sx={{ paddingLeft: "8px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
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
                }}
              >
                <Typography color="gray" variant="p">
                  {tag}
                </Typography>
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
            <Avatar>{getInitials(task.Assignee)}</Avatar>
          </Box>
        </Box>
      </CardContent>
    </>
  )
}