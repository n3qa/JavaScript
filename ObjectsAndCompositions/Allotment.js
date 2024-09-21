function alloment(comerse, customerRequest){
    let shop = {};

    for (let index = 0; index < comerse.length; index+=2) {
         const element = comerse[index];
            shop[element] = Number(comerse[index+1]);
    } 

    for (let index = 0; index < customerRequest.length; index+=2) {
        const element = customerRequest[index];
        if( !shop.hasOwnProperty(element)){
           shop[element]  = 0;
        }
        shop[element] += Number(customerRequest[index+1]);
      
    }


    Object.keys(shop).forEach( key => {
        console.log(`${key} -> ${shop[key]}`)
    })

    console.log('The end')

}



alloment(
    [
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ]
    ,

    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
        
)