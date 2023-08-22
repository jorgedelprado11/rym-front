import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [charactersId, setCharactersId] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const onSearch = async (id) => {
    if (charactersId.includes(parseInt(id))) {
      return alert("El personaje ya está agregado");
    }

    try {
      const { data } = await axios(
        `https://rym-back-production-cbdd.up.railway.app/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
        setCharactersId([...charactersId, data.id]);
      }
    } catch (error) {
      alert("Error. ¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    const IdFiltered = charactersId.filter((charId) => charId !== Number(id));
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
    setCharactersId(IdFiltered);
  };

  const login = async (userData) => {
    try {
      const { email, password } = userData;

      const { data } = await axios(
        `https://rym-back-production-cbdd.up.railway.app/rickandmorty/login?email=${email}&password=${password}`
      );

      const { access } = data;

      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} access={access} setAccess={setAccess} />
      ) : null}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
