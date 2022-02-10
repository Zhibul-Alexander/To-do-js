function getUUID() {
  const id =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return id;
}

function getCurrentTime() {
  const date = new Date().toLocaleTimeString();
  return date;
}

export { getUUID, getCurrentTime };
