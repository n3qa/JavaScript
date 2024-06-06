function getEngine(power){
    const engines = [
        {power: 90, volume: 1800 },
        {power: 120, volume: 2400},
        {power: 200, volume: 3500 }
    ].sort(a,b => a.power - b.power)
    
   let result; 
   for (let i = 0; i < engines.length; i++) {
        if(engines[i].power >= power){
            result = engines[i];
            break;
        }  
   }
   return result;
}

function getCarriage(carriage, color) {
    return{
        carriage: carriage,
        color
    }
}

function getWheels(wheelsize){
    let wheel = Math.floor(wheelsize) % 2 ===0 
    ? Math.floor(wheelsize)-1
    : Math.floor(wheelsize); 

    return [wheel,wheel,wheel,wheel ]
}


return{
    model: InputDeviceInfo.model,
    engine: getEngine(input.power)
}
console.log(
    carFactory(
        { model: <model name>,
            power: <minimum power>,
            color: <color>,
            carriage: <carriage type>,
            wheelsize: <size> }
          
    )
)