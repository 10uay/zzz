import { Navbar, Button, Link } from "@/utils/Imports";

export default function NavbarWithMegaMenu() {
  return (
    <div className=" container mx-auto md:px-2 max-w-screen-lg mb-5">
      <Navbar
        fluid
        rounded
        className="bg-gray-100 md:mt-2 rounded-lg py-1 filter drop-shadow-lg"
      >
        <Navbar.Brand className=" select-none">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Muafa
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="!bg-main_color">
            <Link to="/user/profile/view-orders">My orders</Link>
          </Button>
          <Navbar.Toggle className="ms-3 md:ms-0" />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active className="text-[16px] font-bold">
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link className="text-[16px] font-bold">
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link className="text-[16px] font-bold">
            <Link to="/contact-us">Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
