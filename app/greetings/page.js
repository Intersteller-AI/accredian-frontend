"use client";

import Modal from "@mui/material/Modal";
import { FaThumbsUp } from "react-icons/fa";
import { Sheet } from "@mui/joy";

import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import { Box, CardMedia, Typography } from "@mui/material";
import { ThumbUp } from "@mui/icons-material";

const page = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url(https://faculty.accredian.com/images/thank-you-background.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "1000px",
              textAlign: "center",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              px: 4,
            }}
          >
            <CardMedia
              component="img"
              image="https://faculty.accredian.com/images/accredian-logo.png"
              alt="Goole"
              sx={{
                maxWidth: "250px",
                width: "100%",
                objectFit: "unset",
              }}
            />
            <Box
              sx={{
                width: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "black",
                px: 2,
                py: 8,
                borderRadius: "8px",
                mt: 8,
                boxShadow: 1,
              }}
            >
              <ThumbUp sx={{ fontSize: "3rem" }} />
              <Typography variant="h3" sx={{ mt: 5, fontWeight: "bold" }}>
                Your Data is saved!
              </Typography>
              <Typography variant="h4" sx={{ mt: 5, fontWeight: "bold" }}>
                Thank You!
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: 3,
                alignItems: "center",
                justifyContent: "center",
                mt: 6,
              }}
            >
              <Typography>©2023 Accredian</Typography>
              <Typography>|</Typography>
              <Link href="/">accredian.com</Link>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default page;
