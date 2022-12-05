const getShipment = async () => {
  const form = new FormData();
  form.append("id_cliente", localStorage.getItem("id_cliente"));
  const datas = await fetch("index.php?controller=User&action=getDetails", {
    method: "POST",
    body: form
  });
  const values = await datas.json();
  return values;
}

export {
  getShipment
}
