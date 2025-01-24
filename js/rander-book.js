fetch("../data/book.json")
  .then((response) => response.json())
  .then((data) => {
    const searchInput = document.getElementById("search");
    const cardContainer = document.getElementById("card-container");

    // Function to render cards
    const renderCards = (cards) => {
      cardContainer.innerHTML = ""; // Clear existing cards
      cards.forEach((element) => {
        cardContainer.innerHTML += `
          <div class="container-resource">
            <div class="box-of-resource">
              <img
                class="img-resoruce"
                src="${element.image}"
                alt=""
              />
            </div>
  
            <div class="resources-description">
              <h1 class="title-book">${element.title}</h1>
              <p class="line-clamp-2">
                ${element.description}
              </p>
              <div class="btn-read-download">
                <a href="${element.readnow}" target="_blank">
                  <i class="fa-solid fa-book-open"></i>
                  <p>អានទីនេះ</p>
                </a>
                <a
                  href="${element.download}"
                  download="html5-cheat-sheet"
                >
                  <i class="fa-solid fa-download"></i>
                  <p>ទាញយក</p>
                </a>
              </div>
            </div>
          </div>
        `;
      });
    };

    // Initial render of all cards
    renderCards(data);

    // Search functionality
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filteredCards = data.filter((card) =>
        card.title.toLowerCase().includes(query)
      );
      renderCards(filteredCards);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
