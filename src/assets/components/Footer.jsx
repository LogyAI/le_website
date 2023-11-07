import { Link } from "react-router-dom";
import logo from "../../assets/img/LogoFree.svg";
import fb from "../../assets/img/fb.svg";
import insta from "../../assets/img/insta.svg";
import twitter from "../../assets/img/twitter.svg";

function Footer() {
  return (
    <section className="pb-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -m-8 mb-8">
              <div className="w-full md:w-1/3 p-8">
                <img
                  className="mb-6"
                  style={{ width: "120px" }}
                  src={logo}
                  alt=""
                />
                <p className="text-xl font-bold">
                  Experience the power of AI-powered healthcare platform through
                  Logy.AI’s proprietary and clinically validated solutions. Our
                  tool leverages smartphones and WhatsApp and can be used to
                  improve care coordination, prevent avoidable diseases and
                  provide appropriate care for patients worldwide.
                </p>
              </div>
              <div className="w-full md:w-1/3 p-8">
                <ul className="md:max-w-max ">
                  <li className="mb-6">
                    <Link
                      className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                      to="/about"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-6">
                    <Link
                      className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                      to="/products"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="mb-6">
                    <Link
                      className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                      to="/articles"
                    >
                      Articles
                    </Link>
                  </li>
                  <li className="mb-6">
                    <Link
                      className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  {/* <li>
                    <a
                      className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="w-full md:w-1/3 p-8">
                <ul className="md:max-w-max ">
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold text-2xl"
                      href="#"
                    >
                      Our Locations
                    </a>
                  </li>
                  <li className="mb-4">LOGY AI HEALTH INC</li>
                  <li className="mb-4">
                    <div className="flex">
                      <div style={{ marginRight: "8px" }}>
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ color: "#518df5" }}
                        ></i>
                      </div>
                      <div>
                        {" "}
                        <span>
                          919, North Market Street,
                          <br />
                          Ste 950, Wilmington
                          <br />
                          Delaware - USA 19801
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="flex">
                      <div style={{ marginRight: "8px" }}>
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ color: "#518df5" }}
                        ></i>
                      </div>
                      <div>
                        {" "}
                        <span>
                          D Labs Incubator Association,
                          <br />
                          ISB Campus, Gachibowli,
                          <br />
                          Hyderabad - India, 500111
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between -m-4">
              <div className="w-auto p-4">
                <p className="font-bold">
                  <span>Ⓒ Copyright. All rights reserved by </span>
                  <a className="text-blue-500 hover:text-blue-600" href="#">
                    Logy.AI
                  </a>
                </p>
              </div>
              <div className="w-auto p-4">
                <div className="flex flex-wrap -m-4">
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <img src={insta} alt="" />
                    </a>
                  </div>
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <img src={twitter} alt="" />
                    </a>
                  </div>
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <img src={fb} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
