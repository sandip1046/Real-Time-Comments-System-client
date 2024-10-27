import React from "react";
import CommentComp from "../components/CommentComp";
import CommentList from "../components/CommentList";
import { Box } from "@mui/material";

export const Page = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={{ xs: 2, md: 5 }}
            sx={{ mt: 4, mb: 4 }}>

            <CommentComp />

            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center">
                <CommentList />

            </Box>
        </Box>
    );
};

export default Page;
