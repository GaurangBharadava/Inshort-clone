import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { getNews } from '../service/api'
import Artical from './Artical'
const Articals = () => {

  const [news, setNews] = useState([]);
  useEffect(() => {
    dailyNews();
  }, []);


  const dailyNews = async () => {
    const responce = await getNews();
    setNews(responce.data);
  }
  return (
    <Box>
      {
        news.map(data=>(
          <Artical data={data} />
        ))
      }
    </Box>
  )
}

export default Articals