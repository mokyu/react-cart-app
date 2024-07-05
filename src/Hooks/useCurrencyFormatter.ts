import currency from 'currency.js';

const useCurrencyFormatter = () => {
    return (v: number) => currency(v, { symbol: '€', decimal: ',', separator: '.' }).format();
}

export default useCurrencyFormatter;