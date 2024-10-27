"use client";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io("http://localhost:8000");

interface Comment {
  username: string;
  comment: string;
  timestamp?: string;
}

export default function CommentList() {
  const [commentReceived, setCommentReceived] = useState<Comment[]>([]);
  const [commentInstant, setCommentInstant] = useState<Comment[]>([]);


  const fetchComments = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/get-comment");
      setCommentReceived(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  useEffect(() => {

    const receiveComments = (data: Comment) => {
      setCommentInstant((prevComments) => [...prevComments, data]);
    };

    fetchComments();

    socket.on("receive_comment", receiveComments);

    return () => {
      socket.off("receive_comment", receiveComments);
    };
  }, []);

  return (
    <>


      {/* this list of comment got through the socket.io */}
      {commentInstant.length > 0 &&
        <>
          <Typography variant="h6" gutterBottom>Current Comment</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {commentInstant.map((comment, index) => (
              <ListItem key={index} disableGutters secondaryAction={
                <IconButton aria-label="comment">
                  <CommentIcon />
                </IconButton>
              }>
                <ListItemText
                  primary={<React.Fragment>
                    {comment.username}
                  </React.Fragment>}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        {comment.comment}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
        </>
      }


      {/* this list of comment got through the axios */}
      <Typography variant="h4" gutterBottom>
        Comment List
      </Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {commentReceived.map((comment, index) => (
          <ListItem key={index} disableGutters secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }>
            <ListItemText
              primary={<React.Fragment>
                {comment.username}
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: '#b0b0b0', display: 'inline' }}
                >
                  {`--${new Date(comment.timestamp ?? '').toLocaleString()}`}
                </Typography>
              </React.Fragment>}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline', padding: '10px', margin: '10px' }}
                  >
                    {comment.comment}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
