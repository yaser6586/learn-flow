async function userList(url) {
  // this async function generate promise i use it for fetch json from other website
  try {
    // await keyword is like chain then in promise object
    let userData = await fetch(url);
    let userList = await userData.json();
    //  this return returned userList  that its value of resolve function in promise
    return userList;
  } catch {
    throw new Error("file was not found");
  }
}

let lists = document.querySelector(".list");
userList("https://jsonplaceholder.typicode.com/users").then(
  (list) =>
    // above list parameter actually is the userList that userList function returned
    (lists.innerHTML = list.map(
      (li) =>
        // we use map to generate div tag contain name of json object
        `<div   key=${li.id} class='listItem'>user ${li.id} is ${li.name}<button class="dl">X</button></div>`
    ))
);
