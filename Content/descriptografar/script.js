document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('.seletor input[type="checkbox"]');

    checkboxes.forEach('change', (event) => {
        const metodo = event.target.value;
        if(event.target.checked)    {
            alert(`Método: ${metodo}`)
        }else {
                
        }


    });
});
