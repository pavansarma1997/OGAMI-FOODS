

function hai() {
    document.getElementById('two').style.display = "block";
    document.getElementById('three').style.display = "none";
}
function hai1() {
    document.getElementById('one').style.display = "block";
    document.getElementById('two').style.display = "none";
}
function hai2() {
    document.getElementById('five').style.display = "block";
    document.getElementById('one').style.display = "none";
}
function hai3() {
    document.getElementById('four').style.display = "block";
    document.getElementById('five').style.display = "none";
}
function hai4() {
    document.getElementById('three').style.display = "block";
    document.getElementById('four').style.display = "none";
}


function hell() {
    document.getElementById('two').style.display = "block";
    document.getElementById('one').style.display = "none";
}
function hell1() {
    document.getElementById('three').style.display = "block";
    document.getElementById('two').style.display = "none";
}
function hell2() {
    document.getElementById('four').style.display = "block";
    document.getElementById('three').style.display = "none";
}
function hell3() {
    document.getElementById('five').style.display = "block";
    document.getElementById('four').style.display = "none";
}
function hell4() {
    document.getElementById('one').style.display = "block";
    document.getElementById('five').style.display = "none";
}





// var b=document.getElementById('btn');
// // var funct=()=>{
// //     fetch(`https://demoapus2.com/ogami/wp-admin/admin-ajax.php?`)
// //     .then((res)=>res.json())
// //     .then((data)=>{
// //         console.log(data);
// //     })
// // }

// b.addEventListener("click", () => 
// {
//     var url = `https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish`
//         fetch(url).then(result => result.json())
//             .then(data => 
//            {
//                 console.log(data);
//                 // var xe = data.x.type.promotional_sliders[0].original;
//                 // document.getElementById('imggs1').src=;
//                 // document.getElementById('imggs2').src=;
//                 // var { } = data.;
//                 // document.getElementById('imggs3').src=;
//                 // var { } = data.;
//                 // document.getElementById('imggs4').src=;
//             })
// })
//hello


var url = `https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish`
fetch(url).then(result => result.json())
    .then(data => {
        // console.log(data);
        data.data.map((p) => {
            var nn = eval(p.price - 10 / 100); //10% DISCOUNT
            var xe =
                `<div class="aaa">
                    <img src=${p.image.thumbnail} />
                    <div class="bbb" >${p.name}</div>
                    <div class="cccd">₹${nn}<strike>₹${p.price}
                    </strike>
                    </div>
                    <div class="divv22">
                    <button class="bttn1">-</button>
                    <button class="bttn">Add</button>
                    <button class="bttn2">+</button>
                    </div>
                </div>`

            var bbb = document.getElementById('hello')
            bbb.innerHTML += xe
            console.log(p);
        })

    })


//ADD TO CART
    
// const url =
// "https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish";
// const container = document.getElementById("root");

// const cart = {
// products: [],
// totalQty: 0,
// totalPrice: 0,
// };
// const addProduct = (product) => {
// const check = cart.products.filter((e) => e.id === product.id);
// if (check.length) {
//   cart.totalQty += 1;
//   cart.totalPrice += product.price;
//   let temp = cart.products.map((e) => {
//     if (e.id === product.id) {
//       return {
//         ...e,
//         qty: e.qty + 1,
//       };
//     }
//     return e;
//   });
//   cart.products = temp;
// } else {
//   let tempProduct = {
//     ...product,
//     qty: 1,
//   };
//   cart.products.push(tempProduct);
//   cart.totalQty += 1;
//   cart.totalPrice += product.price;
// }
// console.log(cart);
// };
// const removeProduct = (product) => {
// const check = cart.products.filter((e) => e.id === product.id);
// if (check.length) {
//   cart.totalQty -= 1;
//   cart.totalPrice -= product.price;
//   if (check[0].qty > 1) {
//     let temp = cart.products.map((e) => {
//       if (e.id === product.id) {
//         return {
//           ...e,
//           qty: e.qty - 1,
//         };
//       }
//       return e;
//     });
//     cart.products = temp;
//   } else {
//     let tempProduct = cart.products.filter((e) => e.id !== product.id);
//     cart.products = tempProduct;
//   }
// } else {
//   return;
// }
// };

// const render = (data) => {
// data.forEach((e) => {
//   const div = document.createElement("div");
//   const img = document.createElement("img");
//   const add = document.createElement("button");
//   const remove = document.createElement("button");
//   const qty = document.createElement("span");
//   img.setAttribute("src", e.image.thumbnail);
//   add.innerText = "Add";
//   remove.innerText = "Remove";
//   const prod = cart.products.filter((p) => p.id === e.id);
//   qty.innerText = prod.qty;
//   add.addEventListener("click", () => addProduct(e));
//   remove.addEventListener("click", () => removeProduct(e));
//   div.appendChild(img);
//   div.appendChild(add);
//   div.appendChild(qty);
//   div.appendChild(remove);
//   container.appendChild(div);
// });
// };

// fetch(url)
// .then((res) => res.json())
// .then((response) => {
//   const { data } = response;
//   render(data);
// })
// .catch((e) => console.log(e));








