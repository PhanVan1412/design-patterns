class Leader {
  receiveRequest(offer) {
    console.log(`Accepting ${offer}`);
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader();
  }

  receiveRequest(offer) {
    this.leader.receiveRequest(offer);
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer;
  }

  applyFor(target) {
    target.receiveRequest(this.offer);
  }
}

const dev = new Developer("salary upto 5000$");
dev.applyFor(new Secretary());
