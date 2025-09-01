export const validatePhrase = (text: string) => {
  const auxText = text.trim().replace(/\s{2,}/g, " ");
  return auxText.length >= 5 && auxText.length <= 200;
};

export const escapeRegExp = (s: string) =>
  s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
