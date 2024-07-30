import { Box, Typography, Container, Paper, Button } from "@mui/material";
import "animate.css";
import Link from "next/link";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        color: "#ffffff",
        padding: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={8}
          sx={{
            padding: 3,
            borderRadius: 4,
            backgroundColor: "#1e1e1e",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            animation: "fadeIn 1s ease-in-out",
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
          }}
          className="animate__animated animate__fadeIn"
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: "center",
              marginBottom: 3,
              fontSize: "2.5rem",
              color: "#ffffff",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 255, 255, 0.5)",
            }}
            className="animate__animated animate__fadeIn"
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              lineHeight: 1.6,
              marginBottom: 3,
              color: "#ffffff",
            }}
            className="animate__animated animate__fadeIn animate__delay-1s"
          >
            Welcome to our app! We are dedicated to providing you with the best
            pantry management experience. Our application allows you to keep
            track of your pantry items, manage your inventory, and ensure you
            never run out of essentials. Thank you for choosing our app, and we
            hope you enjoy using it!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: "block",
              margin: "0 auto",
              fontSize: "1rem",
              padding: "10px 20px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              backgroundColor: "#90caf9",
              "&:hover": {
                backgroundColor: "#64b5f6",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
              },
              textAlign: "center",
            }}
            className="animate__animated animate__pulse"
            component={Link}
            href="https://waseefmohammadkhan.com"
          >
            Learn About W.M.K
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
