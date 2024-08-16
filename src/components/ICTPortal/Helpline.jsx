import Marquee from "react-fast-marquee";
import helpline1 from "/help-line/helpline1.png";
import helpline2 from "/help-line/helpline2.png";
import helpline3 from "/help-line/helpline3.png";
import helpline4 from "/help-line/helpline4.png";
import helpline5 from "/help-line/helpline5.png";
import helpline6 from "/help-line/helpline6.png";
import helpline7 from "/help-line/helpline7.png";
import helpline9 from "/help-line/helpline9.png";
import helpline10 from "/help-line/helpline10.png";
import helpline11 from "/help-line/helpline11.png";
import helpline12 from "/help-line/helpline12.png";
import helpline13 from "/help-line/helpline13.png";
import helpline14 from "/help-line/helpline14.png";
import helpline15 from "/help-line/helpline15.png";
import helpline16 from "/help-line/helpline16.png";
import helpline17 from "/help-line/helpline17.png";
import helpline18 from "/help-line/helpline18.png";
import helpline19 from "/help-line/helpline19.png";
import helpline20 from "/help-line/helpline20.png";

const helplinesData = [
  { img: helpline1 },
  { img: helpline2 },
  { img: helpline3 },
  { img: helpline4 },
  { img: helpline5 },
  { img: helpline6 },
  { img: helpline7 },
  { img: helpline9 },
  { img: helpline10 },
  { img: helpline11 },
  { img: helpline12 },
  { img: helpline13 },
  { img: helpline14 },
  { img: helpline15 },
  { img: helpline16 },
  { img: helpline17 },
  { img: helpline18 },
  { img: helpline19 },
  { img: helpline20 },
];

export default function Helpline() {
  return (
    <>
      <section className="bg-[#F1FBF5] py-4 lg:py-8  ">
        <div className={`flex flex-wrap gap-10 items-center justify-center`}>
          <Marquee speed={80}>
            {helplinesData.map((helpline, i) => (
              <div
                key={i}
                className="h-[30px] sm:h-[30px] md:h-[80px] mx-4 lg:mx-10"
              >
                <img
                  style={{ height: "100%", width: "auto" }}
                  src={helpline.img}
                  alt="helpline"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
}
