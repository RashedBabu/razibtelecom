import React, { useState } from "react";

import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../../../helpers/message";
import { showLoading } from "../../../helpers/loding";
import { create } from "../../../api/ribon";

const AddRibon = () => {

  const [battery, setBattery] = useState({
    boxNumber: "",
    productName: "",
    modelName: "",
    quantity: "",
    allQuantity: "",
    price: "",
    replacement: "",
    l_sell: "",
    date: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    boxNumber,
    productName,
    modelName,
    quantity,
    allQuantity,
    price,
    replacement,
    l_sell,
    date,
    successMsg,
    errorMsg,
    loading,
  } = battery;
  const handleChange = (evt) => {
    setBattery({
      ...battery,
      [evt.target.name]: evt.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };
  const handleinput = (evt) => {
    setBattery({
      ...battery,
      [evt.target.name]: evt.target.value,

      errorMsg: "",
      successMsg: "",
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // client-side validation
    if (
      isEmpty(boxNumber) ||
      isEmpty(productName) ||
      isEmpty(modelName) ||
      isEmpty(quantity) ||
      isEmpty(allQuantity) ||
      isEmpty(price)
    ) {
      setBattery({
        ...battery,
        errorMsg: "All fields are required",
      });
    } else {
      setBattery({ loading: true });
      await create(battery)
        .then((response) => {
          window.location.reload(false);
          setBattery({
            boxNumber: "",
            productName: "",
            modelName: "",
            quantity: "",
            allQuantity: "",
            price: "",
            replacement: "",
            l_sell: "",
            date: "",
            loading: false,
            successMsg: response.data.successMessage,
          });
        })
        .catch((err) => {
          console.log("Axios creatdisplay error: ", err);
          setBattery({
            ...battery,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  return (
    <>
      <div className="card card_create card_create_dis">
      <div className="card-body">
          <div className="card-title ">
            <h2 align="center">Create Battery</h2>
            {successMsg && showSuccessMsg(successMsg)}
            {errorMsg && showErrorMsg(errorMsg)}
            {loading && <div className="text-center pb-4">{showLoading()}</div>}
            <form className="signup-form " onSubmit={handleSubmit}>
              {/* boxNumber */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="boxNumber"
                  value={boxNumber}
                  className="form-control"
                  placeholder="Box Number"
                  type="text"
                  onClick={handleinput}
                  onChange={handleChange}
                />
              </div>
              {/* productName */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="productName"
                  value={productName}
                  className="form-control"
                  placeholder="Product Name"
                  type="text"
                  onChange={handleChange}
                  onClick={handleinput}
                />
              </div>
              {/* modelName */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="modelName"
                  value={modelName}
                  className="form-control"
                  placeholder="model"
                  type="text"
                  onChange={handleChange}
                  onClick={handleinput}
                />
              </div>
              {/* quantity */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="quantity"
                  lable="quantity"
                  value={quantity}
                  className="form-control"
                  placeholder="qt--0"
                  type="text"
                  onChange={handleChange}
                  onClick={handleinput}
                />
              </div>
              {/*all quantity */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="allQuantity"
                  lable="allQuantity"
                  value={allQuantity}
                  className="form-control"
                  placeholder="Total-Quantity--0"
                  type="text"
                  onChange={handleChange}
                  onClick={handleinput}
                />
              </div>
              {/* price */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="price"
                  value={price}
                  className="form-control"
                  placeholder="price $0"
                  type="text"
                  onChange={handleChange}
                  onClick={handleinput}
                />
              </div>
              {/* replacement */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="replacement"
                  value={replacement}
                  className="form-control"
                  placeholder="replacement "
                  type="text"
                  onChange={handleChange}
                  onClick={handleinput}
                />
              </div>
              {/* Last Sell */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="l_sell"
                  value={l_sell}
                  className="form-control"
                  placeholder="Last Sell "
                  type="text"
                  onChange={handleChange}
                  onClick={handleinput}
                />
              </div>
              {/* date */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="date"
                  value={date}
                  className="form-control"
                  placeholder="date "
                  type="text"
                  onChange={handleChange}
                  onClick={handleinput}
                />
              </div>
              {/* Create button */}
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Create
                </button>
              </div>
              {/* already have account */}
              {/* <p className="text-center text-white">
                  Have an account? <Link to="/signin">Log In</Link>
                </p> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRibon;
