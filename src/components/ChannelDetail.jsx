import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Box } from "@mui/material"

import { Videos, ChannelCard } from './'
import { fetchfromAPI } from "../utils/fetchfromAPI"

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState(null)

  const{ id } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchfromAPI(`channels?part=snippet&id=${id}`)
      
      setChannelDetail(data?.items)
      
      const videosData = await fetchfromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      
      setVideos(videosData?.items)
    }; 
    fetchResults(); 
  }, [id]);
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)', zIndex: 10, height: '300px'}} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110x' />
      </Box>
      <Box display="flex" p="2">
      <Box sx={{mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail