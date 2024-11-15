/**
 * Obtiene las variables de entorno de la aplicación.
 * 
 * Esta función utiliza `import.meta.env` para acceder a las variables de entorno
 * definidas en el entorno de Vite y devuelve un objeto que contiene todas las variables.
 * 
 * @returns Un objeto donde cada clave es una variable de entorno y su valor es
 *          un string o `undefined` si la variable no está definida.
 */
export const getEnvVariables = (): Record<string, string | undefined> => {
  return {
    ...import.meta.env, // Copia todas las variables de entorno definidas en Vite
  };
};
