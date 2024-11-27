import React from 'react';
import { Rating } from '@mui/material';
import starFilled from '../../assets/icons/star-filled.svg';
import starEmpty from '../../assets/icons/star.svg';

const CustomRating = ({ value }) => {
  return (
    <Rating
      value={value}
      max={5}
      precision={1}
      readOnly
      icon={
        <img
          src={starFilled}
          alt="Full Star"
          className="custom-star"
        />
      }
      emptyIcon={
        <img
          src={starEmpty}
          alt="Empty Star"
          className="custom-star"
        />
      }
    />
  );
};

export default CustomRating;
