import React from "react";
import styles from "./Card.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { removeFav, addFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const location = useLocation();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image });
    }
  };

  return (
    <div className={styles.div}>
      <div>
        <button className={styles.btnFav} onClick={handleFavorite}>
          {isFav ? "❤️" : "🤍"}
        </button>
        {location.pathname !== "/favorites" && (
          <button className={styles.btn} onClick={() => onClose(id)}>
            X
          </button>
        )}

        <h2 className={styles.name}>
          <NavLink className={styles.link} to={`/detail/${id}`}>
            {name}
          </NavLink>
        </h2>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.data}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
