export function toMoney(value) {
    return (Math.random()*(Math.random()*1000)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}