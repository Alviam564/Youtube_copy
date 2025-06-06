import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material"
import { useParams } from "react-router-dom";

import { fetchfromAPI } from "../utils/fetchfromAPI";
import { Videos } from "./"

const Searchfeed = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchfromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);


  return (
    <Box p={2} minHeight="95hv">
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#fc1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default Searchfeed