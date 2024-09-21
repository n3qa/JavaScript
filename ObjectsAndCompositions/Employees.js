function employes(input){
   
    let employees = {};

    for (const line of input) {
        employees[line] = line.length;
    }

    Object.entries(employees).forEach(element => 
    console.log(`Name: ${element[0] } -- Personal Number: ${element[1]}`)
   )

   console.log('The end!')

}


employes(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
        
)