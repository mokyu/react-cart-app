import React, {SetStateAction, useState} from 'react';
import './App.scss';
import Sheet from "./component/atoms/Sheet";
import PageLayout from "./component/templates/PageLayout";
import ItemLayout from "./component/templates/ItemLayout";
import Item, {ListItem} from "./component/organisms/Item";
import useFakeStoreApi from "./Hooks/useFakeStoreApi";
import Overlay from "./component/atoms/Overlay";
import CartFab from "./component/molecules/CartFab";

export type CartItem = {
    item: ListItem
    count: number
}


function PopulatedSheet(items: ListItem[], cartItems: CartItem[], cartItemSetter: React.Dispatch<SetStateAction<CartItem[]>>): React.JSX.Element
{
    function OnCartAdd(item: ListItem, count: number): void
    {
        cartItemSetter([...cartItems, {count, item}])
    }

    return (
        <Sheet>
            <ItemLayout>
                {items.map((i) =>(
                    <Item
                        onCartAdd={OnCartAdd}
                        key={i.id}
                        item={i}
                    />
                ))}
            </ItemLayout>
        </Sheet>
    )
}

function CartFAB(count: number)
{
    return (
        <CartFab count={count}/>
    )
}

function App() {
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const { items, loading, error } = useFakeStoreApi();

    return (
          <div>
              {overlayOpen ? <Overlay onOverlayClick={() => setOverlayOpen(false)}/> : null}
              <PageLayout fab={CartFAB(cartItems.length)} body={PopulatedSheet(items, cartItems, setCartItems)}/>
          </div>
    );
}

export default App;
