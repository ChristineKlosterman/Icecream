const flavors = [
    {
        name: 'Strawberry',
        image: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3464&q=80',
        $: 2
    }, {
        name: 'Cake Batter',
        image: 'https://images.unsplash.com/photo-1588685232180-8bb64cb4837a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        $: 2
    }, {
        name: 'Matcha Icecream on Melon Bread',
        image: 'https://images.unsplash.com/photo-1626685214164-23330202e175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        $: 5
    }]

const cone = [{
    name: 'Flavored Cone',
    image: 'https://images.unsplash.com/photo-1625575080259-662349b6abf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80',
    $: 1
}, {
    name: 'Waffle Cone',
    image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
    $: 1
}]

const toppings = [{
    name: 'Fresh Fruit',
    image: 'https://images.unsplash.com/photo-1584559582128-b8be739912e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
    $: 0.50
}, {
    name: 'Cookie',
    image: 'https://images.unsplash.com/photo-1551844547-043f512dc4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80',
    $: 1.50
}]

let flavorCart = []
let toppingsCart = []
let coneCart = []

function drawFlavor() {
    let template = ''
    flavors.forEach(item => {
        template += `<div class="col-6 ice-cream-flavor px-1 mb-2" onclick="orderFlavor('${item.name}')">
        <div>
          <img class="img-fluid"
            src="${item.image}"
            alt="">
          <p class="bg-light p-2 ice-cream-flavor mb-0">${item.name}</p>
          <p class="bg-light p-2 price">$${item.$}</p>
        </div>
      </div>`
    })
    let flavorElm = document.getElementById('flavors');
    console.log('look at the flavors');
    flavorElm.innerHTML = template
}

function drawCone() {
    let template = ''
    cone.forEach(item => {
        template += `<div class="col-6 ice-cream-cone px-1 mb-2" onclick="orderCone('${item.name}')">
        <div>
          <img class="img-fluid"
            src="${item.image}"
            alt="">
          <p class="bg-light p-2 ice-cream-cone mb-0">${item.name}</p>
          <p class="bg-light p-2 price">$${item.$}</p>
        </div>
      </div>`
    })
    let coneElm = document.getElementById('cone');
    console.log('Look at the cones');
    coneElm.innerHTML = template
}

function drawToppings() {
    let template = ''
    toppings.forEach(item => {
        template += `<div class="col-6 ice-cream-toppings px-1 mb-2" onclick="orderToppings('${item.name}')">
        <div>
          <img class="img-fluid"
            src="${item.image}"
            alt="">
          <p class="bg-light p-2 ice-cream-toppings mb-0">${item.name}</p>
          <p class="bg-light p-2 price">$${item.$}</p>
        </div>
      </div>`
    })
    let toppingsElm = document.getElementById('toppings');
    console.log('look at the toppings');
    toppingsElm.innerHTML = template
}

drawToppings()
drawCone()
drawFlavor()

function drawOrderFlavor() {
    let template = ''
    flavorCart.forEach((flavorOrder, i) => template += `<div class="col-12 order-item"> <p><span>${flavorOrder.name}</span> - <span></span></p></div>`
    )

    let orderFlavorElm = document.getElementById('flavor-orders');
    console.log('gettin orders');
    orderFlavorElm.innerHTML = template
}

drawOrderFlavor()
drawOrderCone()


function drawOrderCone() {
    let template = ''
    coneCart.forEach((coneOrder, i) => template += `<div class="col-12 order-item"> <p><span>${coneOrder.name}</span> - <span></span></p></div>`)

    let orderConeElm = document.getElementById('cone-orders');
    console.log('gettin cone');
    orderConeElm.innerHTML = template
}

function drawOrderToppings() {
    let template = ''
    toppingsCart.forEach((toppingsOrder, i) => template += `<div class="col-12 order-item"> <p><span>${toppingsOrder.name}</span> - <span></span></p></div>`)

    let orderToppingsElm = document.getElementById('topping-orders');
    console.log('gettin toppings');
    orderToppingsElm.innerHTML = template
}


function orderFlavor(flavorName) {
    console.log('ordering', flavorName);
    let foundFlavor = flavors.find(flavor => flavor.name == flavorName)
    console.log(foundFlavor);
    flavorCart.push(foundFlavor);
    console.log('current orders', flavorCart);
    drawOrderFlavor()
}




function orderCone(coneName) {
    console.log('ordering', coneName);
    let foundCone = cone.find(cone => cone.name == coneName);
    console.log(foundCone);
    coneCart.push(foundCone);
    console.log('current orders', coneCart);
    drawOrderCone()
}

function orderToppings(toppingName) {
    console.log('ordering', toppingName);
    let foundToppings = toppings.find(toppings => toppings.name == toppingName);
    console.log(foundToppings);
    toppingsCart.push(foundToppings);
    console.log('current orders', toppingsCart);
    drawOrderToppings()
}

function drawFlavorTotal() {
    let subtotal = 0
    flavorCart.forEach(flavorOrder => subtotal += flavorOrders.$)
    console.log('subtotal', subtotal);
    let flavorTotalElm = document.getElementById('total')
    flavorTotalElm.innertext = subtotal.toFixed(2)
}
