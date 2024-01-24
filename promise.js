var promise = new Promise((resolve,reject) => {
    // resolve("kashish");
    reject("verma")
});
// promise.then((result) => {
//     console.log(result);
// },(error)=> {
//     console.log(error);
// })

promise.then((result)=>{
    console.log(result);
}).catch((error)=>{console.log(error);})