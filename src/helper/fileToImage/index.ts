export const fileToDataURL = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = () => {
      reject(new Error("Unable to read the file."));
    };
    reader.readAsDataURL(file);
  });
};
