import './styles.css'
import {buscarHeroe, promesaLenta, promesaMedia, promesaRapida} from './js/promesas'

// promesaLenta.then((resp) => console.log(resp))
// promesaMedia.then(console.log)
// promesaRapida.then(console.log)


Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log)

buscarHeroe('capi').then(console.log).catch(console.warn)
buscarHeroeAsincrona('capi').then(console.log).catch(console.warn)


console.log('Fin del programa')