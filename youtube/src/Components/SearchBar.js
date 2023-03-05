import { IconButton, Paper } from "@mui/material";
import React from "react";
import { Search } from "@mui/icons-material";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";



const SearchBar = () => {

  return (
    <div className="search-div">
      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid rgb(34, 34, 35)",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 2 },
          backgroundColor: "transparent",
		//   width:'600px',
		  height:'40px',
		  display: "flex",
		  justifyContent: "space-between",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search"
          value=""
          onChange={() => {}}
        />
        <IconButton
          type="submit"
          sx={{
            p: "10px",
            color: "white",
            backgroundColor: "rgb(34, 34, 35)",
            borderRadius: "0 12rem 12rem 0",
			height:'40px',
			width:'70px',
          }}
        >
          <Search />
        </IconButton>
      </Paper>
      <IconButton
        type="submit"
        sx={{
          color: "white",
          backgroundColor: "black",
          borderRadius: "70px 70px 70px 70px",
          width: "50px",
        }}
      >
        <KeyboardVoiceRoundedIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
