function getDateNow() {
  let today = new Date();
  return today.getHours() + ':' + today.getMinutes();
}

export default getDateNow;
