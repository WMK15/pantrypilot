import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export default function AddItem({ addItem, open, handleClose }) {
  const [itemName, setItemName] = useState("");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Item
        </Typography>
        <Stack direction={"row"} spacing={2} width={"100%"}>
          <TextField
            id="outlined-basic"
            label="Item Name"
            variant="outlined"
            onChange={(e) => setItemName(e.target.value)}
            fullWidth
            value={itemName}
          />
          <Button
            variant={"contained"}
            color={"primary"}
            onClick={async () => {
              addItem(itemName);
              setItemName("");
              handleClose();
            }}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
