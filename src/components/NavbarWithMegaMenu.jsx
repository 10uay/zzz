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
            معافى
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="!bg-main_color">
            <Link to="/user/profile/view-orders">طلباتي</Link>
          </Button>
          <Navbar.Toggle className="ms-3 md:ms-0" />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active className="text-[16px] font-bold">
            <Link to="/">الرئيسية</Link>
          </Navbar.Link>
          <Navbar.Link className="text-[16px] font-bold">
            <Link to="/about">حول</Link>
          </Navbar.Link>
          <Navbar.Link className="text-[16px] font-bold">
            <Link to="/contact-us">اتصل بنا</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
