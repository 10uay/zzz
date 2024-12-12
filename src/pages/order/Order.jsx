import FixedNotification from "@/components/FixedNotification";
import Order_info from "./components/Order_info";
import { useSelector, useState } from "@/utils/Imports";
import Personal_info from "./components/Personal_info";
import EmployeeAndClosestPersonInfo from "./components/EmployeeAndClosestPersonInfo";
import Application_attachments from "./components/Application_attachments";
import Document_attachments from "./components/Document_attachments";

export default function Order() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [user, setUser] = useState(currentUser);
  const order_index =
    currentUser?.orders.length === 0 ? 0 : currentUser?.orders.length - 1;
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div>
      <div className="container p-3 max-w-3xl mx-auto mb-4">
        <FixedNotification text="Submit an application" />
      </div>
      {pageNumber === 1 ? (
        <Order_info
          setUser={setUser}
          user={user}
          orders_index={order_index}
          setPageNumber={setPageNumber}
        />
      ) : pageNumber === 2 ? (
        <Personal_info
          setUser={setUser}
          user={user}
          orders_index={order_index}
          setPageNumber={setPageNumber}
        />
      ) : pageNumber === 3 ? (
        <EmployeeAndClosestPersonInfo
          setUser={setUser}
          user={user}
          orders_index={order_index}
          setPageNumber={setPageNumber}
        />
      ) : pageNumber === 4 ? (
        <Application_attachments
          setUser={setUser}
          user={user}
          orders_index={order_index}
          setPageNumber={setPageNumber}
        />
      ) : pageNumber === 5 ? (
        <Document_attachments
          setUser={setUser}
          user={user}
          orders_index={order_index}
          setPageNumber={setPageNumber}
        />
      ) : (
        ""
      )}
    </div>
  );
}
