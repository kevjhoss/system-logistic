const setValue = key => e => localStorage.setItem(key, e.target.value);
const getValue = key => () => localStorage.getItem(key) || "";

export {
  setValue,
  getValue
}
