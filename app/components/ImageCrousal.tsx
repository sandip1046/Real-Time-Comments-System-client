// "use client";
// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper } from "@mui/material";
// import Image from "next/image";

// const ImageCarousel = () => {
//   // Provide your image paths
//   const images = [
//     "/comment-img.jpg",
//     "/comment-img2.jpg",
//     "/comment-img3.jpg",
//   ];

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "400px", // Adjust height to a fixed value
//         width: "100%",   // Ensure full width
//         border: "1px solid white", // Add a border for visibility
//       }}
//     >
//       <Carousel>
//         {images.map((img, index) => (
//           <Paper
//             key={index}
//             elevation={3}
//             style={{
//               width: "100%",
//               height: "400px",  // Set height for the paper wrapper
//               overflow: "hidden", // To handle overflow of images
//             }}
//           >
//             <Image
//               src={img}
//               alt={`Image ${index + 1}`}
              
//              // Adjust the height for a balanced aspect ratio
//               layout="fill" // Ensure the image fills the entire space
//               objectFit="cover" // Make sure the image covers the container
//             />
//           </Paper>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default ImageCarousel;
