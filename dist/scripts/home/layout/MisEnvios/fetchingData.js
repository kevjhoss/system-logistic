const getShipment = async () => {
  const form = new FormData();
  form.append("id_cliente", 1);
  const datas = await fetch("index.php?controller=User&action=getDetails", {
    method: "POST",
    body: form
  });
  const values = await datas.json();
  console.log(values);
}

export {
  getShipment
}
