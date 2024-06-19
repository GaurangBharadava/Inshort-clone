import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'
import {Menu} from '@mui/icons-material'
const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
const styledHeader = styled(AppBar)({
    background: 'white',
    height: 70
})
    


const Image = styled('img')({
    height: 55,
    margin: 'auto',
    paddingRight: 70,
})


const Header = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Menu />
            <Image src={url} alt="logo" />
        </Toolbar>
    </AppBar>
  )
}

export default Header