const mainButtonClass = document.querySelector('.main-button');
const myHeader = document.querySelector('header');


    function ClassReplase() {
    oldButtonClass = (mainButtonClass).classList[1];
    if(oldButtonClass == 'main-button-black')
        {
            mainButtonClass.classList.replace('main-button-black', 'main-button-white');
            console.log(oldButtonClass);
        }
    else
        {
            mainButtonClass.classList.replace('main-button-white', 'main-button-black');
            console.log(oldButtonClass); 
        }
        oldButtonClass = (mainButtonClass).classList[1];
    }
    mainButtonClass.addEventListener('click', ClassReplase);