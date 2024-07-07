import React, {} from 'react';
import './App.scss';
import Sheet from "./component/atoms/Sheet";
import PageLayout from "./component/templates/PageLayout";
import ItemLayout from "./component/templates/ItemLayout";
import Item, {ListItem} from "./component/organisms/Item";
import Overlay from "./component/atoms/Overlay";
import CartFab from "./component/molecules/CartFab";
import Cart from "./component/organisms/Cart";

export type CartItem = {
    item: ListItem
    count: number,
    id: number,
}

interface AppState {
    overlayOpen: boolean,
    cartItems: CartItem[],
    items: ListItem[],
    loading: boolean,
    error: Error | unknown,
    flashCartButton: boolean
}


class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            overlayOpen: false,
            cartItems: [],
            items: [],
            loading: true,
            error: null,
            flashCartButton: false
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                throw new Error("Network request failed");
            }
            this.setState({items: await response.json() as ListItem[]});
        } catch (error) {
            this.setState({ error, loading: false });
        } finally {
            this.setState({loading: false});
        }
    }

    setOverlayOpen = (open: boolean) => {
        this.setState({ overlayOpen: open });
    }

    PopulatedSheet = () => {
        return (
            <Sheet>
                <ItemLayout>
                    {this.state.items.map((i) => (
                        <Item
                            onCartAdd={this.addToCart}
                            key={i.id}
                            item={i}
                        />
                    ))}
                </ItemLayout>
            </Sheet>
        );
    }

    CartFAB = () => {
        return <CartFab
            count={this.state.cartItems.length}
            flashCartButton={this.state.flashCartButton}
            onClick={() => this.setState({overlayOpen: true})}
        />;
    }

    Cart = () => {
        return <Cart
            items={this.state.cartItems}
            mutateCartItem={this.mutateCartItem}
            closeDialog={() => this.setOverlayOpen(false)}
        />
    }

    addToCart = (item: ListItem, count: number) => {
        this.setState({cartItems: [...this.state.cartItems, { count, item , id: Date.now()}]})
        this.setState({flashCartButton: false});
        requestAnimationFrame(() => {
            this.setState({flashCartButton: true});
        })
    }

    mutateCartItem = (id: number, item: CartItem | null) => {
       if (item !== null) {
           this.setState({cartItems: this.state.cartItems.map(i => i.id === id ? {...i, count: item.count} : i)});
           return;
       }
        this.setState({cartItems: this.state.cartItems.filter(i => i.id !== id)});
    }

    render() {
        return (
            <div>
                {this.state.overlayOpen ? <Overlay onOverlayClick={() => this.setOverlayOpen(false)}>{this.Cart()}</Overlay> : null}
                <PageLayout
                    fab={this.CartFAB()}
                    body={this.PopulatedSheet()}
                />
            </div>
        );
    }
}


export default App;
