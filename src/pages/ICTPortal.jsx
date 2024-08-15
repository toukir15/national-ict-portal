import Contact from "../components/ICTPortal/Contact";
import Navbar from "../components/ICTPortal/Navbar";
import Banner from "../components/ICTPortal/Banner";
import GovementServices from "../components/ICTPortal/GovementServices";
import Helpline from "../components/ICTPortal/Helpline";
import ImportantLinks from "../components/ICTPortal/importantLinks";

export default function ICTPortal() {
  return (
    <div>
      {/* top header  */}
      <div className="bg-[#F0F0F0] text-sm py-2">
        <p className="container mx-auto px-6">Bangladesh National Portal</p>
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
      <ImportantLinks />
    </div>
  );
}
