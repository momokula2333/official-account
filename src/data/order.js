class OrderData {
  constructor() {
    this.name = '';
    this.mobile = null;
    this.location = '';
    this.type = null;
    this.date = null;
    this.price = null;
    this.setName = this.setName.bind(this);
    this.setMobile = this.setMobile.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setType = this.setType.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.init = this.init.bind(this);
  }
  setName(name) {
    this.name = name;
  }
  setMobile(mobile) {
    this.mobile = mobile;
  }
  setLocation(location) {
    this.location = location;
  }
  setDate(date) {
    this.date = date;
  }
  setPrice(price) {
    this.price = price;
  }
  setType(type) {
    this.type = type;
  }
  init() {
    this.name = '';
    this.mobile = null;
    this.location = '';
    this.date = null;
    this.price = null;
    this.type = null;
  }
}

export const Order = new OrderData();