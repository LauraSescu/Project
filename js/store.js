
filter = false;
spring = false;
summer = false;
autumn = false;
winter = false;
wedding = false;
everyday = false;
surprise = false;
var page = 0;
paged = true;

var shoppingCart = (function() {

    cart = [];
    items = [];
    list = [];
    var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante in nibh mauris cursus mattis molestie. Integer quis auctor elit sed vulputate mi sit amet. Vitae justo eget magna fermentum iaculis eu non diam. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Nunc sed blandit libero volutpat sed cras. Commodo viverra maecenas accumsan lacus. Proin libero nunc consequat interdum. Consectetur adipiscing elit duis tristique sollicitudin. Viverra mauris in aliquam sem fringilla ut morbi. Ut tristique et egestas quis ipsum suspendisse. In est ante in nibh. Turpis nunc eget lorem dolor sed viverra ipsum. Et sollicitudin ac orci phasellus egestas tellus rutrum. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Diam maecenas ultricies mi eget mauris pharetra. Mauris vitae ultricies leo integer malesuada nunc vel. At urna condimentum mattis pellentesque id. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.\n" +
        "\n" +
        "Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Consequat mauris nunc congue nisi vitae suscipit. Porttitor rhoncus dolor purus non enim. Posuere urna nec tincidunt praesent. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Quam pellentesque nec nam aliquam sem et tortor. Eget felis eget nunc lobortis. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Amet porttitor eget dolor morbi. Nec ullamcorper sit amet risus. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Nisl rhoncus mattis rhoncus urna. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Risus in hendrerit gravida rutrum quisque non tellus orci. Pellentesque habitant morbi tristique senectus. Gravida rutrum quisque non tellus orci. Sed lectus vestibulum mattis ullamcorper.";

    var item0 = new Item("Love", 65.99, 1, "Autumn", description, "Red", "img/f01.jpg","wedding",1,["img/f01.jpg","img/f02.jpg","img/f03.jpg","img/f04.jpg"]);
    var item1 = new Item("Alta", 45.99, 1, "Winter", description, "Blue", "img/f02.jpg","wedding",2,["img/f02.jpg","img/f03.jpg","img/f04.jpg","img/f05.jpg"]);
    var item2 = new Item("Flower", 39.99, 1, "Winter", description, "White", "img/f03.jpg","everyday",3,["img/f03.jpg","img/f04.jpg","img/f05.jpg","img/f06.jpg"]);
    var item3 = new Item("Starter", 34.99, 1, "Summer", description, "Blue","img/f04.jpg", "everyday",4,["img/f04.jpg","img/f05.jpg","img/f06.jpg","img/f07.jpg"]);
    var item4 = new Item("Guest", 24.99, 1, "Spring", description, "Red", "img/f05.jpg", "everyday",5,["img/f05.jpg","img/f06.jpg","img/f07.jpg","img/f08.jpg"]);
    var item5 = new Item("Soul", 19.99, 1, "Spring", description, "Yellow", "img/f06.jpg", "everyday",6,["img/f06.jpg","img/f07.jpg","img/f08.jpg","img/f09.jpg"]);
    var item6 = new Item("Morning", 89.99, 1, "Summer", description, "Yellow", "img/f07.jpg", "everyday",7,["img/f07.jpg","img/f08.jpg","img/f09.jpg","img/f10.jpg"]);
    var item7 = new Item("Valentine", 14.99, 1, "Summer", description, "Green", "img/05.jpg", "surprise",8,["img/f08.jpg","img/f09.jpg","img/f10.jpg","img/f11.jpg"]);
    var item8 = new Item("Flower", 12.99, 1, "Summer", description, "Green", "img/spring.jpg", "surprise",9,["img/f09.jpg","img/f10.jpg","img/f11.jpg","img/f12.jpg"]);
    var item9 = new Item("Red", 9.99, 1, "Autumn", description, "Green", "img/summer.jpeg", "surprise",10,["img/f10.jpg","img/f11.jpg","img/f12.jpg","img/f01.jpg"]);
    var item10 = new Item("Atumn", 6.99, 1, "Autumn", description, "Red", "img/winter.jpg", "surprise",11,["img/f11.jpg","img/f12.jpg","img/f01.jpg","img/f02.jpg"]);
    var item11 = new Item("Rose", 4.99, 1, "Autumn", description, "Red", "img/autumn.jpg", "surprise",12,["img/f12.jpg","img/f01.jpg","img/f02.jpg","img/f03.jpg"]);

    items.push(item0);
    items.push(item1);
    items.push(item2);
    items.push(item3);
    items.push(item4);
    items.push(item5);
    items.push(item6);
    items.push(item7);
    items.push(item8);
    items.push(item9);
    items.push(item10);
    items.push(item11);

    updateList();

    // Constructor
    function Item(name, price, count, season, description, color, image, event_type, product_id, slide) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.season = season;
        this.event_type = event_type;
        this.description = description;
        this.color = color;
        this.image = image;
        this.product_id = product_id;
        this.slide = slide;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    var obj = {};
    obj.addItemToCart = function(name, price, count) {
        for(var item in cart) {
            console.log(cart[item]);
            if(cart[item].name === name) {
                cart[item].count ++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function(name, count) {
        for(var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };

    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
            if(cart[item].name === name) {
                cart[item].count --;
                if(cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    };

    obj.removeItemFromCartAll = function(name) {
        for(var item in cart) {
            if(cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    };

    obj.clearCart = function() {
        cart = [];
        saveCart();
    };

    obj.totalCount = function() {
        var totalCount = 0;
        for(var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    };

    obj.totalCart = function() {
        var totalCart = 0;
        for(var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    };

    obj.listCart = function() {
        var cartCopy = [];
        for(i in cart) {
            item = cart[i];
            itemCopy = {};
            for(p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    };

    return obj;
})();

$('.search-button').click(function(event) {
    event.preventDefault();
    filter = true;
    updateList();
});

$('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
});


function updateList() {

    // if(typeof $("#inputGroupSelect01").val() != 'undefined'){

        var resultsPerPage = $("#inputGroupSelect01").val();
        var sortByPrice = $("#inputGroupSelect02").val();
        var term = $('.search-input').val();

        spring = localStorage.getItem('spring');
        summer = localStorage.getItem('summer');
        autumn = localStorage.getItem('autumn');
        winter = localStorage.getItem('winter');

        list = [];
        li = [];

        if(sortByPrice !== "high"){
            items.sort(function(a, b){
                return a.price-b.price
            });
        } else {
            items.sort(function(a, b){
                return b.price-a.price
            });
        }

        for (i = 0; i < items.length; i++) {
            var el = items[i];
            list.push(el);
        }


        if( spring ){
            li = list.filter(function (item) {
                return item.season.includes("Spring");
            });
        }

        if( summer ){
            li = list.filter(function (item) {
                return item.season.includes("Summer");
            });
        }

        if( autumn ){
            li = list.filter(function (item) {
                return item.season.includes("Autumn");
            });
        }

        if( winter ){
            li = list.filter(function (item) {
                return item.season.includes("Winter");
            });
        }

        if( wedding ){
            li = list.filter(function (item) {
                return item.event_type.includes("wedding");
            });
        }

        if( everyday ){
            li = list.filter(function (item) {
                return item.event_type.includes("everyday");
            });
        }

        if( surprise ){
            li = list.filter(function (item) {
                return item.event_type.includes("surprise");
            });
        }

        if( term !== ""){
            li = list.filter(function (item) {
                return item.name.includes(term);
            });
        }



    $(".spring-count").html("("+ list.filter(function (item) {
            return item.season.includes("Spring");
        }).length +")");

        $(".summer-count").html("("+ list.filter(function (item) {
            return item.season.includes("Summer");
        }).length +")");

        $(".autumn-count").html("("+ list.filter(function (item) {
            return item.season.includes("Autumn");
        }).length +")");

        $(".winter-count").html("("+ list.filter(function (item) {
            return item.season.includes("Winter");
        }).length +")");


        $(".wedding-count").html("("+ list.filter(function (item) {
            return item.event_type.includes("wedding");
        }).length +")");

        $(".everyday-count").html("("+ list.filter(function (item) {
            return item.event_type.includes("everyday");
        }).length +")");

        $(".surprise-count").html("("+ list.filter(function (item) {
            return item.event_type.includes("surprise");
        }).length +")");


        if(li.length === 0){
            li = list;
        }

        list = [];

        if(resultsPerPage && sortByPrice){
            for (i = 0; i < li.length; i++) {

                var p = (page)*resultsPerPage;

                var item = li[p+i];

                if(list.length < resultsPerPage ){
                    if(item){
                        list.push(item);
                    }
                }
            }
        }

        $(".count-total").html(items.length);
        $(".count-filtered").html(list.length);

        if(filter){
            $(".btn-clear").removeClass("d-none");
        } else {
            $(".btn-clear").addClass("d-none");
        }

        if(localStorage.getItem('spring') === "true" || localStorage.getItem('summer') === "true" || localStorage.getItem('autumn') === "true" || localStorage.getItem('winter') === "true"){
            $(".btn-clear").removeClass("d-none");
        }

        var index = "";
        if(typeof $(".res").val() != 'undefined'){
            list = items.slice(0, 7);
            for(var i in list) {

                index +=   "<div class='card h-300 m-3 float-left'>"
                                +"<a href='#' class='product' data-product='"+list[i].product_id+"'>"
                                    +"<img class='card-img-top' src='"+list[i].image+"'>"
                                    +"<div class='card-footer'>"
                                        +"<h4 class='card-title theme-success'>"
                                            +"<a href='#' data-name='"+list[i].name+"' data-price='"+list[i].price+"' class='site-color'>"+ list[i].name +"</a>"
                                        +"</h4>"
                                        +"<h5>$"+list[i].price+"</h5>"
                                    +"</div>"
                                +"</a>"
                            +"</div>"
            }
        }
        $('.list-index').html(index);

        var output = "";
        for(var i in list) {

            output += "<div class='col-sm-6 col-lg-4 pb-5'>"
                        +"<div class='card h-300 season-hover'>"
                            +"<a href='#' class='product' data-product='"+list[i].product_id+"'>"
                                +"<img class='card-img-top' src='"+list[i].image+"' alt=''>"
                            +"</a>"
                            +"<div class='card-footer'>"
                                +"<div class='bottom-hover'>"
                                    +"<div class='text-center'>"
                                        +"<div class='apply_btn'>"
                                            +"<button class='buy-button add-to-cart' data-name='"+list[i].name+"' data-price='"+list[i].price+"'><i class='fas fa-shopping-cart pr-2'></i>Add to cart</button>"
                                        +"</div>"
                                    +"</div>"
                                +"</div>"
                                +"<h4 class='card-title theme-success'>"
                                    +"<a href='#' '>"+ list[i].name +"</a>"
                                +"</h4>"
                                +"<h5>$"+list[i].price+"</h5>"
                            +"</div>"
                        +"</div>"
                    +"</div>";
        }

        $('.list-items').html(output);

        $('.add-to-cart').click(function(event) {
            event.preventDefault();
            var name = $(this).data('name');
            var price = Number($(this).data('price'));
            shoppingCart.addItemToCart(name, price, 1);
            displayCart();
        });

        if(paged){
            var pagin = "";
            for (i = 0; i <= (list.length/resultsPerPage); i++) {

                var active = "";
                if(i === 0){
                    active = "active";
                }

                pagin += "<li class='page-item " + active + "'>"
                    +"<a class='page-link' data-page='"+ i +"'>"+(i+1)+"</a>"
                    +"</li>";
            }

            $('.pagination').html(pagin);
            paged = false
        }

        if(li.length <= resultsPerPage){
            $(".pagination").addClass("d-none");
        } else {
            $(".pagination").removeClass("d-none");
        }

        $(".product").click(function () {
            var product_id = $(this).attr("data-product");

            var product = items.filter(function (item) {
                if(parseInt(product_id) === item.product_id){
                    return item
                }
            })[0];

            localStorage.setItem('product', JSON.stringify(product));
            location.href = "product.html";
        });

        if(typeof $(".comments-area").val() != 'undefined'){
            var p = localStorage.getItem('product');
            var product = JSON.parse(p)
            $(".product-season").html(product.season);
            $(".product-color").html(product.color);
            $(".product-name").html(product.name);
            $(".product-description").html(product.description);
            $(".product-event_type").html(product.event_type);
            $(".product-price").html("$"+product.price);

            var img = product.slide;
            var images = "";
            for(var i in img) {

                var active = "";
                if(parseInt(i) === 0){
                    active = "active";
                }

                images += "<div class='carousel-item "+ active +"'>"
                            +"<img class='d-block img-fluid' src='./"+ img[i] +"' >"
                        +"</div>";
            }

            $(".add-to-cart").attr("data-price",product.price);
            $(".add-to-cart").attr("data-name",product.name);

            $('.product-page').html(images);

        }
    // }
}

$(".page-link").click(function () {
    $(".active").removeClass("active");
    page = $(this).attr("data-page");
    updateList();
    $(this).parent().addClass("active");

});

if(typeof $("#inputGroupSelect01").val() != 'undefined'){
    document.getElementById('inputGroupSelect01').onchange = function() {
        updateList();
    };
}

if(typeof $("#inputGroupSelect02").val() != 'undefined'){
    document.getElementById('inputGroupSelect02').onchange = function() {
        updateList();
    };
}

$('.btn-clear').click(function(event) {
    event.preventDefault();

    $('.search-input').val("");
    localStorage.removeItem('summer');
    localStorage.removeItem('spring');
    localStorage.removeItem('autumn');
    localStorage.removeItem('winter');

    spring = false;
    summer = false;
    autumn = false;
    winter = false;
    wedding = false;
    everyday = false;
    surprise = false;
    filter = false;
    updateList();
});

$('.spring-link').click(function(event) {
    event.preventDefault();
    localStorage.setItem('spring',true);
    filter = true;
    spring = true;
    summer = false;
    autumn = false;
    winter = false;

    if(typeof $("#inputGroupSelect01").val() === 'undefined'){
        location.href = "listing.html";
    }

    updateList();
});

$('.summer-link').click(function(event) {
    event.preventDefault();
    localStorage.setItem('summer',true);
    filter = true;
    spring = false;
    summer = true;
    autumn = false;
    winter = false;

    if(typeof $("#inputGroupSelect01").val() === 'undefined'){
        location.href = "listing.html";
    }

    updateList();
});

$('.autumn-link').click(function(event) {
    event.preventDefault();
    localStorage.setItem('autumn',true);
    filter = true;
    spring = false;
    summer = false;
    autumn = true;
    winter = false;

    if(typeof $("#inputGroupSelect01").val() === 'undefined'){
        location.href = "listing.html";
    }

    updateList();
});

$('.winter-link').click(function(event) {
    event.preventDefault();
    localStorage.setItem('winter',true);
    filter = true;
    spring = false;
    summer = false;
    autumn = false;
    winter = true;

    if(typeof $("#inputGroupSelect01").val() === 'undefined'){
        location.href = "listing.html";
    }

    updateList();
});

$('.wedding-link').click(function(event) {
    localStorage.setItem('wedding',true);
    event.preventDefault();
    filter = true;
    wedding = true;
    everyday = false;
    surprise = false;
    updateList();
});

$('.everyday-link').click(function(event) {
    event.preventDefault();
    filter = true;
    wedding = false;
    everyday = true;
    surprise = false;
    updateList();
});

$('.surprise-link').click(function(event) {
    event.preventDefault();
    filter = true;
    wedding = false;
    everyday = false;
    surprise = true;
    updateList();
});

function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for(var i in cartArray) {
        output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>($" + cartArray[i].price + ")</td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
            + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
            + " = "
            + "<td>$" + cartArray[i].total + "</td>"
            +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}

$(".check-login").click(function(){
    var password = $("#inputPassword").val();
    var email = $("#inputEmail").val();
    var s = "";


    if (!email.includes("@")) {
        s = "Email is not valid!";
    }

    if(s.length === 0){
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (!format.test(password)) {
            s = "Password doesn't have a special character!";
        }

        if (password.length < 8) {
            s = "Password to short!";
        }


        if(s.length !== 0){
            $(".alert-danger").html(s);
            $(".alert-danger").removeClass("d-none");
        } else {
            location.href = "index.html";
        }
    } else {
        $(".alert-danger").html(s);
        $(".alert-danger").removeClass("d-none");
    }
});

$('.order-now').on("click", function(event) {
    $(".thank-message").removeClass("d-none");

    setTimeout(function(){
        $(".thank-message").addClass("d-none");
        shoppingCart.clearCart();
        displayCart();
    }, 1500);
});

$(".list-button").on("click", function(event) {
    localStorage.removeItem('summer');
    localStorage.removeItem('spring');
    localStorage.removeItem('autumn');
    localStorage.removeItem('winter');
    location.href = "listing.html";
});

$('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
});

$('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCart(name);
    displayCart();
});

$('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name');
    shoppingCart.addItemToCart(name);
    displayCart();
});

$('.show-cart').on("change", ".item-count", function(event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});

displayCart();
