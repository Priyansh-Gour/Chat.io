import { Dialog, DialogTitle, Stack, TextField } from '@mui/material'
import React from 'react'
import second from 'first'

const Search = () => {
  return (
    <Dialog open={true}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find people</DialogTitle>
        <TextField label=""/>
      </Stack>
    </Dialog>
  )
}

export default Search