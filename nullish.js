// this returns the  first defined value........
// let result = (a !== null && a !== undefined) ? a: b;

// let user;
//  console.log(user ?? "Anonymous"); 


let height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50);

console.log(area);