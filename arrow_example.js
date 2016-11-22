// function addPromise(a,b){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       if(typeof a === 'number' && typeof b === 'number'){
//         resolve(a+b);
//       }
//       else{
//         reject('invalid types!');
//       }
//     }, 1000)
//   })
// }
// var a = 10;
// var b = 2;
//
// addPromise(a,b).then(function(res){
//   console.log('promise success:', res);
// }, function(err){
//   console.log('promise error', err);
// })


var add = (a,b)=>a+b;
console.log(add(1,2));

var add = (a,b)=>{return a+b};
console.log(add(3,4));
var people = ['Andrew','Jerry','Mathew'];
var Person = {
  name: 'Kevin',
  greet: function(){
    people.forEach(function(item){
      console.log(`${this.name} says hello to ${item}`);
    })
  },
  greet1: function(){
    people.forEach((item)=>{
      console.log(`${this.name} says hello to ${item}`);
    })
  }
};
Person.greet();
Person.greet1();
