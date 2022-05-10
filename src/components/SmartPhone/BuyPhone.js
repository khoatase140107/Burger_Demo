import { Component } from "react";
import data from "../../data/Smartphone.json";
//import InforPhone from "./InforPhone";
class BuyPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: data,
      myCart: [],
      detailPhone: null,
    };
  }
  onViewDetailHanlder = (item) => {
    this.setState({
      detailPhone: item,
    });
  };
  addToCart = (item) => {
    if (this.state.myCart.length === 0) {
      item["quantity"] = 1;
      this.setState({
        myCart: [item],
      });
    } else {
      let newCart = this.state.myCart;
      let flag = false;
      console.log(newCart);
      for (let myItem of newCart) {
        if (myItem.id === item.id) {
          myItem["quantity"] += 1;
          flag = true;
          break;
        }
      }
      if (!flag) {
        item["quantity"] = 1;
        newCart.push(item);
      }

      this.setState({
        myCart: newCart,
      });
    }
  };
  onAddItemHandler = (id, value) => {
    let newCart = this.state.myCart;
    for (let phone of newCart) {
      if (phone.id === id) {
        phone["quantity"] += value;
      }
    }
    this.setState({
      myCart: newCart,
    });
  };
  deleteItemInCart = (id) => {
    console.log(id);
    let newCart = this.state.myCart;
    for (let index in newCart) {
      console.log(index);
      if (newCart[index].id === id) {
        newCart.splice(index, 1);
        break;
      }
    }
    this.setState({
      myCart: newCart,
    });
  };
  render() {
    const renderPhone = this.state.phone.map((item, index) => {
      return (
        <div key={index} className="item">
          <img
            className="item_img"
            src={item.img}
            alt="myPhone"
            width={300}
            height={200}
          />
          <h1 className="item_name">{item.name}</h1>
          <button
            style={{
              margin: 20,
            }}
            className="btn btn-success"
            onClick={() => {
              this.onViewDetailHanlder(item);
            }}
          >
            Xem chi tiết
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.addToCart(item);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      );
    });
    return (
      <div>
        <div className="phone">
          <h5 data-toggle="modal" data-target="#exampleModal">
            Giỏ hàng({this.state.myCart.length})
          </h5>
          {renderPhone}
        </div>
        ;
        {this.state.detailPhone != null ? (
          <div className="inforPhone">
            <div className="inforPhone_left">
              <h1>{this.state.detailPhone.name}</h1>
              <img
                src={this.state.detailPhone.img}
                alt="detailPhoneImg"
                width={300}
                height={300}
              />
            </div>
            <div className="inforPhone_right">
              <h1>Thông số kĩ thuật</h1>
              <div className="inforPhone_item">
                <p>Màn Hình</p>
                <p>{this.state.detailPhone.info.screen}</p>
              </div>
              <hr size="4" width="100%" align="left" color="green" />
              <div className="inforPhone_item">
                <p>Hệ điều hành</p>
                <p>{this.state.detailPhone.info.os}</p>
              </div>
              <hr size="4" width="100%" align="left" color="green" />
              <div className="inforPhone_item">
                <p>Camera trước</p>
                <p>{this.state.detailPhone.info.frontCamera}</p>
              </div>
              <hr size="4" width="100%" align="left" color="green" />
              <div className="inforPhone_item">
                <p>Camera sau</p>
                <p>{this.state.detailPhone.info.backCamera}</p>
              </div>
              <hr size="4" width="100%" align="left" color="green" />
              <div className="inforPhone_item">
                <p>RAM</p>
                <p>{this.state.detailPhone.ram}</p>
              </div>
              <hr size="4" width="100%" align="left" color="green" />
              <div className="inforPhone_item">
                <p>ROM</p>
                <p>{this.state.detailPhone.rom}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            style={{
              maxWidth: 900,
            }}
            class="modal-dialog"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {this.state.myCart.length === 0 ? (
                  <h1
                    style={{
                      color: "red",
                    }}
                  >
                    No item in this cart
                  </h1>
                ) : (
                  <table>
                    <tr className="titleCart">
                      <th>Mã sản phẩm</th>
                      <th>Hình Ảnh</th>
                      <th>Tên Sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                    </tr>

                    {this.state.myCart.length > 0 ? (
                      this.state.myCart.map((item, index) => {
                        return (
                          <tr className="titleCart contentCart" key={index}>
                            <td>{item.id} </td>
                            <td>
                              <img
                                src={item.img}
                                alt="phoneCart"
                                height={30}
                                width={30}
                              />
                            </td>
                            <td>{item.name}</td>
                            <td
                              style={{
                                paddingBottom: 10,
                              }}
                            >
                              <button
                                class="btn btn-primary"
                                onClick={() => {
                                  this.onAddItemHandler(item.id, 1);
                                }}
                              >
                                +
                              </button>
                              {item.quantity}
                              <button
                                class="btn btn-primary"
                                onClick={() => {
                                  if (item.quantity > 1)
                                    this.onAddItemHandler(item.id, -1);
                                  else alert("Quantity larger than 1");
                                }}
                              >
                                -
                              </button>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.price * item.quantity}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  this.deleteItemInCart(item.id);
                                }}
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr></tr>
                    )}
                  </table>
                )}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyPhone;
