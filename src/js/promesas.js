const heroes = {
    capi :{
        nombre: 'Capitan América',
        poder: 'Aguantar inyecciones sin morir',
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero',
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alergica a la picadura de araña',
    },
}

export const buscarHeroe = (heroeId) =>{
    const heroe = heroes[heroeId]
    
    return new Promise((resolve) =>{
        if(heroe) {
            resolve(heroe)
        }else {
            throw`No existe heroe con el id ${heroeId}`
        }
        
    })
}
export  const bsucarHeroeAsincrona = async (heroeId) =>{
    const heroe = heroes[heroeId]

    if (heroe){
        return heroe
    }else {

        throw `No existe un héroe con el id ${heroeId}`
    }
}

const promesaLenta = new Promise((resolve) =>{
    setTimeout(() => resolve('promesa lenta'), 2000)
})

const promesaMedia = new Promise((resolve) =>{
    setTimeout(() => resolve('promesa media'), 1500)
})

const promesaRapida = new Promise((resolve) =>{
    setTimeout(() => resolve('promesa rápida'), 1000)
})

export { promesaLenta, promesaMedia, promesaRapida}