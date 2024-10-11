import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table';
import { Avatar, Stack } from '@mui/material';
import { dashboardData } from '../../constants/sampleData';
import { transformImage } from "../../lib/features";
import moment from 'moment';
import { fileFormate } from '../../lib/features';
import {Box} from '@mui/material';
import RenderAttachment from '../../components/shared/RenderAttachment'


const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => {
      const { attachment } = params.row;
      return attachment?.length > 0 ? (
        attachment.map((i, index) => {
          const url = i.url;
          const file = fileFormate(url); // Assuming fileFormat is used somewhere in your code
          return (
            <Box key={index}>
              <a
                href={url}
                download
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'black',
                }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })
      ) : (
        'No Attachments'
      );
    },
  
  },
 {
  field:"content",
  headerName:"Content",
  headerClassName:"table-header",
  width:400,
 },
 {
  field: "sender",
  headerName: "Sent By",
  headerClassName: "table-header",
  width: 200,
  renderCell:(params)=>(
    <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
      <Avatar alt={params.row.sender.name} src={params.row.sender.avatar}/>
      <span>{params.row.sender.name}</span>
    </Stack>
  ),


},
 {
  field:"chat",
  headerName:"Chat",
  headerClassName:"table-header",
  width:220,
 },
 {
  field:"groupChat",
  headerName:"Group Chat",
  headerClassName:"table-header",
  width:100,
 },
 {
  field:"createdAt",
  headerName:"Time",
  headerClassName:"table-header",
  width:250,
 },
];

const MessageManagement = () => {

  const [rows,setRows]=useState([]);

  useEffect (()=>{
      setRows( dashboardData.messages.map(i=>({...i,id:i._id,sender:{
        name:i.sender.name,
        avatar:transformImage(i.sender.avatar,50),
      },
      createdAt:moment(i.createdAt).format("MMMM Do YYYY, h:mm:ss a")
    })))
  },[])


  return (
    <AdminLayout>
     <Table heading={"All Messages"} columns={columns} rows={rows} rowHeight={200}/>
    </AdminLayout>
  )
}

export default MessageManagement