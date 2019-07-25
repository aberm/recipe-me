console.log("connected");

const attachToListElement = jsonArray => {
  let itemEl;
  jsonArray.forEach(recipe => {
    itemEl = document.createElement("p");
    // itemEl.innerText = JSON.stringify(recipe);

    const p = document.createElement("p");
    p.innerHTML = `<a href="recipe-page.html?id=${
      recipe.id
    }">${recipe.recipeTitle + "\n" + recipe.username}</a>`;
    p.style.textAlign = "center";
    itemEl.appendChild(p);

    listEl.appendChild(itemEl);
  });
};

/*
const link = document.createElement("p");
link.style.textAlign = "center";
link.innerHTML = `<a href="/recipe-page">${recipe.recipeTitle}</a>`;
itemEl.appendChild(link);

const user = document.createElement("p");
user.style.textAlign = "center";
user.innerText = "by: " + recipe.username;
itemEl.appendChild(user);

listEl.appendChild(itemEl);
*/

// save list element to a variable
let listEl = document.getElementById("list");

// fetch recipes
fetch("http://localhost:3000/recipes?_page=1")
  .then(res => res.json())
  .then(res => {
    console.log(res);
    attachToListElement(res);
  });

// iterate over each json recipe and --
// recipeList.forEach(x => console.log(x));

// load recipes onto list element

// <ul>
// <li>one</li>
// <li>two</li>
// <li>three</li>
// </ul>

// ===============
// form processing

// grab our form
// make event listener on form submit ->
document
  .getElementById("newRecipe") // form element
  .addEventListener("submit", function(event) {
    event.preventDefault(); // make no reload
    console.log(event);

    // grab form info
    const title = event.target.elements["title"].value;
    const username = event.target.elements["username"].value;
    console.log(title, username);

    // make fetch request to database with said info
    // POST

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      body: JSON.stringify({
        recipeTitle: title,
        username: username
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        //TODO: create function to append HTML link
      });

    // then, make new html for that info,
    // and attach that html to our page
  });
