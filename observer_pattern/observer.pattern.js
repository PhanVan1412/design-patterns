class Observer {
  constructor(name) {
    this.namePick = name;
  }

  goToHelp(location) {
    console.log(`${this.namePick}: [Ping....${JSON.stringify(location)}.]`);
  }

  updateStatus(location) {
    this.goToHelp(location);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  notify(location) {
    this.observerList.forEach((observer) => observer.updateStatus(location));
  }
}

const subject = new Subject();

//picker
const riki = new Observer("Riki");
const sniper = new Observer("Sniper");

subject.addObserver(riki);
subject.addObserver(sniper);

subject.notify({ long: 1223331, lat: 1123 });
