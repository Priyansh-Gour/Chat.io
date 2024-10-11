import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Container, Paper } from '@mui/material'

const Dashboard = () => {
  const Appbar = <Paper>df</Paper>
  return (
    <AdminLayout>
      <Container component={"main"}>

        {
          Appbar
        }
      </Container>
    </AdminLayout>
  )
}

export default Dashboard