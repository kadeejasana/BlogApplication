import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button, CardContent, Link } from '@mui/material';
import React from 'react'
import {useNavigate} from 'react-router-dom'

const BlogForm=()=>{
    const navigate=useNavigate()

    return (
        <Box sx={{display:'flex', justifyContent:'center', marginTop:'15vh',borderRadius:'50%'}}>
            <Box>
                <Card sx={{backgroundColor:'yellow', padding:'4vh 4vw', width:'20vw'}}>
                    <CardContent>
                        <Typography variant='h3'>Add Blog</Typography>
                        <Stack style={{width:'100%'}}>
                            <InputLabel htmlFor="blogName">Blog Name:</InputLabel>
                            <Input variant='contained' type="text" id="blogName" name="blogName"/>
                            
                            <InputLabel htmlFor="authorName" sx={{marginTop:'1vh'}}>Author Name:</InputLabel>
                            <Input variant='contained' type="text" id="authorName" name="authorName"/>

                            <InputLabel htmlFor="description" sx={{marginTop:'1vh'}}>Description:</InputLabel>
                            <TextareaAutosize variant='contained' id="description" name="description" minRows={7}></TextareaAutosize>
                                
                            <Button variant='contained' onClick={()=>{navigate('/home')}} type="submit" sx={{marginTop:'5vh'}}>Submit </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Box>
      )
  }
  
export default BlogForm