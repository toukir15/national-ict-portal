import logo from "../../../public/logo.png";
import technical from "../../../public/technical.png";
export default function Footer() {
  return (
    <div className="bg-[#333333]">
      <div className="container mx-auto text-white lg:px-0 px-6 py-6 lg:py-12">
        <div className="border-b border-white pb-10">
          {/* logo */}
          <div className="lg:flex justify-between items-center mt-6">
            <img src={logo} alt="" />
            <div className="lg:flex items-center">
              <p className="font-medium mt-4 lg:mt-0">
                Planing Implementation:{" "}
              </p>
              <div className="lg:flex items-center gap-6 lg:ml-6">
                <button className="underline hover:text-gray-300 block lg:inline-block lg:mt-0 mt-2">
                  Cabinated Division
                </button>
                <button className="underline hover:text-gray-300 block lg:inline-block lg:mt-0 mt-2 ">
                  a2i
                </button>
                <button className="underline hover:text-gray-300 block lg:inline-block lg:mt-0 mt-2 ">
                  BCC
                </button>
                <button className="underline hover:text-gray-300 block lg:inline-block lg:mt-0 mt-2 ">
                  DOICT
                </button>
                <button className="underline hover:text-gray-300 block lg:inline-block lg:mt-0 mt-2 ">
                  Basis
                </button>
              </div>
            </div>
          </div>

          <div className="lg:flex justify-between items-center mt-6 lg:mt-4">
            <div>
              <div className="lg:flex gap-6 ">
                <button className="hover:text-gray-300 block lg:inline-block lg:mt-0 mt-2 ">
                  Sitemap
                </button>
                <button className="hover:text-gray-300 block lg:inline-block lg:mt-0 mt-2 ">
                  Secrecy Policy
                </button>
                <button className="hover:text-gray-300 block lg:inline-block lg:mt-0 mt-2 ">
                  Contact
                </button>
                <button className="hover:text-gray-300 block lg:inline-block lg:mt-0 mt-2 ">
                  FAQ
                </button>
                <button className="hover:text-gray-300 block lg:inline-block lg:mt-0 mt-2 ">
                  Terms of Use
                </button>
              </div>
            </div>
            <div className="lg:flex mt-4 lg:mt-0 items-end gap-8">
              <p className="font-medium">Technical Support: </p>
              <img src={technical} alt="" />
            </div>
          </div>
        </div>
        <p className="text-end mt-6 text-sm text-gray-200">
          © 2024 Government of Banglades. Last updated on 16 Aug 2024
        </p>
      </div>
    </div>
  );
}
