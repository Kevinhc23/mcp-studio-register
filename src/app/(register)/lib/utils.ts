/**
 * funcion para validar cédula de identidad ecuatoriana
 * @param cedula Cédula de identidad a validar
 * @returns true si la cédula es válida, false en caso contrario
 */
export const validateCedula = (cedula: string): boolean => {
  const cleanCedula = cedula.replace(/[\s-]/g, "");

  if (!/^\d+$/.test(cleanCedula)) {
    return false;
  }

  if (cleanCedula.length !== 10) {
    return false;
  }

  const digits = cleanCedula.split("").map(Number);
  const checkDigit = digits[9];

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let digit = digits[i];

    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  const calculatedCheckDigit = (10 - (sum % 10)) % 10;
  return calculatedCheckDigit === checkDigit;
};
