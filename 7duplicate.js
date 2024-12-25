let items = [{item1: "a"}, {item1: "a"}, {item2: "b"}];

let uniqueItems = items.filter((item, index, arr) => {
    // Stringify each object and check if it's the first occurrence
    return arr.findIndex(i => JSON.stringify(i) === JSON.stringify(item)) === index;
  });
  
  console.log(uniqueItems);
  