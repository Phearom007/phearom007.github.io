let cart = fetchCart();

var addItemToCart = (product) => {
    // const exists = findItemInCart(product);
    // if (exists) {
    //     updateItemInCart(product);
    // } else {
    //     cart.push(product);
    // }

    var exists = false;
    cart = cart.map(item => {
        if (item.id == product.id) {
            exists = true;
            return product;
        } else {
            return item;
        }
    });
    if (!exists) {
        cart.push(product);
    }
    updateCart();
};

var findItemInCart = (product) => {
  if (!cart || !product) {
    return null;
  }
  return cart.find((item) => item.id === product.id);
};

var updateItemInCart = (product) => {
    // for (var index = 0; index<cart.length; index++) {
    //     if (cart[index].id == product.id) {
    //         cart[index].title = product.title;
    //         cart[index].price = product.price;
    //     }
    // }
    cart = cart.map(item => {
        return item.id == product.id ? product : item;
    });
    updateCart();
};

var deleteItemFromCart = (product) => {
    // for (var index = 0; index<cart.length; index++) {
    //     if (cart[index].id == product.id) {
    //         delete cart[index];
    //     }
    // }
    cart = cart.filter(item => {
        return item.id != product.id
    });
    updateCart();
};

function updateCart () {
    localStorage.setItem("cart", JSON.stringify(cart));
};

function fetchCart () {
    var text = localStorage.getItem("cart");
    return text ? JSON.parse(text) : [];
};

function getTotalPrice() {
    return cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        const quantity = parseInt(item.quantity);
        return total + (price * quantity);
    }, 0);
}

function getTotalPriceUSD() {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    var total = getTotalPrice();
    return formatter.format(total);
}

