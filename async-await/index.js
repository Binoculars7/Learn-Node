function delayFn(time){
    return new Promise ((resolve) => setTimeout(resolve, time))
}
async function delayedGreet(name){
    await delayFn(2000);
    console.log(name);
}

delayedGreet("peter");

async function division(num1, num2){
    try{
        if(num1 ===0) throw new Error('can not divide by 0');
        return num1/num2;
    }catch{
        console.error('error', error)
        return null
    }
}


async function mainFn() {
    console.log(await division(10, 2));
    console.log(await division(10, 0));
}

mainFn();