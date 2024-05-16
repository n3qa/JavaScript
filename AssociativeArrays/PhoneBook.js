function phoneBook(input){
    let phonebook = {};

    for(let line of input){
       let tokens = line.split(' ');
       let name = token[0];
       let phone = token[1]; 

       phonebook[name] = phone;
    }

    for (let name in phonebook) {
        let phoneNumberForPerson = phoneBook[name];
         console.log(`${name} -> ${phoneNumberForPerson}`)
    }
}

phoneBook(
            [
            'Tim 0834212554',
            'Peter 0877547887',
            'Bill 0896543112',
            'Tim 0876566344'
            ]
        )