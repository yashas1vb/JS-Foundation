let array = [1,2,3,4,5,6,7,8,9];

// for (let i = 0; i < array.length; i++) {
//     let arrayThree = [];
//     if (array[i] % 3 === 0 && array[i] % 2 !== 0) {
//         arrayThree.push(array[i]);
//     }
//     console.log(arrayThree);
// }

for(let i = 0; i < array.length; i++){
    if(array[i] % 3 === 0) {
        if(array[i] % 2 === 0){
            continue
        }
        console.log(array[i]);
    }
}