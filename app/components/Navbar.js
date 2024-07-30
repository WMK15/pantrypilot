import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import { metadata } from "../layout";

const Navbar = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      position="fixed"
      top={0}
      left={0}
      zIndex={1200}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(18, 18, 18, 0.8)", // Transparent background with a slight tint
          color: "#ffffff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow effect
          backdropFilter: "blur(10px)", // Glassy effect
          width: "50%", // Set the width to half of the viewport
          maxWidth: "1200px", // Max width to ensure it doesn't get too large on large screens
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "inherit", // Ensure it uses full width of AppBar
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {metadata.title}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" component={Link} href="/about">
              About
            </Button>
            {/* Add more links as needed */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
