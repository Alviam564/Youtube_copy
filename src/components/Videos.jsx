import React from "react";
import { Stack, Box } from "@mui/material"

import { VideoCard, Loader, ChannelCard } from './'


const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader></Loader>

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((Item, idx) => (
        <Box key={idx}>
         {Item.id.videoId && <VideoCard video={Item} /> }
         {Item.id.channelId && <ChannelCard channelDetail={Item} />}
       </Box>
      ))}
    </Stack>
  )
}

export default Videos