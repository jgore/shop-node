import React from "react";

const ShoppingCard = React.createContext();
const ShoppingCardConsumer = ShoppingCard.Consumer;

class ShoppingCardProvider extends React.Component {
  state = {
    price: 0,
    items: []
  };

  addProductToShopping = item => {
    let all = this.state.price
    var checked = false
    let { items } = this.state;
    console.log(items)
    for (var i = 0; i < items.length; i++) {
      if (items[i].name === item.name && items[i].price === item.price) {
        checked = true
      }
    }
    if (!checked) {
      items.push(item)
      all += item.price
    }

    this.setState({
      items,
      price: all
    });
  };

  removeProductToShopping = (name, price) => {
    console.log(name, price)
    let all = 0;
    this.setState({
      items: this.state.items.filter(m => {
        if (m.name !== name && m.price !== price) {
          all += m.price
          return m
        }
      }),
      price: all
    })
    console.log(all)
  }

  render() {
    return (
      <ShoppingCard.Provider
        value={{
          state: this.state,
          addProductToShopping: this.addProductToShopping,
          removeProductToShopping: this.removeProductToShopping
        }}
      >
        {this.props.children}
      </ShoppingCard.Provider>
    );
  }
}

export default ShoppingCardProvider;
export { ShoppingCardConsumer };
