export const getMapUrl = (lat, lon) => {
  const base = 'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road';
  const zoomLevel = 17;
  const key = 'AkRg5giPLHVpcYHMZjBuyb5RkFEiVtjLXBzQ8rId8ozy_jlKOJGZgaY9x-WsZH99';
  const mapWidth = 500;
  const mapHeight = 370;
  return `${base}/${lat},${lon}/?zoomLevel=${zoomLevel}&mapSize=${mapWidth},${mapHeight}&pp=${lat},${lon};54&key=${key}`
}

export const getMapLink = (lat, lon) => {
  const base = "https://bing.com/maps/default.aspx"
  return `${base}?cp=${lat}~${lon}&lvl=18&style=r`
}