function attachGradientEvents() {
     document.getElementById('gradient').addEventListener('mouseover', onMove);
     let output = document.getElementById('result');

     function onMove(event){
        const offsetX = event.pageX - event.target.offsetLeft;
        const persent = Math.round(offsetX/event.target.clientWidth * 100);

        output.textContent = `${persent} %`

     }


}