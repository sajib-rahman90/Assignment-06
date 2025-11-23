// load-Categories and display-Categories functionality
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const displayCategories = (categories) => {
  //   console.log(categories);
  const catContainer = document.getElementById("categorise-container");
  //   console.log(categoriseContainer);
  catContainer.innerHTML = "";

  categories.forEach((cat) => {
    // console.log(cat);
    const catagoriDiv = document.createElement("div");
    catagoriDiv.innerHTML = `

        <button id = "cat-btn-${cat.id}" onclick = "loadTrees(${cat.id})" class="w-full hover:bg-green-600 text-[16px] btn-category">
              ${cat.category_name}
        </button>
    
    `;
    catContainer.append(catagoriDiv);
  });
};

// loadTrees and displayTrees functionality

const loadTrees = (id) => {
  document.getElementById("card-container").classList.add("hidden");
  document.getElementById("loading-spinner").classList.remove("hidden");

  const catBtn = document.querySelectorAll(".btn-category");
  catBtn.forEach((btn) => btn.classList.remove("active"));

  const currentBtn = document.getElementById(`cat-btn-${id}`);
  currentBtn.classList.add("active");

  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayTrees(data.plants));
};

const displayTrees = (trees) => {
  //   console.log(trees);

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  trees.forEach((tree) => {
    // console.log(tree);

    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `

         
            <div class="cart-items bg-white p-4 rounded-lg space-y-4">
              <img
                class="w-full max-h-[200px] object-cover rounded-lg"
                src="${tree.image}"
              />

              <div>
                <h4 onclick ="loadTreeDetails(${tree.id})" class="text-[#1f2937] text-[14px] font-semibold cursor-pointer">
                  ${tree.name}
                </h4>
                <p class="text-[#1f2937] text-[12px]">
                  ${tree.description}
                </p>
              </div>

              <div class="flex justify-between items-center">
                <p
                  class="bg-[#DCFCE7] text-[#15803d] text-[14px] rounded-full px-3 py-1"
                >
                  ${tree.category}
                </p>
                <p>৳ <span>${tree.price}</span></p>
              </div>

              <button
                class="btn w-full rounded-full py-2 text-white bg-[#15803d]"
              >
                Add to Cart
              </button>
            </div>
    
    `;
    cardContainer.append(cardDiv);
  });
  document.getElementById("card-container").classList.remove("hidden");
  document.getElementById("loading-spinner").classList.add("hidden");
};

const loadTreeDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTreeDetails(data.plants));
};

const displayTreeDetails = (plants) => {
  const displayModal = document.getElementById("display-modal");
  displayModal.innerHTML = `
           <h1 class="text-[#1f2937] text-[16px] font-bold">${plants.name}</h1>
          <img
            class="w-full max-h-[300px] object-cover rounded-lg"
            src="${plants.image}"
          />

          <div>
            <p class="text-[#1f2937] text-[14px]">
              <span class="font-semibold">Category:</span>
              ${plants.category}
            </p>
            <p class="text-[#1f2937] text-[14px] py-2">
              <span class="font-semibold">Price:</span>
              ${plants.price}
            </p>
            <p class="text-[#1f2937] text-[14px]">
              <span class="font-semibold">Description:</span>
              ${plants.description}
            </p>
  
  `;
  document.getElementById("my_modal_5").showModal();
};

const allPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayTrees(data.plants));
};

loadCategories();
allPlants();
