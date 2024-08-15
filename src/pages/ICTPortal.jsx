import Contact from "../components/ICTPortal/Contact";
import Navbar from "../components/ICTPortal/Navbar";
import Banner from "../components/ICTPortal/Banner";
import GovementServices from "../components/ICTPortal/GovementServices";
import Helpline from "../components/ICTPortal/Helpline";
import Footer from "../components/ICTPortal/Footer";
import ImportantVideo from "../components/ICTPortal/ImportantVideo";

export default function ICTPortal() {
  return (
    <div>
      {/* top header  */}
      <div className="bg-[#F0F0F0] text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between">
          <p>Bangladesh National Portal</p>
          <button className="underline text-green-500 font-medium hover:text-green-600">
            Office Attachment Application Form
          </button>
        </div>
      </div>

      {/* second header  */}
      <Contact />

      {/* navbar  */}
      <Navbar />

      {/* body  */}
      <Banner />

      {/* helpLine  */}
      <Helpline />

      {/* section 1  */}
      <GovementServices />

      {/* important link section  */}
      {/* <ImportantLinks/> */}

      <ImportantVideo />

      {/* footer  */}
      <Footer />
    </div>
  );
}
