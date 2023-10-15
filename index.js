function myEach(element, cb) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        cb(element[i], i, element);
      }
    } else if (typeof element === 'object' && element !== null) {
      for (let key in element) {
        if (element.hasOwnProperty(key)) {
          cb(element[key], key, element);
        }
      }
    }
  
    return element;
  }
  
  function myMap(element, cb) {
    if (Array.isArray(element)) {
      const newArray = [];
      for (let i = 0; i < element.length; i++) {
        newArray.push(cb(element[i], i, element));
      }
      return newArray;
    } else if (typeof element === 'object') {
      const newArray = [];
      for (const key in element) {
        if (element.hasOwnProperty(key)) {
          newArray.push(cb(element[key], key, element));
        }
      }
      return newArray;
    } else {
      throw new Error('Invalid element type. Must be an object or an array.');
    }
  
  }
  
  
  function myReduce(element, cb, acc) {
    let startIdx = 0;
  
    if (acc === undefined) {
      if (Array.isArray(element)) {
        if (element.length === 0) {
          throw new Error('Cannot reduce an empty array without a start value.');
        }
        acc = element[0];
        startIdx = 1;
      } else if (typeof element === 'object' && element !== null) {
        const keys = Object.keys(element);
        if (keys.length === 0) {
          throw new Error('Cannot reduce an empty object without a start value.');
        }
        const firstKey = keys[0];
        acc = element[firstKey];
        startIdx = 1;
      } else {
        throw new TypeError('Invalid element type. Expected an array or an object.');
      }
    }
  
    if (Array.isArray(element)) {
      for (let i = startIdx; i < element.length; i++) {
        acc = cb(acc, element[i], element);
      }
    } else if (typeof element === 'object' && element !== null) {
      const keys = Object.keys(element);
      for (let i = startIdx; i < keys.length; i++) {
        const key = keys[i];
        acc = cb(acc, element[key], element);
      }
    } else {
      throw new TypeError('Invalid element type. Expected an array or an object.');
    }
  
    return acc;
  }
  

  
  function myFilter(element, predicate) {
      if (Array.isArray(element)) {
        return element.filter(predicate)
    } else if (typeof element === 'object') {
      return Object.values(element).filter(predicate)
    } else {
      return element[''];
    }
  }
  

  function myFirst(array, n) {
    if (n === undefined) {
      return array[0]
    } else {
      return array.slice(0, n)
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1]
    } else {
      return array.slice(-n)
    }
  }
  

  function myKeys(object) { 
    return Object.keys(object)
  }
  
  function myValues(object){
    return Object.values(object)
  }

  function myFind(element, predicate) {
    if (Array.isArray(element)) {

      for (let i = 0; i < element.length; i++) {
        if (predicate(element[i])) {
          return element[i];
        }
      }
    } else if (typeof element === 'object' && element !== null) {
      for (const key in element) {
        if (element.hasOwnProperty(key) && predicate(element[key])) {
          return element[key];
        }
      }
    }
  
    return undefined; // No matching value found
  }
  function mySize(element) {
    if (Array.isArray(element)) {
      return element.length
    } else if (typeof element === 'object') {
      return Object.keys(element).length
    };
  };
  