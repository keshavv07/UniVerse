async function getUniversities(country) {
  const container = document.getElementById("container");
  container.innerHTML = "Fetching Data...";

  try {
    const res = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
    const data = await res.json();

    displayData(data);

  } catch (error) {
    container.innerHTML = "Something went wrong";
    console.log(error);
  }
}

function displayData(data) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  data.forEach(function (u) {

    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("h3");
    name.innerText = u.name;

    const country = document.createElement("p");
    country.innerText = "Country: " + u.country;

    const domain = document.createElement("p");
    domain.innerText = "Domain: " + u.domains[0];

    const link = document.createElement("a");
    link.innerText = "Visit Website";
    link.href = u.web_pages[0];
    link.target = "_blank";

    card.appendChild(name);
    card.appendChild(country);
    card.appendChild(domain);
    card.appendChild(link);

    container.appendChild(card);
  });
}

function handleSearch() {
  const country = document.getElementById("country").value;

  if (country === "") {
    alert("Please enter a country");
    return;
  }

  getUniversities(country);
}