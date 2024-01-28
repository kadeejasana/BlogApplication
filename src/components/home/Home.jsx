import React, { useState, useEffect } from 'react'
import {Box, Typography, Link} from '@mui/material'
import axios from 'axios'

const Home=()=>{
    const [blogs, setBlogs] = useState([])
    const [userId, setUserId] = useState('')
    const [Id, setId] = useState('')
    const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data)
      })
      .catch(error => {
        console.error('Error fetching blogs:', error)
      });
  }, []);

  const whenClicked = (userid, id, title)=>{
    setUserId(userid)
    setId(id)
    setTitle(title)
  }

  return (
    <Box sx={{display:'flex', justifyContent:'center', fontFamily:'sans-serif', fontSize:'30px',backgroundColor:'GrayText'}}>
        <Box sx={{display:'flex', justifyContent:'top', flexDirection:'column', alignItems:'center',border:'2px solid black', width:'25%', margin:'1%'}}>
            <Typography variant='h4' sx={{border:'1px solid black', width:'100%', textAlign:'center'}}>Blog Dashboard</Typography>
            <nav>
                <Link href="/home" sx={{textDecoration:'none', borderBottom:'1px solid black', borderRight:'1px solid black', padding:'0 2.7vw'}}>Home</Link>{''}
                <Link href="/blogform" sx={{textDecoration:'none', borderBottom:'1px solid black', borderLeft:'1px solid black', padding:'0 2.7vw'}}>Add</Link>
            </nav>
            <ul style={{listStyleType:'none', padding:'0'}}>
                {blogs.map(blog => (
                    <li key={blog.id} style={{borderBottom:'1px solid black', width:'100%'}}>
                        <p><a onClick={() => whenClicked(blog.userId, blog.id, blog.title)} style={{cursor:'pointer'}}>{blog.id}.{blog.title}</a></p>
                    </li>
                ))}
            </ul>
        </Box>
      
      <Box sx={{padding:'10vh 5vw', border:'2px solid black', width:'75%', margin:'1%', marginLeft:'-0.5vw'}}>
        <Typography variant='h4' sx={{textAlign:'center'}}>Blogs</Typography>
        <p>UserId: {userId}</p> 
        <p>Id: {Id}</p>  
        <p>Title: {title}</p>   
      </Box>
    </Box>
  )
}

export default Home

