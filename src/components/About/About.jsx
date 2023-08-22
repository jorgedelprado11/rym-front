import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.div}>
      <h1>Jorge del Prado</h1>
      <p>
        Tengo 27 años soy estudiante de Henry, me gusta jugar al futbol y al
        padel , estoy aprendiendo en este M2 a hacer una app web usando React y
        Redux. Tuve que hacer el background de este div mas opaco para que se
        pueda leer lo que estoy escrbiendo, porque no tenia contraste y aca voy
        a agregar un par de lineas mas para rellenar el cuadro de texto ya no se
        que escribir
      </p>
    </div>
  );
};

export default About;
