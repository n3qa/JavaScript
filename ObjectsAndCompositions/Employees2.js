function employes (arr){
    let employees = [];

    arr.forEach(element => {
        let person = {
            name: element,
            number: element.length
        }
        employees.push(person);
    });


   employees.forEach( obj => {
    console.log('Name: ${obj.name} -- Personal number: ${obj.number}');

   })

    console.log(employees);

    console.log('The end')
}



employes(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
        
)