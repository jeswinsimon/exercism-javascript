class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    return !(this.year % 4) && (!(this.year % 400) || Boolean(this.year % 100));
  }

}

export default Year;
