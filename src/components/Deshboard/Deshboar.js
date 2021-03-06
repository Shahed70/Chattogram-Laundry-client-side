import axios from "axios";
import { useEffect, useState } from "react";
import SideNav from "../Sidenav/SideNav";

const Deshboar = ({sendUser}) => {
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
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-md-2">
            <SideNav />
          </div>

          <div className="col-md-10 mt-5 ">
            {
              orders.length === 0 ? "" : <h1>CUSTOMER ALL ORDERS</h1>
            }
              {
                orders.length !==0? 
                <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="px-3">Service name</th>
                    <th>Service price</th>
                    <th>Service description</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._key} scope="row">
                      <td>{order.sName}</td>
                      <td>{order.sPrice}</td>
                      <td>{order.sDesc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              :<h1 className="mt-5 text-center mx-auto">YOUR ORDER LIST IS EMPTY</h1>
              }
          </div>
        </div>
      </div>
  );
};

export default Deshboar;
