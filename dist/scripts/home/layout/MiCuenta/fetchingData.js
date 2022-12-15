const getUserData = async () => {
  const data = await fetch("index.php?controller=User&action=getUserInfo");
  const value = await data.json();
  return value[0];
}

export {
  getUserData
}
