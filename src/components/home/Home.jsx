import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Link } from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState({ userId: '', id: '', title: '' });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  const whenClicked = (userId, id, title) => {
    setSelectedBlog({ userId, id, title });
  };

  return (
    <div style={{ background: '#2c3e50', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" style={{ marginBottom: '30px', color: '#ecf0f1' }}>
          Welcome to Blog Dashboard
          <span style={{ float: 'right', marginRight: '20px' }}>
            <Link href="/home" style={{ color: '#ecf0f1', textDecoration: 'none', marginRight: '20px' }}>Home</Link>
            <Link href="/blogform" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Add Blog</Link>
          </span>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: '20px', background: '#3498db', color: '#ecf0f1', borderRadius: '10px', height: '100%' }}>
              <Typography variant="h5" style={{ marginBottom: '20px' }}>Recent Blogs</Typography>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0', overflowY: 'auto', maxHeight: 'calc(100vh - 210px)' }}>
                {blogs.map((blog, index) => (
                  <li key={blog.id} style={{ marginBottom: '10px' }}>
                    <Link href="#" onClick={() => whenClicked(blog.userId, blog.id, blog.title)} style={{ color: '#ecf0f1', textDecoration: 'none' }}>
                      {index + 1}. {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} style={{ display: 'flex', flexDirection: 'column' }}>
            <Paper style={{ flex: 1, padding: '20px', background: '#e74c3c', color: '#ecf0f1', borderRadius: '10px' }}>
              <Typography variant="h5" style={{ marginBottom: '20px' }}>Selected Blog</Typography>
              <Typography variant="body1">UserId: {selectedBlog.userId}</Typography>
              <Typography variant="body1">Id: {selectedBlog.id}</Typography>
              <Typography variant="body1">Title: {selectedBlog.title}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
