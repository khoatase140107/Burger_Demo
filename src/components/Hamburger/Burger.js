import { Component } from "react";

const initialState = {
  burger: [
    {
      name: "salad",
      quantity: 0,
      unitPrice: 10,
    },
    {
      name: "cheese",
      quantity: 0,
      unitPrice: 20,
    },
    {
      name: "meat",
      quantity: 0,
      unitPrice: 25,
    },
    {
      name: "bacon",
      quantity: 0,
      unitPrice: 28,
    },
  ],
  totalPrice: 0,
};
export default class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  resetStateBeginState = () => {
    //const newState = initialState
    this.setState(newState);
    console.log(this.state)
  };
  calcTotalPrice = () => {
    const price = this.state.burger.reduce((tong, sp) => {
      return tong + sp.quantity * sp.unitPrice;
    }, 0);
    return price;
  };
  onQuantityHandler = (name, value) => {
    const newBurger = this.state.burger;
    for (let item of newBurger) {
      if (item.name === name) {
        item.quantity += value;
      }
    }
    const newTotalPrice = this.calcTotalPrice();
    this.setState({
      burger: newBurger,
      totalPrice: newTotalPrice,
    });
  };
  renderNewBurder = () => {
    const newBurger = this.state.burger.filter((item) => item.quantity > 0);
    return newBurger.map((item, index) => {
      if (item.quantity > 1) {
        let test = [];
        for (let i = 0; i < item.quantity; i++) {
          test.push(<div className={item.name} />);
        }
        //console.log(test)
        return test;
      } else {
        return <div key={index} className={item.name} />;
      }
    });
  };
  render() {
    return (
      <div className="burger">
        <div className="box">
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Your taste Burger
          </h1>
          {/* Phần bánh burger phía trên */}
          <div className="bread-top">
            <div className="seeds" />
            <div className="seeds2" />
          </div>
          {/* Salad
          <div className="salad" />

          {/* Cheese: khi tạo component <Cheese/> chỉ cần copy 1 dòng div là đủ rồi nhé, tương tự cho salad và meat */}
          {/* <div className="cheese" /> */}
          {this.state.totalPrice === 0 ? (
            <h1 className="noItem">Please start adding ingredients</h1>
          ) : (
            this.renderNewBurder()
            //<div></div>
          )}
          {/* Meat */}
          {/* <div className="meat" />
          <div className="bacon" /> */}
          {/* Phần bánh burger phía dươi */}
          <div className="bread-bottom" />
        </div>
        <div className="orderBur box1">
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Custom your burger
          </h1>
          <hr
            width="80%"
            size="16"
            style={{
              margin: "auto",
              backgroundColor: "white",
            }}
          />
          <div>
            <table className="tableOrder">
              <tr>
                <th>topping</th>
                <th>option</th>
                <th>unit price</th>
                <th>price</th>
              </tr>
              {this.state.burger.map((item, index) => {
                return (
                  <tr key={index}>
                    <td
                      style={{
                        fontWeight: 700,
                        textTransform: "capitalize",
                      }}
                    >
                      {item.name}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          if (item.quantity > 0) {
                            this.onQuantityHandler(item.name, -1);
                          }
                        }}
                        style={{
                          backgroundColor: "#C49582",
                          borderColor: "#C49582",
                          padding: 10,
                          marginRight: 10,
                          color: "white",
                          cursor: item.quantity > 0 ? "pointer" : "default",
                        }}
                      >
                        Less
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => {
                          this.onQuantityHandler(item.name, 1);
                        }}
                        style={{
                          backgroundColor: "#8A2B06",
                          borderColor: "#8A2B06",
                          padding: 10,
                          marginLeft: 10,
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        More
                      </button>
                    </td>
                    <td>{item.unitPrice}</td>
                    <td>{item.unitPrice * item.quantity}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <hr
            width="80%"
            size="16"
            style={{
              margin: "auto",
              backgroundColor: "white",
            }}
          />
          <div className="totalPrice">
            <p>Total cost</p>
            <p>{this.state.totalPrice}$</p>
          </div>
          <div className="btn-OrderReset">
            <button className="btn_Order">Order now</button>
            <button onClick={this.resetStateBeginState} className="btn_Reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
