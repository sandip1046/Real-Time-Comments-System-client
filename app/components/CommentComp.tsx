"use client";

import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { Typography, Box, TextField, Button, Paper } from "@mui/material";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:8000");

const CommentComp = () => {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    const sendComment = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        if (username && comment) {try {
            // First, send the comment to the database
            const response = await axios.post("http://localhost:8000/api/v1/post-comment", {
                username,
                comment,
            });
            
            // Emit the comment via socket only if the post request is successful
            if (response.status === 201) {
                socket.emit("send_comment", { username, comment });
            }

            setComment(""); // Clear the comment field after sending
        } catch (error) {
            console.error("Error posting comment:", error);
        }
        }
    };

    return (
        <Box sx={{ p: 4 }}>
            {/* Comment Section Title */}
            <Typography
                variant="h2"
                align="center"
                fontWeight="bold"
                sx={{ mb: 3, fontSize: { xs: "35px", md: "50px" } }}
            >
                Comment Section
            </Typography>

            {/* Instruction with Icon */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
                sx={{ mb: 3 }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontSize: { xs: "25px", md: "35px" } }}
                >
                    Please leave a comment below
                </Typography>
                <FaCommentDots style={{ color: "#FBBF24", fontSize: "40px" }} />
            </Box>

            {/* Comment Form */}
            <Box display="flex" justifyContent="center" alignItems="center" mt={3} sx={{ width: "100%" }}>
                <Paper elevation={3} sx={{ p: 3, width: { xs: "90%", md: "70%", lg: "50%" } }}>
                    <form onSubmit={sendComment}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                Username:
                            </Typography>
                            <TextField
                                id="username"
                                name="username"
                                variant="outlined"
                                fullWidth
                                value={username || ""}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <Typography variant="subtitle1" fontWeight="bold">
                                Comment:
                            </Typography>
                            <TextField
                                id="comment"
                                name="comment"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                value={comment || ""}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ alignSelf: "flex-center" }}
                            >
                                Add Comment
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </Box>
    );
};

export default CommentComp;
