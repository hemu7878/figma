import { Footer } from "flowbite-react";
import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";

function FooterLayout() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              name="NFTHub"
            />
            <br />
            <Footer.Link href="#">Join our Discord channel or follow us on <br /> Twitter to keep up to date with our latest work <br /> and announcements.</Footer.Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Quick Link" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Collection </Footer.Link>
                <Footer.Link href="#">Roadmap </Footer.Link>
                <Footer.Link href="#">FAQs </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Community" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">How it works!</Footer.Link>
                <Footer.Link href="#">Blockchain</Footer.Link>
                <Footer.Link href="#">Get in touch</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Nfthub All Rights Reserved." year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterLayout;
