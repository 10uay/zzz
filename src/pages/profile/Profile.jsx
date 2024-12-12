import DeleteOrder from "@/components/DeleteOrder";
import EditOrder from "@/components/EditOrder";
import ViewOrders from "@/components/ViewOrders";
import { Navbar, Button, Link, useLocation } from "@/utils/Imports";
import Order from "../order/Order";

export default function Profile() {
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log(currentUrl);
  return (
    <div className=" container mx-auto md:px-2 max-w-screen-md mb-5">
      <Navbar
        fluid
        rounded
        className="bg-gray-100 md:mt-2 rounded-lg py-1 filter drop-shadow-lg mb-5"
      >
        <Navbar.Brand className=" select-none">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            My orders
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="!bg-main_color">
            <Link to="/user/profile/new-order">Create new one</Link>
          </Button>
          <Navbar.Toggle className="ms-3 md:ms-0" />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active className="text-[16px] font-bold">
            <Link to="view-orders">View</Link>
          </Navbar.Link>
          <Navbar.Link className="text-[16px] font-bold">
            <Link to="edit-order">Edit</Link>
          </Navbar.Link>
          <Navbar.Link href="#" className="text-[16px] font-bold">
            <Link to="delete-order">Delete</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {currentUrl === "/user/profile/delete-order" && <DeleteOrder />}
      {currentUrl === "/user/profile/edit-order" && <Order />}{" "}
      {currentUrl === "/user/profile/view-orders" && <ViewOrders />}{" "}
      {currentUrl === "/user/profile/new-order" && <Order />}
    </div>
  );
}
