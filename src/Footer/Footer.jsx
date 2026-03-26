import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  const company = ["Home", "Apps", "Installed Apps", "About", "Blog"];
  const services = [
    "App Discovery",
    "App Details & Reviews",
    "Installation Tracking",
    "Ratings & Analytics",
    "Trending Apps",
    "Search & Filter",
  ];

  const resources = [
    "Documentation",
    "Help Center",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const { email, phone, location } = {
    email: "support@hero.io",
    phone: "+880 1XXXXXXXXX",
    location: "Bangladesh",
  };

  return (
    <div>
      <footer className="grid md:grid-cols-6 gap-6 bg-black text-white p-4  md:p-10 ">
        <aside className="col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <img className="w-8" src={logo} alt="" />
            <a className=" font-bold text-2xl bg-linear-to-r from-[#632EE3] via-[#632EE3] to-[#9F62F2]  bg-clip-text text-transparent">
              HERO.IO
            </a>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">
              Smart App Discovery Platform{" "}
            </h2>
            <p className="max-w-96 text-justify">
              Discover, explore and manage your favorite apps in one place. We help users find the best apps with ratings, reviews and
              insights.
            </p>
          </div>
        </aside>
        <div>
          <nav className="flex flex-col gap-2 ms-4">
            {" "}
            <h6 className="footer-title">Company</h6>
            {company.map((item) => (
              <a className="link text-white link-hover">{item}</a>
            ))}
          </nav>
        </div>
        <div>
          <nav className="flex flex-col gap-2 ms-4">
            <h6 className="footer-title">Services</h6>
            {services.map((item) => (
              <a className="link text-white link-hover">{item}</a>
            ))}
          </nav>
        </div>

        <div>
          <nav className="flex flex-col gap-2 ms-4">
            <h6 className="footer-title">Resources</h6>
            {resources.map((item) => (
              <a className="link text-white link-hover">{item}</a>
            ))}
          </nav>
        </div>

        <div>
          <nav className="flex flex-col gap-2 ms-4">
            <h6 className="footer-title">Contact</h6>
            <div className="space-y-2">
              <p>Email : {email}</p>
              <p>
                Contact number : <br /> {phone}
              </p>
              <p>Location : {location}</p>
            </div>
          </nav>
        </div>
      </footer>
      <div className="divider bg-black my-0 divider-primary px-8"></div>

      <footer className="footer flex md:flex-row flex-col-reverse items-center md:justify-between  bg-black text-white px-10 py-8">
        <aside className="grid-flow-col items-center">
          <p className="lg:text-lg text-sm">© 2026 Hero.IO — All rights reserved</p>
        </aside>
        <div>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
             
              <a className="cursor-pointer">
                <i class="fa-brands fa-youtube text-3xl"></i>
              </a>
              <a className="cursor-pointer">
                <i class="fa-brands fa-square-facebook text-3xl"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-github text-3xl"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin text-3xl"></i>
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
