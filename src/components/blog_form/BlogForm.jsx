import React from 'react';
import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ backgroundColor: '#1565C0', padding: '3vh 3vw', width: '20vw', marginTop: '20vh', marginBottom: '33vh' }}>
        <CardContent>
          <Typography variant='h3' sx={{ color: 'white' }}>Add Blog</Typography>
          <Stack style={{ width: '100%' }}>
            <InputLabel htmlFor="blogName" sx={{ color: 'white' }}>Blog Name:</InputLabel>
            <Input variant='contained' type="text" id="blogName" name="blogName" />
            
            <InputLabel htmlFor="authorName" sx={{ marginTop: '1vh', color: 'white' }}>Author Name:</InputLabel>
            <Input variant='contained' type="text" id="authorName" name="authorName" />

            <InputLabel htmlFor="description" sx={{ marginTop: '1vh', color: 'white' }}>Description:</InputLabel>
            <TextareaAutosize variant='contained' id="description" name="description" minRows={5}></TextareaAutosize>
                
            <Button variant='contained' onClick={() => { navigate('/home') }} type="submit" sx={{ marginTop: '5vh', backgroundColor: '#D32F2F', color: 'white' }}>Submit Blog</Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogForm;
