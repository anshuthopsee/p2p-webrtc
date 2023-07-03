 export const shortenFilename = (str) => {
  if (str.length > 20) {
    return str.slice(0, 7) + "..." + str.slice(-5);
  };
  return str;
};

export const downloadFile = (chunks, fileName) => {
  const blob = new Blob(chunks);
  const a = document.createElement('a');
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
};