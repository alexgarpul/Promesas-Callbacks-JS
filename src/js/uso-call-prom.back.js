import './styles.css'
import { buscarHeroe } from './js/promesas'


const heroeId1 = 'spider'
const heroeId2 = 'iron'
const heroeId3 = 'capi'


// buscarHeroe(heroeId1).then((heroe) =>{
//     console.log(`Enviando a ${heroe.nombre} a la misión`)
// })
// .catch((error) => console.log(error))
// .finally()

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
.then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`)
})
.catch((err) => {
    console.log(err)
})
.finally(()=>{
    console.log('Se terminó el promise.all')
})
console.warn('Fin Programa')