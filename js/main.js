
//Cart working Js
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}
else {
    ready();
}

window.cartIconClick = function() {
    alert(100);
}

function getQueryParam() {
    var search = window.location.search;
    if (search) {
        return JSON.parse('{"' + decodeURI(search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }
    return null;
}

function createElementWithClass(tag, cls) {
    var element = document.createElement(tag);

    var classes = cls.split(" ");
    for (var item of classes) {
        if (item) {
            element.classList.add(item);
        }
    }

    return element;
}

function createProductElement(product) {
    var img = createElementWithClass("img", "product-img");
    img.src = product.image;

    var titleText = document.createTextNode(product.title);
    var title = createElementWithClass("h2", "product-title");
    title.append(titleText);

    var priceText = document.createTextNode(product.price);
    var price = createElementWithClass("span", "price");
    price.append(priceText);

    var button = createElementWithClass("i", 'bx bx-shopping-bag add-cart');
    var productElement = createElementWithClass("div", "product-box");

    productElement.appendChild(img);
    productElement.appendChild(title);
    productElement.appendChild(price);
    productElement.appendChild(button);
    return productElement;
}

function isContentActive(content) {
    console.log('content: ', content);
    return window.location.search.indexOf(content) != -1 ? 'active' : '';
}

//Function
function ready() {

    // [[0,1,2,3] ,[4,5,6,7] ,[8,9,10,11] ,[12,13,14,15] ,[16,17,18,19]]
    // from = (itemPerPage - 1) * (page-1)

    // Get current page from query params
    var params = getQueryParam() || {};

    // Render posts withh pagination
    var postsList = document.getElementById("post-container");
    var postsPage = document.getElementById("pagination");

    var currentPage = params.page  ? params.page : 1;
    var itemPerPage = params.size ? params.size : 4;

    console.log('params: ', params);
    console.log('currentPage: ', currentPage);
    console.log('posts: ', posts);

    if (posts) {

        // Calculation posts per page
        const startIndex = (itemPerPage) * (currentPage - 1);
        const endIndex = ((itemPerPage) * currentPage);

        console.log(startIndex + " " + endIndex);

        for (var index = startIndex; index < endIndex; index++) {
            const post = posts[index];
            var product = createProductElement(post);
            postsList.appendChild(product);
        }

        // Calculation total page of total items
        var totalPages = Math.ceil(posts.length / itemPerPage);

        var page = 1;

        while (page <= totalPages) {
            console.log('page: ', page)
            var pageText = document.createTextNode(page);
            var link = createElementWithClass("a", page == currentPage ? "active" : "");
            link.setAttribute("href", "?page=" + page);
            link.appendChild(pageText);
            postsPage.appendChild(link);
            page++;
        }
    }


    // Render menu
    var menuContent1 = document.getElementById("vertical-menu");
    var menuContent2 = document.getElementById("horizontal-menu");

    if (menus) {
        var menuHtml = '';
        for (var menu of menus) {
            var active = isContentActive(menu.href.substring(1));
            menuHtml += '<li><a href="' + menu.href + '" class="' + active + '">' + menu.title + '</a></li>';
        }

        menuHtml += '<li><a href="#"><i class="bx bx-shopping-bag cart-icon" id="cart-icon"></i></a></li>';

        menuContent1.innerHTML = menuHtml;
        menuContent2.innerHTML = menuHtml;



        //Cart
        let cart = document.querySelector(".cart");
        // let cartIcon = document.querySelector("#cart-icon");
        let closeCart = document.querySelector("#close-cart");
        let cartIcon = document.querySelectorAll(".cart-icon");


        cartIcon.forEach(icon => {
            icon.onclick = () => {
                cart.classList.toggle("active");
            };
        });

        //Open cart
        // cartIcon.onclick = () => {
        //     alert(11);
        //     cart.classList.add("active");
        // };
        //Remove cart
        closeCart.onclick = () => {
            cart.classList.remove("active");
        };


        var removeCartButton = document.getElementsByClassName("cart-remove");
    
        console.log(removeCartButton);
        for (var i = 0; i < removeCartButton.length; i++) {
            var button = removeCartButton[i];
            button.addEventListener("click", removeCartItem);
        }
        // Quantity Change
        var quantityInputs = document.getElementsByClassName("cart-quantity");
        for (var i = 0; i < quantityInputs.length; i++) {
            var input = quantityInputs[i];
            input.addEventListener("change", quantityChanged);
        }
        //Add to Cart
        var addCart = document.getElementsByClassName("add-cart");
        for (var i = 0; i < addCart.length; i++) {
            var button = addCart[i];
            button.addEventListener("click", addCartClicked);
        }
        // Buy Button work
        document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);


    }



    // Render page content
    var bodyContent = document.getElementById("page-content");
    var contentPage = params.content ? params.content : 'home';

    if (contentPage == "home") {
        const content = createElementWithClass("div", "home-page");
        content.innerHTML = "<h1>Hello home Page</h1>";
        content.innerHTML += "<p>Content of home page</p>";
        bodyContent.appendChild(content);


    } else {
        const content = createElementWithClass("div", contentPage + "-page");
        content.innerHTML = "<h1>Hello " + contentPage + "</h1>";
        content.innerHTML += "<p>.........</p>";
        bodyContent.appendChild(content);
    }

    const bar = document.getElementById('bar');
    const nav = document.getElementById('horizontal-menu');

    
    if (bar) {
        bar.addEventListener("click", () => {
            console.log("bar.click");
            nav.classList.toggle('active');
        })
    }


    {/* <div class="product-box">
    <img src="img/page1/dior1.png" alt="" class="product-img">
    <h2 class="product-title">Christian Dior</h2>
    <span class="price">$2104</span>
    <i class='bx bx-shopping-bag add-cart'></i>
</div> */}
}
// Buy button
function buyButtonClicked() {
    alert("Your Order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}
// Add to Cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("You have already add this item to cart");
            return;
        }
    }
    var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!--remove cart-->
                        <i class='bx bxs-trash-alt cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);
}


//Remove Item from Cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
        // Price cent
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
}
// Cart Mobile








