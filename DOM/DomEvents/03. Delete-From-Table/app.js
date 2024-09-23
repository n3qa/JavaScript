function deleteByEmail() {
    //read input field value
    const email = document.querySelector('input[name="email"').value;
    const rows = Array.from(document.querySelector('tbody tr'));

    let deleted = false;
    for (let row of rows){
        if(row.children[1].textContent==email){
            row.parentNode.removeChildren(row);

            document.getElementById('result').textContent = 'Deleted';
        }
    }

    if (deleted!=true){
        document.getElementById('result').textContent  = 'Not found'
    }
}