// Cách viết hay dùng
function getPrice(price, typePromo) {
  if (typePromo === "preOrder") {
    return price * 0.9;
  }
  if (typePromo === "promotion") {
    return price * 0.8;
  }
  if (typePromo === "default") {
    return price;
  }
}

console.log(getPrice(120000, "promotion"));
