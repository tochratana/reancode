const container_cart = document.querySelector(".container-cart");

// fetch data from json file

async function functionFetchJson() {
  const partJsonFile = "../data/courses.json";

  try {
    const fetchJson = await fetch(partJsonFile);
    if (!fetchJson.ok) {
      throw new Error(`HTTP error! Status: ${fetchJson.status}`);
    }

    const data = await fetchJson.json();
    console.log(data); // Successfully parsed JSON

    data.forEach((element) => {
      console.log(element.id);
      console.log(element.detail[0]);
      container_cart.innerHTML += `
	<div class="card">
          <div class="card-image">
            <img src="${element.image}" alt="ui/ux review check" />
            
            <button class="heart-button">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div class="card-content">
            <div class="card-header">
              <h5>${element.title}</h5>
              <p class="rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="star-icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ${element.rating}
              </p>
            </div>
            <p class="description">
              ${element.desciption} :
            </p>
            <ul>
              <li class="des-of-courses">
                <i class="fa-solid fa-check"></i>
                <p>${element.detail[0]}</p>
              </li>
              <li class="des-of-courses">
                <i class="fa-solid fa-check"></i>
                <p>${element.detail[1]}</p>
              </li>
              <li class="des-of-courses">
                <i class="fa-solid fa-check"></i>
                <p>${element.detail[2]}</p>
              </li>
              ${
                element.detail[3]
                  ? `<li class="des-of-courses">
                    <i class="fa-solid fa-check"></i>
                    <p>${element.detail[3]}</p>
                  </li>`
                  : ``
              }

              ${
                element.detail[4]
                  ? `<li class="des-of-courses">
                    <i class="fa-solid fa-check"></i>
                    <p>${element.detail[4]}</p>
                  </li>`
                  : ``
              }
              
            </ul>
          </div>
          <div class="card-footer">
          <a href="${
            element.link
          }"><button class="reserve-button">ចាប់ផ្តើម</button></a>
          </div>
        </div>
	`;
    });
  } catch (error) {
    console.log("Json Not Found or an error occurred:", error.message);
  }
}

functionFetchJson();
