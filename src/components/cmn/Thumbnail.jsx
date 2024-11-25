import React from "react";

const Thumbnail = ({ src, alt, onClick }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: '80px',
      height: '80px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      cursor: 'pointer',
      marginRight: '8px',
    }}
    onClick={onClick}
  />
);

export default Thumbnail;