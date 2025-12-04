const offers = document.getElementById('offers-items');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let index = 0;

function slide(i){
    const total = offers.children.length;
    index = (index + i + total) % total;
    offers.style.transform = `translate(-${index * 100}%)`;
    offers.style.transition = `all 1s`;
}


next.onclick = () => slide(1); 
prev.onclick = () => slide(-1); 
setInterval(() => slide(1), 5000); 

// ----------------------------------------------------------

