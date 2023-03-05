import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
	const arratLength = videos.length;
	console.log(videos[arratLength - 1]?.snippet)
//   if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.snippet.videoId && <VideoCard video={item} /> }
          {/* {item.snippet.channelId && <ChannelCard channelDetail={item} />} */}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;