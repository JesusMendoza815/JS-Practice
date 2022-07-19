export function showMenu(container, btnShow,linkMenu) {
    document.addEventListener('click', (e)=> {
        if (e.target.matches(btnShow)) {
            container.classList.toggle('is-active');
        }
        
        if (e.target.matches(linkMenu)) {
            container.classList.remove('is-active');
        }
    })
}
// export function showMenu(container) {
//     if (container.style.visibility === 'visible') {
//         container.style.visibility = 'hidden';
//         console.log('hidden');
//     }else{
//         container.style.visibility = 'visible';
//         console.log('visible');
//     }
// }