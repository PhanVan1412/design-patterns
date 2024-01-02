function preOrderPrice(price) {
  return price * 0.9;
}

function promotionPrice(price) {
  return price * 0.8;
}

function blackFridayPrice(price) {
  return price * 0.5;
}

function defaultPrice(price) {
  return price;
}

const getPriceStrategies = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  blackFriday: blackFridayPrice,
  default: defaultPrice,
};

function getPrice(originPrice, typePromotion) {
  return getPriceStrategies[typePromotion](originPrice);
}

console.log(getPrice(200000, "preOrder"));
console.log(getPrice(200000, "promotion"));
