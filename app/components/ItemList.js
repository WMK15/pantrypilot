import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "animate.css";

const darkColors = {
  primary: "#90caf9",
  secondary: "#f48fb1",
  backgroundDefault: "#121212",
  backgroundPaper: "#1e1e1e",
  textPrimary: "#ffffff",
  textSecondary: "#b0b0b0",
  divider: "#333333",
  shadow: "rgba(0, 0, 0, 0.5)",
};

const ItemList = ({ pantry, removeItem, handleOpen }) => {
  const [animatedItems, setAnimatedItems] = useState([]);

  const observer = useRef(null);

  useEffect(() => {
    // Initialize Intersection Observer
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const itemId = entry.target.getAttribute("data-id");
          setAnimatedItems((prevItems) => [...prevItems, itemId]);
          observer.current.unobserve(entry.target);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.1, // Adjust the threshold to trigger the animation
    });

    const items = document.querySelectorAll(".item-box");
    items.forEach((item) => {
      observer.current.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.current.unobserve(item);
      });
    };
  }, [pantry]);

  return (
    <Box
      border={`1px solid ${darkColors.divider}`}
      bgcolor={darkColors.backgroundDefault}
      color={darkColors.textPrimary}
      boxShadow={`0 4px 8px ${darkColors.shadow}`}
      className="animate__animated animate__fadeIn" // Added fade-in animation to the main box
    >
      <Box
        width="900px"
        height="100px"
        bgcolor={darkColors.primary}
        display="flex"
        border={`1px solid ${darkColors.divider}`}
        alignItems="center"
        justifyContent="space-between"
        padding={2}
        boxShadow={`0 4px 8px ${darkColors.shadow}`}
        className="animate__animated animate__bounceIn" // Added bounce-in animation to the header
      >
        <Typography
          variant="h2"
          color={darkColors.textPrimary}
          textAlign="center"
          sx={{ textShadow: `0 2px 4px ${darkColors.shadow}` }}
          className="animate__animated animate__pulse" // Added pulse animation to the title
        >
          My Pantry
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => handleOpen()}
          sx={{ boxShadow: `0 2px 4px ${darkColors.shadow}` }}
          className="animate__animated animate__rubberBand" // Added rubber-band animation to the button
        >
          Add Item
        </Button>
      </Box>
      <Stack
        bgcolor={darkColors.backgroundDefault}
        width="900px"
        height="300px"
        spacing={2}
        sx={{
          overflowY: "auto",
          padding: 2,
        }}
      >
        {pantry.map(({ name, count }) => (
          <Box
            key={name}
            data-id={name}
            className={`item-box ${
              animatedItems.includes(name)
                ? "animate__animated animate__fadeInUp"
                : ""
            }`}
            width="100%"
            height="150px"
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            bgcolor={darkColors.backgroundPaper}
            color={darkColors.textPrimary}
            padding={2}
            border={`1px solid ${darkColors.divider}`}
            marginBottom={2}
            boxShadow={`0 2px 4px ${darkColors.shadow}`}
          >
            <Typography
              variant="h4"
              color={darkColors.textPrimary}
              textAlign="center"
              sx={{ textShadow: `0 1px 2px ${darkColors.shadow}` }}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Typography>
            <Typography
              variant="h4"
              color={darkColors.textSecondary}
              textAlign="center"
              sx={{ textShadow: `0 1px 2px ${darkColors.shadow}` }}
            >
              Quantity: {count}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: darkColors.secondary,
                boxShadow: `0 2px 4px ${darkColors.shadow}`,
              }}
              onClick={() => removeItem(name)}
              className="animate__animated animate__flash" // Added flash animation to the remove button
            >
              Remove
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ItemList;
