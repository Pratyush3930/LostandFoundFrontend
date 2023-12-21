import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar( {handleSearch}) {

  return (
    <Paper
      component="form"
      sx={{ p: '4px 6px', display: 'flex', alignItems: 'center', width: 700 ,border:'1px solid black'}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      </IconButton>
      <InputBase
        onChange={(e) => handleSearch(e)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Items"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
