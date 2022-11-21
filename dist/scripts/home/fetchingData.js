const getHtml = async (page) => {
  const data = await fetch(`index.php?controller=User&action=${page}`);
  const value = await data.text();
  return value;
}

export {
  getHtml
}
