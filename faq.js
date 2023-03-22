
let team_up = document.querySelectorAll('.icon_down');
const all_question = document.querySelectorAll('.all');

let active = null;

all_question.forEach((all) => 
    all.addEventListener('click', (event) => {
   
        if (active) {
            if (active === all) {
                // Clicked element is the same as the active element.
                active.nextElementSibling.classList.remove('active');
                active.classList.remove('bold');
                team_up.forEach((icon) => {
                    if (icon.closest('.all') === active) {
                        icon.classList.remove('icon_up');
                    }
                });
                active = null;
                return;
            }
            // Clicked element is different from the active element.
            active.nextElementSibling.classList.remove('active');
            active.classList.remove('bold');
        }
    
        all.nextElementSibling.classList.add('active');
        event.target.classList.add('bold');

        team_up.forEach((icon) => {
            if (icon.closest('.all') === all) {
                icon.classList.add('icon_up');
            } else {
                icon.classList.remove('icon_up');
            }
        });

        active = all;
    })
);


