
let team_up = document.querySelectorAll('.icon_down');
const all_question = document.querySelectorAll('.all');



 let active = null;

all_question.forEach((all) => 
    all.addEventListener('click', (event) => {
   
    if(active){
      
        active.nextElementSibling.classList.toggle('active');
        active.classList.remove('bold');

        team_up.forEach((icon) => {
            if(icon.closest('.all') !== active) {
                icon.classList.remove('icon_up');
            }
        });
        
    }
    
    all.nextElementSibling.classList.toggle('active');
    event.target.classList.add('bold');

    team_up.forEach((icon) => {
        if(icon.closest('.all') === all) {
            icon.classList.toggle('icon_up');
        } else {
            icon.classList.remove('icon_up');
        }
    });

    

    active = all;
    })
);



