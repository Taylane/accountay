const transactionsTypes = [
    {
        "id": 1,
        "name": "outcome",
        "ptBr": "Saida"
    },
    {
        "id": 2,
        "name": "income",
        "ptBr": "Entrada"
    }
]
const recurrencesTypes = [
    {
        "id": 1,
        "name": "montly",
        "ptBr": "Mensal"
    },
    {
        "id": 2,
        "name": "unique",
        "ptBr": "Único"
    },
    {
        "id": 3,
        "name": "partial",
        "ptBr": "Parcela"
    }
]


export function getRecurrencyName(id) {
    console.log('chamou');

    return recurrencesTypes.filter((recurrency) => recurrency.id === id)[0].ptBr
}

export function getTypeLabel(id) {
    return transactionsTypes.filter((type) => type.id === id)[0].ptBr
}
export function getTypeName(id) {
    return transactionsTypes.filter((type) => type.id === id)[0].name
}