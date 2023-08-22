import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFav = (character) => {
  
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/rickandmorty/fav", character);

      if (!data.length) throw Error("No hay favoritos");

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/rickandmorty/fav/${id}`);

      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};