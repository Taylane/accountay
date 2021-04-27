export function toMoney(value) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}