// @ts-check


export const toUpperCaseText = ( text ) => {
  return text.toUpperCase();
};

export const filtrarNumeros = (text) => {
  return text.replace(/[/[0-9]/g,'')
}