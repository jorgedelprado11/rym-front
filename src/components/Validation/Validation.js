const validation = (userData) => {
  const errors = {};

  //Validaciones para email
  if (
    !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
      userData.email
    )
  )
    errors.email = "ingrese un email válido";
  if (!userData.email) errors.email = "ingrese un email";
  if (userData.email.length > 35)
    errors.email = "ha superado el límite de 35 caracteres";

  //validaciones para password
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "la contraseña debe contener al menos un número";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      "la contraseña debe tener un tamaño entre 6 y 10 caracteres";
  }
  return errors;
};

export default validation;
