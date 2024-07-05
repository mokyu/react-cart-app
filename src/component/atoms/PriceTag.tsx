import React from 'react';
import './PriceTag.scss';
import useCurrencyFormatter from "../../Hooks/useCurrencyFormatter";

type PriceTagProps = {
    value: number
}

function PriceTag(props: PriceTagProps) {
    const currencyFormatter = useCurrencyFormatter();

    return (
        <div className="pricetag__container">
            <h2>{currencyFormatter(props.value)}</h2>
        </div>
    );
}

export default PriceTag;