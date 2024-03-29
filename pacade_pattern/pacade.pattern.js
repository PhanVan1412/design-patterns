class Discount {
  calc(value) {
    return value * 0.9;
  }
}

class Shipping {
  calc() {
    return 5000;
  }
}

class Fees {
  calc(value) {
    return value * 1.05;
  }
}

class ShoppingFacadePatern {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }

  calc(price) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc();

    return price;
  }
}

function buy(price) {
  const shoppe = new ShoppingFacadePatern();
  console.log(`Price: `, shoppe.calc(price));
}

buy(100000);
