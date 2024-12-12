import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import './MyFooter.css'

export default function MyFooter() {
  return (
    <Footer
      container
      className=" border-t-2 mt-5 bg-gray-100 md:text-start text-center"
    >
      <div className="w-full container mx-auto px-3">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mx-auto lg:mx-0">
            <Footer.Brand
              href="#"
              src="/media/logo.png"
              alt="muafa Logo"
              className="fotter-logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="حول" className="text-main_color" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">خيار</Footer.Link>
                <Footer.Link href="#">خيار</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="تابعنا" className="text-main_color" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">خيار</Footer.Link>
                <Footer.Link href="#">خيار</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="قانوني" className="text-main_color" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">سياسة الخصوصية</Footer.Link>
                <Footer.Link href="#">الشروط والأحكام</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="™جميع الحقوق محفوظة لدى جمعية معافى"
            year={2025}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
