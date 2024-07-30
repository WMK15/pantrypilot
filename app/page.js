"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { firestore } from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import AddItem from "./components/AddItem";

export default function Home() {
  const [pantry, setPantry] = useState([]);
  const [filteredPantry, setFilteredPantry] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updatePantry = async () => {
    const snapshot = await getDocs(collection(firestore, "pantry"));
    const items = snapshot.docs.map((doc) => ({ name: doc.id, ...doc.data() }));
    setPantry(items);
    setFilteredPantry(items);
  };

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = pantry.filter((item) =>
      item.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredPantry(filtered);
  };

  const addItem = async (itemName, imageUrl) => {
    const docRef = doc(collection(firestore, "pantry"), itemName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const count = docSnap.data().count + 1;
      await setDoc(docRef, { count, imageUrl }, { merge: true });
    } else {
      await setDoc(docRef, { count: 1, imageUrl });
    }
    updatePantry();
  };

  const removeItem = async (itemName) => {
    const docRef = doc(collection(firestore, "pantry"), itemName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { count } = docSnap.data();
      if (count === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { count: count - 1 });
      }
    }
    updatePantry();
  };

  useEffect(() => {
    updatePantry();
  }, []);

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={1}
      sx={{ overflowX: "hidden" }}
    >
      <AddItem addItem={addItem} open={open} handleClose={handleClose} />
      <SearchBar onSearch={handleSearch} />
      <ItemList
        pantry={filteredPantry}
        removeItem={removeItem}
        handleOpen={handleOpen}
      />
    </Box>
  );
}
