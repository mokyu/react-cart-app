import React from 'react';
import './AddToCartComboButton.scss';
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type AddToCartComboButtonProps = {
    count: number
    onAmountChange: React.ChangeEventHandler<HTMLInputElement>
    onCartAdd: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

function AddToCartComboButton(props: AddToCartComboButtonProps) {
    return (
        <div className="add-to-cart-combo-button__wrapper">
            <div className="add-to-cart-combo-button__wrapper__input">
                <Input type="number" value={props.count} onChange={props.onAmountChange}/>
            </div>
            <div className="add-to-cart-combo-button__wrapper__button">
                <Button onClick={props.onCartAdd}>Add to cart</Button>
            </div>
        </div>
    );
}

export default AddToCartComboButton;
