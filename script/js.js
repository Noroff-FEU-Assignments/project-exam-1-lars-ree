const postContainer = document.querySelector(".post");

fetch("https://www.jarberg.no/wp-json/wp/v2/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

function createHTML(data) {
  post.forEach(function (data) {
    postContainer.innerHTML += `<div class="post">
  
        </div>`;
  });
}
