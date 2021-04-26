const resultsContainer = document.querySelector(".results");

const url = "https://www.jarberg.no/wp-json/wp/v2/posts";

async function callApi() {
  const response = await fetch(url);
  const json = await response.json();

  console.log(json);

  const results = json.all;

  results.forEach(function (result) {
    resultsContainer.innerHTML += `<div>${result[0]}</div>`;
  });
}

callApi();
