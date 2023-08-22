import { useState } from "react";
import validation from "../Validation/Validation";
import styles from "./Form.module.css";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    const validateErrors = validation({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(validateErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.div}>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif"
        alt="rick y morty"
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          placeholder="ingresa tu email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p className={styles.errors}>{errors.email}</p>}
        <hr />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          placeholder="ingresa tu password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p className={styles.errors}>{errors.password}</p>}
        <hr />
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
