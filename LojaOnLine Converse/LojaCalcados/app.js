const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 0,
    title: "Cano Alto",
    price: 119,
    colors: [
      {
        code: "Black",
        img: "./img/air.png",
      },
      {
        code: "Pink",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 1,
    title: "Cano Baixo",
    price: 149,
    colors: [
      {
        code: "Black",
        img: "./img/jordan.png",
      },
      {
        code: "Red",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Monochome",
    price: 109,
    colors: [
      {
        code: "Black",
        img: "./img/blazer.png",
      },
      {
        code: "White",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Chuck70AT-CX",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "White",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Run Star Hike",
    price: 99,
    colors: [
      {
        code: "Black",
        img: "./img/hippie.png",
      },
      {
        code: "White",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
