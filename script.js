class Reduce {
  static sum(array) {
    return array.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
  }

  static flat(array) {
    return array.reduce(function (accumulator, currentValue) {
      return accumulator.concat(currentValue);
    }, []);
  }

  static deepFlat(array) {
    return array.reduce(function (accumulator, currentValue) {
      if (Array.isArray((currentValue))) {
        currentValue =  currentValue.some(Array.isArray) ? Reduce.deepFlat(currentValue) : currentValue;
      }
      return accumulator.concat(currentValue);
    }, []);
  }

  static regroup(objectsArray, property) {
    return objectsArray.reduce(function (accumulator, object) {
      let propertyValue = object[property];
      if (!accumulator[propertyValue]) {accumulator[propertyValue] = [];}
      accumulator[propertyValue].push(object);
      return accumulator;
    }, {});
  }

  static count(array, value) {
    return array.reduce(function (accumulator, currentValue) {
      if (currentValue === value) {accumulator ++;}
      return accumulator;
    }, 0);
  }

  static countInArray(array, arrayValues) {
    return array.reduce(function (accumulator, currentValue) {
      if (arrayValues.includes(currentValue)) {
        accumulator[currentValue] ? accumulator[currentValue] ++ : accumulator[currentValue] = 1;
      }
      return accumulator;
    }, {});
  }

  static countAll(array) {
    return array.reduce(function (accumulator, currentValue) {
      accumulator[currentValue] ? accumulator[currentValue] ++ : accumulator[currentValue] = 1;
      return accumulator;
    }, {});
  }

  static reverse(array) {
    return array.reduce(function (accumulator, currentValue) {
      accumulator.unshift(currentValue);
      return accumulator;
    }, []);
  }

  static chunk(array, size) {
    let index = 0;
    return array.reduce(function (accumulator, currentValue) {
      if (!accumulator[index]) { accumulator[index] = []; }
      accumulator[index].push(currentValue);
      if (accumulator[index].length === size) { index ++ }
      return accumulator;
    }, []);
  }

  static invert(object) {
    return Object.entries(object).reduce(function (accumulator, [key, value]) {
      accumulator[value] = key;
      return accumulator;
    }, {})
  }

}
