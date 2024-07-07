import React from 'react';
import './Cart.scss';
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import {ListItem} from "./Item";
import {CartItem} from "../../App";
import CartListItem from "../molecules/CartListItem";
import useCurrencyFormatter from "../../Hooks/useCurrencyFormatter";
import CartTotal from "../molecules/CartTotal";

export interface CartProps {
    items: CartItem[],
    mutateCartItem: (id: number, item: CartItem | null) => void
    closeDialog: () => void
}

interface CartState {
    item: ListItem
    count: number
}

class Cart extends React.Component<CartProps, CartState> {


    getTotal(): number
    {
        return this.props.items.reduce((acc, item) => acc + (item.item.price * item.count), 0)
    }

    render() {
        return (
            <div className="cart-container__wrapper" onClick={e => e.stopPropagation()}>
                <div className="cart-container__wrapper__inner">
                    <div className="cart-container__wrapper__inner__title">Cart</div>
                    <table className="cart-container__wrapper__inner__wrapper__contents">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Price</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {!this.props.items.length ? <tr>
                            <td className="cart-container__wrapper__inner__wrapper__contents__placeholder" colSpan={99}>Your cart is empty</td></tr> : null}
                            {this.props.items.map(i => <CartListItem key={i.id} item={i} mutationHandler={this.props.mutateCartItem}/>)}
                        </tbody>
                        {this.props.items.length ? <CartTotal total={this.getTotal()}/>: null}
                    </table>
                    <div className="cart-container__wrapper__inner__close">
                        <Button onClick={this.props.closeDialog}>Close</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
