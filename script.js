const list = document.querySelector('ul')
const array = ['Chicho', 'Juan', 'Tito', 'Luis', 'Mingo']

for (const a of array){
    const p = document.createElement('p')
    p.textContent = a
    list.appendChild(p)
}