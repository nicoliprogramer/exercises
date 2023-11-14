// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

function countSheeps(sheep: boolean[]): number {
    // get only the sheep present(filter), and determine the number of sheep present(length)
      return sheep.filter(s => s === true).length;
    }
    // number of sheep
    const arraySheep: boolean[] = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false,
      true,  false, false, true , true,  true,  true,  true , false, false, true,  true];
    
    const result: number = countSheeps(arraySheep);
    console.log(result); 

