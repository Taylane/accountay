export function toMoney(value) {
    // return (Math.random()*(Math.random()*1000)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    return value.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });

}