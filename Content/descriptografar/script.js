document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('.scroll-selector input[type="checkbox"]');

    checkboxes.forEach('change', (event) => {
        const metodo = event.target.value;
        if(event.target.checked)    {
            alert(`Método: ${metodo}`)
        }else {
                
        }


    });
});
