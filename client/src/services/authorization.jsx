function getUserId() {
  const userId = window.localStorage.getItem("userId");
  return userId;
}

function getToken() {
  const token = window.localStorage.getItem("token");
  return token;
}

function getUserName() {
  const userName = window.localStorage.getItem("userName");
  return userName;
}

function openSession(token, name, id) {
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("userName", name);
  window.localStorage.setItem("userId", id);
  return;
}

function closeSession() {
  window.localStorage.remove("token");
  window.localStorage.remove("userName");
  window.localStorage.remove("userId");
}
