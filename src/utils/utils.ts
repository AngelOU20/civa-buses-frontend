/**
 * Formatea una fecha dada en una cadena legible en formato español.
 * @param dateString - Fecha en formato ISO o Date.
 * @returns Fecha formateada como cadena.
 */
export const formatDate = (dateString: string | Date) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
