import { Container, Typography, Box } from "@mui/material";
import { metadata } from "../layout";

const Footer = () => {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: "#121212",
        color: "#ffffff",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © 2024 {metadata.title} App. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
