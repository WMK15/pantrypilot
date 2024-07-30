import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import "animate.css";

const darkColors = {
  primary: "#90caf9", // Primary color for buttons
  secondary: "#f48fb1", // Secondary color for accent
  background: "#121212", // Background color
  textPrimary: "#ffffff", // Primary text color
  textSecondary: "#b0b0b0", // Secondary text color
  border: "#333333", // Border color
  shadow: "rgba(0, 0, 0, 0.5)", // Shadow color
};

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Handle search input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery(""); // Clear input after search
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      style={{
        width: "100%",
        maxWidth: "600px",
        marginBottom: "50px",
        backgroundColor: darkColors.background,
        padding: "16px",
        borderRadius: "8px",
        boxShadow: `0 4px 8px ${darkColors.shadow}`,
        transition: "box-shadow 0.3s ease-in-out",
      }}
      className="animate__animated animate__fadeIn"
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          type="text"
          label="Search items..."
          variant="outlined"
          fullWidth
          value={query}
          onChange={handleInputChange}
          InputProps={{
            style: {
              color: darkColors.textPrimary,
              backgroundColor: "#1e1e1e",
              boxShadow: `0 2px 4px ${darkColors.shadow}`,
              transition: "box-shadow 0.3s ease-in-out",
            },
          }}
          InputLabelProps={{
            style: {
              color: darkColors.textSecondary,
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: darkColors.border,
                borderRadius: "4px",
                boxShadow: `0 2px 4px ${darkColors.shadow}`,
                transition: "box-shadow 0.3s ease-in-out",
              },
              "&:hover fieldset": {
                borderColor: darkColors.primary,
                boxShadow: `0 4px 8px ${darkColors.shadow}`,
              },
              "&.Mui-focused fieldset": {
                borderColor: darkColors.primary,
                boxShadow: `0 4px 8px ${darkColors.shadow}`,
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: darkColors.primary,
            boxShadow: `0 4px 8px ${darkColors.shadow}`,
            "&:hover": {
              backgroundColor: darkColors.secondary,
              boxShadow: `0 6px 12px ${darkColors.shadow}`,
            },
            transition: "box-shadow 0.3s ease-in-out",
          }}
          className="animate__animated animate__pulse"
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};

export default SearchBar;
