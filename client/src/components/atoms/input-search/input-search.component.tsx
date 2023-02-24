import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./input-search.component.css";

type ImageProps = {
  handleSearch: (search: string) => void;
};

const InputSearch: React.FC<ImageProps> = ({ handleSearch }) => {
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();

        const search = (document.getElementById("search") as HTMLInputElement)
          .value;

        handleSearch(search);
      }}
      className="inputSearchForm"
    >
      <InputBase
        id="search"
        name="search"
        className="inputSearchField"
        placeholder="Search Keywords on Title"
        inputProps={{ "aria-label": "Search Keywords on Title" }}
      />
      <IconButton type="submit" className="iconButton" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default InputSearch;
