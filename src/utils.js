// @ts-check

export const toUpperCaseText = (text) => {
  return text.toUpperCase();
};

export const filtrarNumeros = (text) => {
  return text.replace(/[/[0-9]/g, "");
};

export const filtrarCaracteres = (text) => {
  return text.replace(/[`~!@#$%^&*·()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
};

export const onlyText = (text) => {
  const textUpper = toUpperCaseText(text);
  const textWithoutNumbers = filtrarNumeros(textUpper);
  const textWithoutCharSpecials = filtrarCaracteres(textWithoutNumbers);
  return textWithoutCharSpecials;
};
