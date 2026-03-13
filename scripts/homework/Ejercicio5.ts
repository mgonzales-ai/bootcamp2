//Create an object named product with the following properties: id, name, price, and tags
//  (an array of strings).
//Clone the object into a new variable named newProduct.
//Clone the tags property into a new property of the cloned object called archivedTags.
//Change the name, price, and tags properties of the cloned object.
//Print both the product variable, and the newProduct variable


const product={
  id:100,
  name1:'lavadora',
  price:1000,
  tags:['a1','a2','a3']
}
let newProduct={...product};
console.log(newProduct);
//clone the tags property into a new property of the cloned object called archivedTags
let archivedTags=[...product.tags];

// Modify the cloned object : 
newProduct.id=101;
newProduct.name1='lavaseca';
newProduct.price=1800;


console.log(newProduct);