import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Cards/Breadcrumb";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const OrderSummaryCard = ({ productName, productPrice, productQuantity }) => {
  return (
    <div class="flex items-center justify-between space-y-2">
      <p class="text-gray-800 font-medium">
        {productName}{" "}
        <span className="text-gray-500 text-sm">(x{productQuantity})</span>
      </p>
      <p class="text-gray-800 font-medium">₹{productPrice}</p>
    </div>
  );
};

const Checkout = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState("");
  const [confirmTandC, setConfirmTandC] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    houseNo: "",
    streetName: "",
    city: "",
    state: "",
    country: "",
    pinCode: 0,
    phoneNo: 0,
  });

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  //   console.log(token);

  const getCart = async () => {
    const url = `http://localhost:8080/api/v1/cart/${userId}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        //   console.log(data.cart);
        setCart(data?.cart?.cartItems);
        setCartId(data?.cart?._id);
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, e) => total + e.price * e.quantity, 0);
  };
  const totalPrice = (calculateTotal() + 100 + 120).toLocaleString("en-IN");

  const placeOrder = async () => {
    console.log(cartId);
    try {
      const res = await fetch(`http://localhost:8080/api/v1/order/new`, {
        method: "POST",
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shippingInfo,
          totalPrice: parseInt(totalPrice),
          shippingPrice: 100,
        }),
      });

      const resData = await res.json();
      console.log(resData);

      if (resData.success) {
        alert("Order placed!");
        navigate("/order-complete")
      } else {
        console.error("Failed to place order:", resData.error);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <Breadcrumb heading={"Checkout"} />

      {/* <!-- checkout wrapper --> */}
          <form onSubmit={(e) => {
            e.preventDefault();
              if (confirmTandC) {
                placeOrder();
              } else {
                Toast.fire({
                  icon: "error",
                  title: "You have not agreed to the Terms and Conditions",
                });
              }
            }}>
      <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        {/* <!-- checkout form --> */}
        <div class="lg:col-span-8 border border-gray-200 px-4 py-4 rounded">
            <h3 class="text-lg font-medium capitalize mb-4">Billing Address</h3>

            <div class="space-y-4">
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-gray-600 mb-2 block">
                    House No.<span class="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    class="input-box"
                    required
                    value={shippingInfo?.houseNo}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        houseNo: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label class="text-gray-600 mb-2 block">
                    Street Name <span class="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    class="input-box"
                    required
                    value={shippingInfo?.streetName}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        streetName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">
                  City
                  <span class="text-primary">*</span>
                </label>
                <input
                  type="text"
                  class="input-box"
                  required
                  value={shippingInfo?.city}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">
                  State
                  <span class="text-primary">*</span>
                </label>
                <input
                  type="text"
                  class="input-box"
                  required
                  value={shippingInfo?.state}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, state: e.target.value })
                  }
                />
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">
                  Country <span class="text-primary">*</span>
                </label>
                <input
                  type="text"
                  class="input-box"
                  required
                  value={shippingInfo?.country}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      country: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">
                  Pin Code <span class="text-primary">*</span>
                </label>
                <input
                  type="number"
                  class="input-box"
                  required
                  value={shippingInfo?.pinCode}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      pinCode: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">
                  Phone number<span class="text-primary">*</span>
                </label>
                <input
                  type="number"
                  class="input-box"
                  required
                  value={shippingInfo?.phoneNo}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      phoneNo: e.target.value,
                    })
                  }
                />
              </div>
            </div>
         
        </div>
        {/* <!-- checkout form end --> */}

        {/* <!-- order summary --> */}
        <div class="lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
          <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">
            ORDER SUMMARY
          </h4>
          {cart?.length > 0 &&
            cart?.map((e, index) => (
              <OrderSummaryCard
                key={index}
                productName={e?.name}
                productPrice={e?.price}
                productQuantity={e?.quantity}
                productImg={e?.image}
              />
            ))}
          <div class="flex justify-between border-b border-gray-200 mt-1">
            <h4 class="text-gray-800 font-medium my-3 uppercase">Subtotal</h4>
            <h4 class="text-gray-800 font-medium my-3 uppercase">
              ₹ {calculateTotal().toLocaleString("en-IN")}
            </h4>
          </div>
          <div class="flex justify-between border-b border-gray-200">
            <h4 class="text-gray-800 font-medium my-3 uppercase">Shipping</h4>
            <h4 class="text-gray-800 font-medium my-3 uppercase">₹100</h4>
          </div>
          <div class="flex justify-between border-b border-gray-200">
            <h4 class="text-gray-800 font-medium my-3 uppercase">Tax</h4>
            <h4 class="text-gray-800 font-medium my-3 uppercase">₹120</h4>
          </div>
          <div class="flex justify-between">
            <h4 class="text-gray-800 font-semibold my-3 uppercase">Total</h4>
            <h4 class="text-gray-800 font-semibold my-3 uppercase">
              ₹{totalPrice}
            </h4>
          </div>

          {/* <!-- agreeement  --> */}
          <div class="flex items-center mb-4 mt-2">
            <input
              value={confirmTandC}
              onChange={(e) => {
                setConfirmTandC(true);
              }}
              type="checkbox"
              id="agreement"
              class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
            />
            <label
              for="agreement"
              class="text-gray-600 ml-3 cursor-pointer text-sm"
            >
              Agree to our
              <a class="text-primary"> Terms & conditions</a>
            </label>
          </div>

          {/* <!-- checkout --> */}
          <button
           type="submit"
            class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
         hover:text-primary transition text-sm w-full block text-center"
          >
            Place order
          </button>
          {/* <!-- checkout end --> */}
        </div>
      </div>
      </form>
      {/* <!-- order summary end --> */}
    </>
  );
};

export default Checkout;
