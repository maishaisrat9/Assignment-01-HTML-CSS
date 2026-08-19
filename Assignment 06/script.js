/* =========================================
   API
========================================= */

const API = "https://openapi.programming-hero.com/api";


/* =========================================
   ELEMENTS
========================================= */

const categoryList =
    document.getElementById("category-list");

const treeContainer =
    document.getElementById("tree-container");

const modal =
    document.getElementById("tree-modal");

const modalClose =
    document.getElementById("modal-close");

const modalImage =
    document.getElementById("modal-image");

const modalName =
    document.getElementById("modal-name");

const modalDescription =
    document.getElementById("modal-description");

const modalCategory =
    document.getElementById("modal-category");

const modalPrice =
    document.getElementById("modal-price");

const cartItems =
    document.getElementById("cart-items");

const cartTotal =
    document.getElementById("cart-total");


/* =========================================
   CART
========================================= */

let cart = [];


/* =========================================
   IMAGE URL FUNCTION
========================================= */

function getImageUrl(imageUrl) {

    if (!imageUrl) {
        return "";
    }

    /*
        API image URL is passed through
        wsrv.nl image proxy.
    */

    return `https://wsrv.nl/?url=${encodeURIComponent(imageUrl)}`;
}


/* =========================================
   1. LOAD CATEGORIES
========================================= */

async function loadCategories() {

    try {

        const response =
            await fetch(
                `${API}/categories`
            );


        const data =
            await response.json();


        console.log(
            "Categories:",
            data
        );


        /*
            Remove old categories
        */

        categoryList.innerHTML = "";


        /* =================================
           ALL TREES
        ================================= */

        const allTrees =
            document.createElement("li");


        allTrees.id =
            "all-trees";


        allTrees.classList.add(
            "active"
        );


        allTrees.innerText =
            "All Trees";


        allTrees.addEventListener(
            "click",
            function () {

                setActiveCategory(
                    allTrees
                );


                loadAllPlants();

            }
        );


        categoryList.appendChild(
            allTrees
        );


        /* =================================
           API CATEGORIES
        ================================= */

        data.categories.forEach(
            function (category) {

                const li =
                    document.createElement("li");


                li.innerText =
                    category.category_name;


                li.dataset.id =
                    category.id;


                /*
                    Category Click
                */

                li.addEventListener(
                    "click",
                    function () {

                        setActiveCategory(
                            li
                        );


                        loadPlantsByCategory(
                            category.id
                        );

                    }
                );


                categoryList.appendChild(
                    li
                );

            }
        );

    }

    catch (error) {

        console.error(
            "Category Error:",
            error
        );


        categoryList.innerHTML = `

            <li>
                Failed to load categories
            </li>

        `;

    }

}


/* =========================================
   ACTIVE CATEGORY
========================================= */

function setActiveCategory(
    selected
) {

    const categories =
        document.querySelectorAll(
            "#category-list li"
        );


    categories.forEach(
        function (item) {

            item.classList.remove(
                "active"
            );

        }
    );


    selected.classList.add(
        "active"
    );

}


/* =========================================
   2. LOAD ALL PLANTS
========================================= */

async function loadAllPlants() {

    treeContainer.innerHTML = `

        <p>
            Loading trees...
        </p>

    `;


    try {

        const response =
            await fetch(
                `${API}/plants`
            );


        const data =
            await response.json();


        console.log(
            "All Plants:",
            data
        );


        displayPlants(
            data.plants
        );

    }

    catch (error) {

        console.error(
            "All Plants Error:",
            error
        );


        treeContainer.innerHTML = `

            <p>
                Failed to load trees.
            </p>

        `;

    }

}


/* =========================================
   3. LOAD PLANTS BY CATEGORY
========================================= */

async function loadPlantsByCategory(
    id
) {

    treeContainer.innerHTML = `

        <p>
            Loading trees...
        </p>

    `;


    try {

        const response =
            await fetch(
                `${API}/category/${id}`
            );


        const data =
            await response.json();


        console.log(
            "Category Plants:",
            data
        );


        displayPlants(
            data.plants
        );

    }

    catch (error) {

        console.error(
            "Category Plants Error:",
            error
        );


        treeContainer.innerHTML = `

            <p>
                Failed to load trees.
            </p>

        `;

    }

}


/* =========================================
   4. DISPLAY PLANT CARDS
========================================= */

function displayPlants(
    plants
) {

    treeContainer.innerHTML = "";


    /*
        Check empty data
    */

    if (
        !plants ||
        plants.length === 0
    ) {

        treeContainer.innerHTML = `

            <p>
                No trees found.
            </p>

        `;

        return;

    }


    /*
        Create every tree card
    */

    plants.forEach(
        function (plant) {

            const card =
                document.createElement(
                    "div"
                );


            card.classList.add(
                "tree-card"
            );


            /* =================================
               IMAGE URL
            ================================= */

            const imageUrl =
                getImageUrl(
                    plant.image
                );


            /* =================================
               CARD HTML
            ================================= */

            card.innerHTML = `

                <!-- Image -->

                <div class="tree-image">

                    <img
                        src="${imageUrl}"
                        alt="${plant.name}"
                        loading="lazy"
                    >

                </div>


                <!-- Name -->

                <h3 class="tree-name">

                    ${plant.name}

                </h3>


                <!-- Description -->

                <p>

                    ${plant.description}

                </p>


                <!-- Category + Price -->

                <div class="card-info">

                    <span>

                        ${plant.category}

                    </span>


                    <strong>

                        ৳${plant.price}

                    </strong>

                </div>


                <!-- Add To Cart -->

                <button
                    class="add-cart-btn"
                    type="button"
                >

                    Add to Cart

                </button>

            `;


            /* =================================
               IMAGE ERROR HANDLING
            ================================= */

            const image =
                card.querySelector(
                    ".tree-image img"
                );


            image.addEventListener(
                "error",
                function () {

                    /*
                        If proxy fails,
                        try original image.
                    */

                    if (
                        this.src !==
                        plant.image
                    ) {

                        this.src =
                            plant.image;

                    }

                    else {

                        this.style.display =
                            "none";

                    }

                }
            );


            /* =================================
               TREE NAME → MODAL
            ================================= */

            const treeName =
                card.querySelector(
                    ".tree-name"
                );


            treeName.addEventListener(
                "click",
                function () {

                    loadPlantDetails(
                        plant.id
                    );

                }
            );


            /* =================================
               ADD TO CART
            ================================= */

            const addButton =
                card.querySelector(
                    ".add-cart-btn"
                );


            addButton.addEventListener(
                "click",
                function () {

                    addToCart(
                        plant
                    );

                }
            );


            treeContainer.appendChild(
                card
            );

        }
    );

}


/* =========================================
   5. GET PLANT DETAILS
========================================= */

async function loadPlantDetails(
    id
) {

    try {

        const response =
            await fetch(
                `${API}/plant/${id}`
            );


        const data =
            await response.json();


        console.log(
            "Plant Details:",
            data
        );


        openModal(
            data.plants
        );

    }

    catch (error) {

        console.error(
            "Plant Details Error:",
            error
        );

    }

}


/* =========================================
   6. OPEN MODAL
========================================= */

function openModal(
    plant
) {

    /*
        Use image proxy
    */

    modalImage.src =
        getImageUrl(
            plant.image
        );


    modalImage.alt =
        plant.name;


    modalName.innerText =
        plant.name;


    modalDescription.innerText =
        plant.description;


    modalCategory.innerText =
        plant.category;


    modalPrice.innerText =
        plant.price;


    modal.classList.add(
        "show"
    );

}


/* =========================================
   MODAL IMAGE ERROR
========================================= */

modalImage.addEventListener(
    "error",
    function () {

        /*
            Try original image
        */

        const currentPlantImage =
            modalImage.src;

        /*
            If proxy fails,
            hide broken image.
        */

        if (
            currentPlantImage
        ) {

            this.style.display =
                "none";

        }

    }
);


/* =========================================
   7. CLOSE MODAL
========================================= */

modalClose.addEventListener(
    "click",
    function () {

        modal.classList.remove(
            "show"
        );

    }
);


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

modal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === modal
        ) {

            modal.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            modal.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================
   8. ADD TO CART
========================================= */

function addToCart(
    plant
) {

    const existingItem =
        cart.find(
            function (item) {

                return (
                    item.id ===
                    plant.id
                );

            }
        );


    /*
        Already in cart
    */

    if (existingItem) {

        existingItem.quantity++;

    }


    /*
        New item
    */

    else {

        cart.push({

            id:
                plant.id,

            name:
                plant.name,

            price:
                Number(plant.price),

            image:
                plant.image,

            quantity:
                1

        });

    }


    renderCart();

}


/* =========================================
   9. RENDER CART
========================================= */

function renderCart() {

    cartItems.innerHTML = "";


    let total = 0;


    /*
        Display every cart item
    */

    cart.forEach(
        function (item) {

            total +=
                item.price *
                item.quantity;


            const cartItem =
                document.createElement(
                    "div"
                );


            cartItem.classList.add(
                "cart-item"
            );


            cartItem.innerHTML = `

                <div>

                    <strong>

                        ${item.name}

                    </strong>


                    <small>

                        ৳${item.price}
                        ×
                        ${item.quantity}

                    </small>

                </div>


                <span
                    class="remove-cart"
                    title="Remove"
                >

                    ×

                </span>

            `;


            /*
                Remove button
            */

            const removeButton =
                cartItem.querySelector(
                    ".remove-cart"
                );


            removeButton.addEventListener(
                "click",
                function () {

                    removeFromCart(
                        item.id
                    );

                }
            );


            cartItems.appendChild(
                cartItem
            );

        }
    );


    /*
        Update total
    */

    cartTotal.innerText =
        `৳${total}`;

}


/* =========================================
   10. REMOVE FROM CART
========================================= */

function removeFromCart(
    id
) {

    cart =
        cart.filter(
            function (item) {

                return (
                    item.id !== id
                );

            }
        );


    renderCart();

}


/* =========================================
   11. INITIAL LOAD
========================================= */

loadCategories();

loadAllPlants();

renderCart();