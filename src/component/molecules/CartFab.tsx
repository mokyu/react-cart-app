import React from 'react';
import './CartFab.scss';

type CartFabProps = {
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void
    count: number,
    flashCartButton: boolean
}

function CartFab(props: CartFabProps) {
    return (
        <div className={`cart-fab__wrapper ${props.flashCartButton ? 'cart-fab__wrapper--attention-grabber' : ''}`}>
            <button
                className="cart-fab__wrapper__cart-fab"
                onClick={props.onClick}
            >🛒</button>
            {props.count > 0 ? <div className="cart-fab__wrapper__cart-fab-badge">{props.count}</div> : null}
        </div>
    );
}

export default CartFab;