function cityRecords(name,population,treasury){
    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate
        },
        applayGrowth(percent){},
        applyRecession(percent){}
    }

    return city;

}

const result =  cityRecords(
                            'Tortuga',
                            7000,
                            15000
                        )

console.log(                  
    result
)

result.collectTaxes();
console.log(result.treasury);