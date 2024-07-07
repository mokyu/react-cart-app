import React from 'react';
import './CartListItem.scss';
import {CartItem} from "../../App";
import Input from "../atoms/Input";
import useCurrencyFormatter from "../../Hooks/useCurrencyFormatter";
import Button from "../atoms/Button";

type CartListItemProps = {
    item: CartItem,
    mutationHandler: (id: number, item: CartItem | null) => void,
}

function CartListItem(props: CartListItemProps) {
    const currencyFormatter = useCurrencyFormatter();

    function onAmountChange(event: React.FormEvent<HTMLInputElement>): void {
        const count = Number((event.target as HTMLInputElement).value) || 0;

        props.mutationHandler(props.item.id, count ? {...props.item, count} : null);
    }

    return (
        <tr className="cart-list-item">
            <td className="cart-list-item__title">
                {props.item.item.title}
            </td>
            <td className="cart-list-item__count">
                <Input value={props.item.count} onChange={onAmountChange} type="number"/>
            </td>
            <td className="cart-list-item__total">
                {currencyFormatter(props.item.count * props.item.item.price)}
            </td>
            <td className="cart-list-item__remove">
                <Button onClick={() => props.mutationHandler(props.item.id, null)}>❌</Button>
            </td>
        </tr>
    );
}

export default CartListItem;