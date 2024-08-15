import logo from "../../../public/logo.png";
import technical from "../../../public/technical.png";
export default function Footer() {
  return (
    <div className="bg-[#333333]">
      <div className="container mx-auto text-white py-12">
        <div className="border-b border-white pb-10">
          {/* logo */}
          <div className="flex justify-between items-center mt-6">
            <img src={logo} alt="" />
            <div className="flex items-center">
              <p className="font-medium">Planing Implementation: </p>
              <div className="flex items-center gap-6 ml-6">
                <button className="underline hover:text-gray-300">
                  Cabinated Division
                </button>
                <button className="underline hover:text-gray-300">a2i</button>
                <button className="underline hover:text-gray-300">BCC</button>
                <button className="underline hover:text-gray-300">DOICT</button>
                <button className="underline hover:text-gray-300">Basis</button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <div className="flex gap-6 ">
                <button>Sitemap</button>
                <button>Secrecy Policy</button>
                <button>Contact</button>
                <button>FAQ</button>
                <button>Terms of Use</button>
              </div>
            </div>
            <div className="flex items-end gap-8">
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
