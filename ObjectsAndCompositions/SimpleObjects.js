function cityJS(name, population, treasury){
    const city = {
        name: name,
        population: population,
        treasury: treasury
    }; 
 
    return city;

}

console.log(
    cityJS(
        'Tortuga',
        7000,
        15000
    )
)