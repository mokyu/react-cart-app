import React from 'react';
import './CartTotal.scss';
import useCurrencyFormatter from "../../Hooks/useCurrencyFormatter";

type CartTotalProps = {
    total: number,
}

function CartTotal(props: CartTotalProps) {
    const currencyFormatter = useCurrencyFormatter();

    return (
        <tfoot>
            <tr>
                <td className="cart-total" colSpan={3}>{currencyFormatter(props.total)}</td>
                <td/>
            </tr>
        </tfoot>
    );
}

export default CartTotal;