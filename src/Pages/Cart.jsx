import React from "react";

function Cart() {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ margin: 20 }}>
        <h2>SHOPPING CART</h2>

        <table style={{ border: "2px solid #eff0f2", borderRadius: "0.4rem" }}>
          <tr>
            <th style={{ border: "none" }}></th>
            <th style={{ border: "none" }}></th>
            <th style={{ border: "none" }}>Product</th>
            <th style={{ border: "none" }}>Price</th>
            <th style={{ border: "none" }}>Quantity</th>
            <th style={{ border: "none" }}>Subtotal</th>
          </tr>

          <tr>
            <td style={{ border: "none" }}>
              <div>
                <img
                  src=""
                  alt=""
                  className="avatar-lg rounded"
                  style={{ height: "5rem", width: "5rem" }}
                />
              </div>
            </td>

            <td style={{ border: "none" }}>
              <div className="me-4">
                <img
                  src="	https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/mushie3-768x768.webp"
                  alt=""
                  className="avatar-lg rounded"
                  style={{ height: "5rem", width: "5rem" }}
                />
              </div>
            </td>
            <td class="product-name" data-title="Product">
              <a style={{color:"lightblue",fontWeight:"bold"}} href="https://babysonbroadway.com/product/mushie-silicone-cradle-cap-brush/?attribute_pa_color=blush-shifting-sand">
                Mushie Silicone Cradle Cap Brush - Blush/Shifting Sand
              </a>
              <dl class="variation">
                <dt style={{fontWeight:"bold"}}>Pick Up Type: Delivery</dt>
                {/* <dd class="variation-PickUpType">
                  Delivery
                </dd> */}
              </dl>
            </td>
            <td style={{ border: "none" }}>$9.99</td>
            <td style={{ border: "none" }}>
              <select style={{ minWidth: "5px" }}>
                <option value="1">1</option>
                <option value="2" selected="">
                  2
                </option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </td>
            <td style={{ border: "none" }}>$9.99 (9.99 points)</td>
          </tr>
        </table>
      </div>
      <div style={{ width: 500 }}>
        <div
          style={{
            backgroundColor: "#fff",
            border: "2px solid #eff0f2",
            borderRadius: "0.4rem",
          }}
        >
          <div>
            <h5 style={{ fontWeight: "bold" }}>Cart Totals</h5>

            <div className="card-body p-4 pt-2">
              <div className="table-responsive">
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold", border: "none" }}>
                        Sub Total
                      </td>
                      <td
                        style={{
                          textAlign: "end",
                          fontWeight: "bold",
                          border: "none",
                        }}
                      >
                        $ 780
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontWeight: "bold", border: "none" }}>
                        Shipping
                      </td>
                      <td
                        style={{
                          textAlign: "end",
                          fontWeight: "bold",
                          border: "none",
                          color: "lightblue",
                        }}
                      >
                        Calculate shipping
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: "none" }}></td>
                      <td
                        style={{
                          textAlign: "end",
                          fontWeight: "bold",
                          border: "none",
                        }}
                      >
                        9.99
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold", border: "none" }}>
                        Total
                      </td>
                      <td style={{ textAlign: "end", border: "none" }}>
                        <span style={{ fontWeight: "bold" }}>$ 9.99</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div
                  style={{
                    backgroundColor: "#5BC0DE",
                    border: "1px solid #eff0f2",
                    borderRadius: "0.5rem",
                  }}
                >
                  <h6
                    style={{
                      color: "#FFFFFF",
                      textAlign: "center",
                      padding: 3,
                    }}
                  >
                    Proceed to Checkout
                  </h6>
                </div>
                <div>
                  <p style={{ fontSize: 20, textAlign: "center" }}>
                    &mdash;&nbsp;or &nbsp;&mdash;
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#FFD700",
                    border: "1px solid #eff0f2",
                    borderRadius: "0.5rem",
                  }}
                >
                  <h6
                    style={{
                      color: "#2C2E2F",
                      textAlign: "center",
                      padding: 3,
                    }}
                  >
                    PayPal
                  </h6>
                </div>
                <div
                  style={{
                    backgroundColor: "#000",
                    border: "1px solid #eff0f2",
                    borderRadius: "0.5rem",
                    marginTop: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <img
                      src="https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2023/04/BOB_Logo_Horz_Black_RGB-2048x542.png 2048w"
                      class="paypal-logo paypal-logo-paypal paypal-logo-color-blue"
                      alt=""
                      width="100px"
                      height="30px"
                    ></img>
                  </div>

                  <h6
                    style={{
                      color: "#FFFFFF",
                      textAlign: "center",
                      padding: 3,
                    }}
                  >
                    Debit or Credit Card
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
