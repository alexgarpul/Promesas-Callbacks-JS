import { bsucarHeroeAsincrona, buscarHeroe} from './promesas'

const heroesIds = ['capi', 'iron', 'spider']
const heroesPromesas = heroesIds.map(buscarHeroe)



export const obtenerHeroesArr = async() => 
Promise.all(heroesIds.map(bsucarHeroeAsincrona))

export const obtenerHeroesAwait = async(id = 'capi') => {
    try{
        return await bsucarHeroeAsincrona(id)
    }catch (error){
        console.error('CATCH!!!')
        return{
            nombre: 'sin nombre',
            poder: 'sin poder',
        }
    }
}

export const heroesCiclo = async () =>{
    console.time('HeroesCiclo')
    // const heroes =  await Promise.all(heroesPromesas)
    // heroes.forEach(console.log)
    for await (const heroe of heroesPromesas) {
        console.log(heroe)
    }

    console.timeEnd('HeroesCiclo')
}

export const heroeIfAwait = async(id)=>{
    if((await bsucarHeroeAsincrona(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos')
    }else{
        console.log('Nah')
    }
}
