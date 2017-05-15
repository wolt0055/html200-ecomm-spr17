//email submit functionality
function capture() {
  event.preventDefault();
  var emailAddress = document.customerEmail.email.value;
  if(emailAddress == ""){
    console.log("Enter a valid Email and resubmit please");
  }
  else{ console.log("Thank you for signing up for our mailing list, " + emailAddress + "!");}
}

//item add to cart
function addToCart(item){
  event.preventDefault();
  // var itemToAdd = document
  // console.log(item);
  for (var i = 0; i<products.length; i++){
    if(products[i].id === item){
      cart.push(products[i]);
    }
  }
  console.log(cart);
  console.log("cart array is of length: "+ cart.length);

}

function removeFromCart(item){
  event.preventDefault();
  for(var i = 0; i<cart.length;i++){
    if(cart[i].id === item){
      cart.pop(cart[i]);
      break;
    }
  }

  console.log(cart);
  console.log("cart array is of length: "+ cart.length);
}

function updateCart(){
  event.preventDefault();
  var scarf = document.item001.name;

  cart.push(scarf);
  console.log(cart);
}
//cart status

function cartStatus() {
  event.preventDefault();
  console.log("Your cart contains " + cart.length + " items");
}
var cart = [];
console.log("cart length" + cart.length);

var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg",
//adding object elements
    id: "item001",
    inCart: false
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg",
    id: "item002",
    inCart: false
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg",
    id: "item003",
    inCart: false
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg",
    id: "item004",
    inCart: false
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg",
    id: "item005",
    inCart: false
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg",
    id: "item006",
    inCart: false
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png",
    id: "item007",
    inCart: false
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg",
    id: "item008",
    inCart: false
  }
]
