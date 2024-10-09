import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({anchor}) => {
  return (
    <Menu anchorEl={anchor} open={false}>
        <div style={{
            width:"10rem",
        }}>
            lorem impsum 
        </div>
    </Menu>
  )
}

export default FileMenu