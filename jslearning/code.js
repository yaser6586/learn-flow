async function myUser(url) {
  try {
    let userData = await fetch(url);
    let user = await userData.json();
    return user;
  } catch {
    throw new Error("oh no");
  }
}

let root = document.querySelector(".root");
myUser("file.json")
  .then((data) => (root.innerHTML = `<h1>${data.name}</h1>`))
  .catch((err) => (root.innerHTML = `<h1>${err.message}</h1>`));
