const createSvg = (vh,vw,width,height) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "viewBox", `0 0 ${vh} ${vw}`);
  svg.setAttributeNS(null, "width", `${width}em`);
  svg.setAttributeNS(null, "height", `${height}em`);
  return svg;
}

export {
  createSvg
}
