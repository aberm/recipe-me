const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

fetch("http://localhost:3000/recipes/" + id)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    // attachToInfoElement(res);
  });
