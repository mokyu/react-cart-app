import React from 'react';
import './Item.scss';
import Rating from "../atoms/Rating";
import PriceTag from "../atoms/PriceTag";
import AddToCartComboButton from "../molecules/AddToCartComboButton";

export type ListItem = {
    id: number
    title: string,
    description: string,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number
    },
}

export interface ItemProps {
    item: ListItem,
    onCartAdd: (item: ListItem, count: number) => void
}

interface ItemState {
    item: ListItem
    count: number
}


class Item extends React.Component<ItemProps, ItemState> {
    constructor(props: ItemProps) {
        super(props);
        this.state = {
            item: props.item,
            count: 1
        }
        this.onAmountChange = this.onAmountChange.bind(this);
    }

    private onAmountChange(event: React.FormEvent<HTMLInputElement>) {
        const num = Number((event.target as HTMLInputElement).value) || 0;
        this.setState({count: Math.max(1, num)})
    }

    render() {
        return (
            <div className="item">
                <div className="item__inner-wrapper">
                    <div className="item__inner-wrapper__image" style={{backgroundImage: `url(${this.state.item.image})`}}></div>
                    <div className="item__inner-wrapper__text-container">
                        <h2 className="item__inner-wrapper__text-container__title">{this.state.item.title}</h2>
                        <div className="item__inner-wrapper__text-container__price">
                            <PriceTag value={this.state.item.price}/>
                        </div>
                        <p className="item__inner-wrapper__text-container__description">{this.state.item.description}</p>
                        <div className="item__inner-wrapper__text-container__rating">
                            <Rating rating={this.state.item.rating.rate}/>
                        </div>
                        <div className="item__inner-wrapper__text-container__checkout">
                            <AddToCartComboButton
                                count={this.state.count}
                                onAmountChange={this.onAmountChange}
                                onCartAdd={() => this.props.onCartAdd(this.state.item, this.state.count)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;
