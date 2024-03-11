async function exampleFetch() {
  const response = await fetch(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json"
  );
  const json = await response.json();
  console.log(json);

  const itemTextElements = document.getElementsByClassName("item_text");

  for (
    let i = 0;
    i < itemTextElements.length &&
    i < json.programming_languages_popular.length;
    i++
  ) {
    const termineRicerca = json.programming_languages_popular[i].toLowerCase();
    const urlWikipedia = "https://it.wikipedia.org/wiki/" + termineRicerca;

    itemTextElements[
      i
    ].innerHTML = `<a href="${urlWikipedia}" target="_blank">${json.programming_languages_popular[i]}</a>`;
  }

  console.log(itemTextElements);

  const dropdownParent = document.getElementById("nav-menu-item-27789");
  if (dropdownParent) {
    dropdownParent.parentNode.removeChild(dropdownParent);
  }

  document.querySelector(".eltdf-normal-logo").src =
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png";
}

exampleFetch();
