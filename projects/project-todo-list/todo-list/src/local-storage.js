class LS {
  static getInto(key, data) {
    if (typeof data !== 'string') {
      const dataString = this.stringify(data);
  
      return localStorage.setItem(key, dataString);
    }
    else {
      return localStorage.setItem(key, data);
    }
  }

  static getFrom(data) {
    return localStorage.getItem(data);
  }

  static stringify(data) {
    return JSON.stringify(data);
  }

  static parse(data) {
    return JSON.parse(data);
  }

  static hasProperty(key) {
    return localStorage.hasOwnProperty(key);
  }

  static getParse(data) {
    const getData = this.getFrom(data);

    return this.parse(getData);
  }

  static delProperty(name) {
    return localStorage.removeItem(name);
  }

  static notNull(key) {
    const getValue = this.getParse(key);
    console.log(getValue.length);
    return getValue.length !== 0 ? true : false;
  }

  static changePropertyName(dataName, newName) {
    const getProperty = this.getParse(dataName);
    this.getInto(newName, getProperty);
    this.delProperty(dataName);
  }

}

export { LS };