const findHappyNumber = (num) => {
  num = String(num).split("");

  let happyNumbers = num.reduce((previousValue, currentValue) => {
    const happyCount = num.filter((val) => val == currentValue).length;

    let newObj = { ...previousValue };
    if (currentValue == happyCount) newObj[currentValue] = happyCount;
    return newObj;
  }, {});

  happyNumbers = Object.values(happyNumbers);
  return `Happy number is ${happyNumbers[happyNumbers.length - 1]}`;
};

console.log(findHappyNumber(8182828828284698333n));
