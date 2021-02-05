import React, { Component, useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/types";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {Link} from 'react-router-dom'

const CardAlbum = ({ album }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const toggle = user.favorites.some((fav) => fav.id === album.id);
    setIsFav(toggle);
  }, []);

  const handleFavorite = () => {
    if (isFav) {
      dispatch({
        type: REMOVE_FAVORITE,
        payload: album,
      });
    } else {
      dispatch({
        type: ADD_FAVORITE,
        payload: album,
      });
    }
    setIsFav(!isFav);
  };

  return (
    <Card>
      <Link
       
        to={`/album/${album.id}`}
      >
        <Card.Img variant="top" src={album.cover} />
      </Link>
      <Card.Body>
        <Card.Title>{album.title}</Card.Title>
        {isFav ? (
          <FavoriteIcon onClick={handleFavorite} />
        ) : (
          <FavoriteBorderIcon onClick={handleFavorite} />
        )}
      </Card.Body>
    </Card>
  );
};

export default CardAlbum;
