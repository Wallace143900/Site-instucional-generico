function hadleModalUser(){
    const userCard = document.querySelector(".button__header");
    const modalContraller = document.querySelector("dialog");
    
    userCard.addEventListener("click", function(){
        modalContraller.showModal()
        
    })
}

function hadleModalUser2(){
    const userCard2 = document.querySelector(".button__section--third");
    const modalContraller = document.querySelector("dialog");
    userCard2.addEventListener("click", function(){
        modalContraller.showModal()
    })
}

function closeModalUser(){
    const userButtonClose = document.querySelector(".close");
    const modalContraller = document.querySelector("dialog");

    userButtonClose.addEventListener("click", function(){
        modalContraller.close()
    })
}
hadleModalUser();
hadleModalUser2();
closeModalUser();