import React from "react";
import { Image } from "./Thumb.styles";
import { Link } from "react-router-dom";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} />
      </Link>
    ) : (
      <Image src={image} />
    )}
  </div>
);

export default Thumb;
