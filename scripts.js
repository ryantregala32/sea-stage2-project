/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


// const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

let catalog = [
    { name: "Yamaha F325D Dreadnought Acoustic Guitar", category: "guitar", price: 199.99, imageURL: "https://m.media-amazon.com/images/I/61RLzFHpZNL._AC_SL1500_.jpg" },
    { name: "Fender Stratocaster Electric Guitar", category: "guitar", price: 799.99, imageURL: "https://media.guitarcenter.com/is/image/MMGS7/M08143000001000-02-600x600.jpg" },
    { name: "Epiphone 60's Standard Les Paul Guitar - Iced Tea", category: "guitar", price: 699.00, imageURL: "https://i.imgur.com/nJHz9qv_d.webp?maxwidth=1520&fidelity=grand" },
    { name: "Squier 40th Anniversary Precision Bass Guitar Vintage Edition Satin Dakota Red", category: "bass", price: 399.99, imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L92325000002000-02-600x600.jpg" },
    { name: "Fender American Ultra Jazz Electric Bass", category: "bass", price: 2299.99, imageURL: "https://cf1.zzounds.com/media/productmedia/fit,600by800/quality,85/1_Full_Straight_Front_NA-97f4566378d0b62870350aeaaee0b0a5.jpg" }
];

// Function to display catalog items
function showCatalog() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    catalog.forEach(item => {
        const nextCard = createCard(item);
        cardContainer.appendChild(nextCard);
    });
}

// Function to create a card for a catalog item
function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const title = document.createElement("h2");
    title.textContent = item.name;

    const image = document.createElement("img");
    image.src = item.imageURL;
    image.alt = item.name + " Image";

    const price = document.createElement("p");
    price.textContent = "Price: $" + item.price.toFixed(2);

    const category = document.createElement("p");
    category.textContent = "Category: " + item.category;

    cardContent.appendChild(title);
    cardContent.appendChild(image);
    cardContent.appendChild(price);
    cardContent.appendChild(category);

    card.appendChild(cardContent);

    return card;
}
yfc
// This calls the showCatalog() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCatalog);

function searchByName() {
    // Get the search input value
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    
    // Filter the catalog based on the search input
    const searchResults = catalog.filter(item => item.name.toLowerCase().includes(searchInput));
    
    // Display the search results
    if (searchResults.length > 0) {
        displayCatalog(searchResults);
    } else {
        alert('No items found matching your search.');
    }
}

// Function to remove the corresponding card from the catalog
function removeItem(button) {
    const card = button.closest('.card');
    const index = Array.from(card.parentNode.children).indexOf(card);
    catalog.splice(index, 1);
    catalog.pop();
    catalog.showCatalog();
}

