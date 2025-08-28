export const validatePhrase = (text: string) => {
  const auxText = text.trim();
  if (auxText) {
    return text.trim().length <= 150;
  } else {
    return false;
  }
};

export const escapeRegExp = (s: string) =>
  s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
