import { useState } from "react";
import {orderData} from "../config/dashboardData";

export function useFilterData() {
    const [orders, setOrders] = useState(orderData);

    const filterOrders = (id) => {
        return orders.filter((order) => {
          const hasOrderId = order.orderID
            .toString()
            .toLowerCase()
            .includes(id.toLowerCase());
          if (!hasOrderId) return;
          return hasOrderId;
        });
      };

    return {orders, setOrders, filterOrders}
}