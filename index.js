let input = document.querySelector('.i-11');


function t11(event) {
    let key = document.querySelectorAll('.key');
    let arrow = document.querySelectorAll('.arrow');

    key.forEach((key) => {

        if(event.key == key.dataset.symbol || event.code == key.dataset.symbol) {
            key.classList.add('active');

            arrow.forEach((arrow) => {
                if((event.key || event.code) == arrow.getAttribute('alt')) {
                    arrow.style.filter = 'invert(0%)';
                }
            })

        }
    });

}


function t12(event) {
    let key = document.querySelectorAll('.key');
    let arrow = document.querySelectorAll('.arrow');

    key.forEach((key) => {
        if(event.key == key.dataset.symbol || event.code == key.dataset.symbol) {
            key.classList.remove('active');

            arrow.forEach((arrow) => {
                if((event.key || event.code) == arrow.getAttribute('alt')) {
                    arrow.style.filter = 'invert(100%)';
                }
            })

        }
    });

}

document.querySelector('.i-11').onkeydown = t11;
document.querySelector('.i-11').onkeyup = t12;



