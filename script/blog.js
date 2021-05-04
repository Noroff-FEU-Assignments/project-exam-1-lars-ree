const resultsContainer = document.querySelector(".results");

const url = "https://www.jarberg.no/wp-json/wp/v2/posts";

async function callApi() {
  const response = await fetch(url);
  const json = await response.json();

  console.log(json);

  const results = json.id[74];

  results.forEach(function (result) {
    resultsContainer.innerHTML += "<h3>hfhf</h3>";
  });
}

callApi();
