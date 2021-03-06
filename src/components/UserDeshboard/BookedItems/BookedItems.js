import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserNav from "../UserNav/UserNav";
import "./BookItems.css";

const BookedItems = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("https://serene-coast-10697.herokuapp.com/getBookedInfo")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container-fluid px-0 overflow-hidden">
      <div className="row">
        <div className="col-md-2 mb-3">
          <UserNav />
        </div>
        {orders.length !=0 ? (
          <div className="col-md-10 mt-5">
            <h1>YOUR ORDERS</h1>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="px-3">Service name</th>
                    <th>Service price</th>
                    <th>Service description</th>
                    <th>In Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._key} scope="row">
                      <td>{order.sName}</td>
                      <td>{order.sPrice}</td>
                      <td>{order.sDesc}</td>
                      <td className="text-danger">
                        Pending
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h1 className="mt-5 text-center mx-auto">YOUR ORDER LIST IS EMPTY</h1>
        )}
      </div>
    </div>
  );
};

export default BookedItems;
