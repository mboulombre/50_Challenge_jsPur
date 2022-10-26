const panel = document.querySelectorAll('.panel');

panel.forEach(element => {
    element.addEventListener('click', () => {
            removeClass();
            element.classList.add("active")
    })
});

const removeClass = () => {
    panel.forEach(panel=>{
        panel.classList.remove('active');
    })
}