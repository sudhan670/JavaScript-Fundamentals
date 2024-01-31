let stocks={
    fruits: ['apple',"strawaberry","kiwi","orange"],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    toppings:['chocolate','peanauts'],
};
let order=(fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`) ;
        call_production();
    },2000)  
}
//callback Hell
let production=()=>{
   setTimeout(()=>{
     console.log("production has started");
     setTimeout(()=>{
        console.log("Production has chopped");
        //Callback hell
        setTimeout(()=>{
            console.log(`${stocks.liquid[0] } and ${stocks.liquid[1]} was added`)
        },200);
        setTimeout(()=>{
           console.log('The machine has been Started');
           setTimeout(()=>{
            console.log(`${stocks.holder[1]} was selected`);
            setTimeout(()=>{
                console.log(`${stocks.toppings[0]}`);
                setTimeout(()=>{
                    console.log("serve Icecream to The customers");
                })
            })
           },0);
        },1001);
    },2000);
   },0);
}
order(2,production);

let order_to_say=true;

let order=(time,work)=>{
   return new Promise((resolve,reject)=>{
        if(order_to_say){
            setTimeout(()=>{
                resolve(work());
            },time);
        }
        else{
            reject("Order is not get saved");
        }
   });
};
order(2000,()=>console.log(`${stocks.fruits}`))
