import React from 'react'
import { Box } from '@mui/material'
import Header from './componants/Header'
import InfoHeader from './componants/InfoHeader'
import { styled } from '@mui/system'
import Articals from './componants/Articals'


const Container = styled(Box)(({ theme }) => ({
  width: '59%',
  margin: '110px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));

const App = () => {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
        <Articals />
      </Container>
    </Box>
  )
}

export default App