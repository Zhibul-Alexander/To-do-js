const TODO_LIST_KEY = "app-todo";

function getStorageData(key) {
  let data = JSON.parse(localStorage.getItem(key));
  return data ? data : [];
}

function setStorageData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getStorageData, setStorageData, TODO_LIST_KEY };
