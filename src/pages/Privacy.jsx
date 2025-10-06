import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import logo from "../assets/img/LogoFree.svg";
import "../assets/css/cs.css";

const meta = {
  title: "Privacy Policy - Logy.AI",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Privacy() {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className="pt-6 bg-gray-50 overflow-hidden pb-6">
        <div className="container mx-auto px-4">
          <div className="mb-1">
            <div className="flex items-center justify-between px-6 py-3.5 bg-white border border-gray-100 rounded-full">
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto">
                    <Link className="inline-block" to="/">
                      <img
                        src={logo}
                        style={{
                          width: "100px",
                          transform: "translateY(3px) translateX(10px)",
                        }}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden lg:block">
                    <ul className="flex items-center justify-center ">
                      <li className="  ">
                        <Link
                          className=" inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700  "
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className=" inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700 "
                          to="/about"
                        >
                          About us
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="/products"
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="/articles"
                        >
                          Articles
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="/cases"
                        >
                          Case Studies
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden lg:block">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full md:w-auto p-2" />
                      <div className="w-full md:w-auto p-2">
                        <Link
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                          to="/contact"
                        >
                          Get in Touch
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto lg:hidden">
                    <a className="inline-block" onClick={toggleMenu}>
                      <svg
                        className="navbar-burger text-blue-500"
                        width={45}
                        height={45}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={56}
                          height={56}
                          rx={28}
                          fill="currentColor"
                        />
                        <path
                          d="M37 32H19M37 24H19"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50"
              hidden={menu}
            >
              <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
              <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                <div className="flex flex-wrap justify-between h-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between -m-2">
                      <div className="w-auto p-2">
                        <Link className="inline-block" to="/">
                          <img src={logo} style={{ width: "90px" }} alt="" />
                        </Link>
                      </div>
                      <div className="w-auto p-2">
                        <a
                          className="inline-block navbar-burger"
                          onClick={toggleMenu}
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6M6 6L18 18"
                              stroke="#111827"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center py-8 w-full">
                    <ul>
                      <li className="mb-9">
                        <Link
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="mb-9">
                        <Link
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="/about"
                        >
                          About us
                        </Link>
                      </li>
                      <li className="mb-9">
                        <Link
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="products"
                        >
                          Products
                        </Link>
                      </li>
                      <li className="mb-9">
                        <Link
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="/articles"
                        >
                          Articles
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="/cases"
                        >
                          Case Studies
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-end w-full pb-8">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full p-2">
                        <Link
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                          to="/contact"
                        >
                          Get in Touch
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>

            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2024
            </p>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  Nex Fitzap Private Limited ("Logy.AI", "we", "us", or "our") is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                  you use our AI-powered healthcare platform and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
                <p className="leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Professional credentials and organizational affiliation</li>
                  <li>Account login credentials</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Health Information</h3>
                <p className="leading-relaxed mb-4">
                  When using our diagnostic tools, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Medical images and diagnostic data</li>
                  <li>Health-related information necessary for AI analysis</li>
                  <li>Treatment and diagnosis records (when applicable)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.3 Usage Data</h3>
                <p className="leading-relaxed">
                  We automatically collect information about your interaction with our platform, including device
                  information, IP address, browser type, and usage patterns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use collected information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our AI-powered diagnostic services</li>
                  <li>Analyze medical images and generate diagnostic insights</li>
                  <li>Communicate with you about our services</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Conduct research and development to enhance our AI algorithms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="leading-relaxed">
                  We implement industry-standard security measures to protect your information, including encryption,
                  secure data storage, and access controls. However, no method of transmission over the internet is
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. HIPAA Compliance</h2>
                <p className="leading-relaxed">
                  For users in the United States, we comply with the Health Insurance Portability and Accountability
                  Act (HIPAA) when handling protected health information (PHI). We maintain appropriate administrative,
                  physical, and technical safeguards as required by HIPAA.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
                <p className="leading-relaxed mb-4">We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Healthcare providers and institutions (with your consent)</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners for research purposes (with de-identified data)</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We do not sell your personal or health information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <p className="leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (subject to legal obligations)</li>
                  <li>Opt-out of certain data processing activities</li>
                  <li>Receive a copy of your data in a portable format</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of
                  residence. We ensure appropriate safeguards are in place for such transfers in compliance with
                  applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                  personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes
                  by posting the new policy on our website and updating the effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-semibold mb-2">Nex Fitzap Private Limited</p>
                  <p className="mb-1">D Labs Incubator Association,</p>
                  <p className="mb-1">ISB Campus, Gachibowli,</p>
                  <p className="mb-1">Hyderabad - India, 500111</p>
                  <p className="mt-4">
                    Email: <a href="mailto:privacy@logy.ai" className="text-blue-500 hover:text-blue-600">privacy@logy.ai</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
