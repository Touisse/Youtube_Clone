import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "../Components";

const RAPID_API_KEY = "357649c602mshdda2360a8495042p1bfa68jsn8b1be504d963";
const API_URL = "https://youtube-v31.p.rapidapi.com/captions";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "X-RapidAPI-Key": RAPID_API_KEY,
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
          },
          params: { part: "snippet", videoId: "M7FIvfx5J10" ,  category: selectedCategory },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "colum", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Touisse
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
