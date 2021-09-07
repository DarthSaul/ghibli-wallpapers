const get = element => document.getElementById(element);

// NAVBAR
let open = get('menu-btn');
let nav = get('nav');
let exit = get('exit-btn');

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
});
exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
});

// HIDE TAGS LIST
let hide = get('hide-btn');
let show = get('show-btn');
let tags = get('tags');

hide.addEventListener('click', () => {
    tags.classList.add('no-display');
    hide.classList.add('no-display');
    show.classList.remove('no-display');
});

show.addEventListener('click', () => {
    tags.classList.remove('no-display');
    hide.classList.remove('no-display');
    show.classList.add('no-display');
});
