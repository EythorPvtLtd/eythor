import React from 'react';

const SearchBar = (props) => {
    return ( 
        <div style={containerStyle}>
        <input style={searchBoxStyle} type="text" id="box" placeholder="Search"/>
        </div>
    );
}

const containerStyle={
    width: '12rem',
  height: 'auto',
  backgroundColor: '#FFFFFF',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '4rem',
  border: '1px solid #000000',
  padding: '10px',
}

const searchBoxStyle = {
    float: 'left',
  padding: '0 1rem',
  height: '0.8rem',
  background: 'none',
  color: '#959393',
  borderRadius: '2rem',
  outline: 'none',
  border: 'none',
  position: 'relative',
  opacity: '1',
  transition: 'all .75s ease-in',
  cursor: 'pointer',
}
 
export default SearchBar;
