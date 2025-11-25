// load-Categories and display-Categories functionality
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

let cart = [];
let total = 0;

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

         
            <div class="cart-items h-full bg-white p-4 rounded-lg space-y-4">
              <img
                class="w-full max-h-[200px] object-cover rounded-lg"
                src="${tree.image}"
              />

              <div>
                <h4 onclick ="loadTreeDetails(${tree.id})" class="text-[#1f2937] text-[14px] font-semibold cursor-pointer tree-title">
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
                <p >৳<span class="tree-price">${tree.price}</span> </p>
              </div>

              <button onclick ="addToCart(this)"
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

// loadTreeDetails functionality
const loadTreeDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTreeDetails(data.plants));
};

// displayTreeDetails functionality
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

//  Random Plant show functionality
const allPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayTrees(data.plants));
};

loadCategories();
allPlants();

// addToCart functionality
const addToCart = (btn) => {
  // console.log(btn);
  const card = btn.parentNode;
  const treeTitle = card.querySelector(".tree-title").innerText;
  const treePrice = Number(card.querySelector(".tree-price").innerText);
  // console.log(treeTitle, treePrice);

  const cartItems = {
    id: cart.length + 1,
    treeTitle: treeTitle,
    treePrice: treePrice,
  };
  cart.push(cartItems);
  total = total + treePrice;
  displayCart(cart);
  displayTotal(total);
  alert(`${treeTitle} has been added to the cart.`);
};

// displayTotal functionality
const displayTotal = (val) => {
  document.getElementById("cart-total").innerHTML = val;
};

// displayCart functionality
const displayCart = (cart) => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  for (let item of cart) {
    const newItem = document.createElement("div");
    newItem.innerHTML = `
    
              <div
                class="bg-[#f0fdf4] flex items-center justify-between rounded-lg py-2 px-3"
              >
                <span class="hidden cart-id">${item.id}</span>
                <div>
                  <h4 class="cart-title text-[#1f2937] text-[14px] font-semibold">${item.treeTitle}</h4>
                  <p class=" text-[#1f2937] text-[12px]">৳<span class = "cart-price">${item.treePrice}</span></p>
                </div>
                <div onclick= "removeCart(this)">
                  <i class="fa-solid fa-xmark text-red-600"></i>
                </div>
              </div>
    
    `;
    cartContainer.append(newItem);
  }
};

//  removeCart functionality
const removeCart = (btn) => {
  const item = btn.parentNode;
  const cartId = Number(item.querySelector(".cart-id").innerText);
  const cartPrice = Number(item.querySelector(".cart-price").innerText);
  // console.log(cartPrice);

  cart = cart.filter((item) => item.id != cartId);
  total = 0;
  cart.forEach((items) => (total += items.treePrice));
  displayCart(cart);
  displayTotal(total);
};
