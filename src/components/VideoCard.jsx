import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'


const VideoCard = ({ video: { id: {videoId }, snippet } }) => {
  return (
    <Card sx={{ width: { md: '320px', xs: '100%', sm:'358px'}, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
          sx={{ width: { xs: '100%', sm: '358px'}, height: 180}}>
        </CardMedia>
      </Link>
      <CardContent sx= {{ backgroundColor: '#1e1e1e', height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
        <Typography variant="subtitle2" color="grey">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: 'grey', ml: '5px'}}></CheckCircle>
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard