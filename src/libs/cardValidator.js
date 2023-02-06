import valid from "card-validator";

export const validateCard = (cardNumber = "") => {
  const info = { isValid: false, type: "" };
  const numberValidation = valid.number(cardNumber);

  info.isValid = numberValidation.isPotentiallyValid;

  if (numberValidation.card) {
    info.type = numberValidation.card.type;
  }

  return info;
};
