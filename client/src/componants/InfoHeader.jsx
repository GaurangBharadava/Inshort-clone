import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

const Container = styled(Box)(({ theme }) => ({
    background: '#f44336',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Image = styled('img')({
    height: 34,
    '&:last-child':{
        margin: '0 50px 0 20px'
    }
});

const InfoHeader = () => {
  return (
    <Container>
        <Typography style={{fontSize: 14, fontWeight:300,marginLeft:50}}>
            For the best experience use inshort app on your smart device
        </Typography>
        <Box style={{ display: 'flex', marginLeft: 'auto'}}>
            <Image src={appleStore} alt="Apple Store logo" style={{ height: 34 }} />
            <Image src={googleStore} alt="Google Play Store logo" style={{ height: 34 }} />
        </Box>
    </Container>
  )
}

export default InfoHeader
