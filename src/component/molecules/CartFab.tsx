import React from 'react';
import './CartFab.scss';

type CartFabProps = {
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void
    count?: number
}

function CartFab(props: CartFabProps) {
    return (
        <div className="cart-fab__wrapper">
            <button className="cart-fab__wrapper__cart-fab">🛒</button>
            <div className="cart-fab__wrapper__cart-fab-badge">{props.count}</div>
        </div>
    );
}

export default CartFab;