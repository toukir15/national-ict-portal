import honorableAdviser from "/Honorable-Adviser.jpg";
import honorableSecretary from "/Honorable-Secretary.jpg";
import ict from "/ict.png";
export default function Officials() {
  const officialsData = [
    {
      name: "Md. Nahid Islam",
      degignation: "Honorable Adviser",
      img: honorableAdviser,
      imageWidth: 200,
    },
    {
      name: "Md. Shamsul Arefin",
      degignation: "Secretary",
      img: honorableSecretary,
      imageWidth: 208,
    },
  ];
  return (
    <section className="bg-[#EBF8DE]">
      <div className="container lg:flex md:gap-6 lg:gap-10 items-center mx-auto py-20 lg:py-36">
        <div className="w-[40%] hidden lg:block">
          <img src={ict} alt="ict" />
        </div>
        <div className=" lg:w-[60%] bg-white  rounded-2xl mx-4 md:mx-12 lg:mx-0">
          <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-0 md:px-20 px-4 py-12">
            {officialsData.map((official) => {
              return (
                <div
                  key={official.name}
                  className="w-fit border p-4 rounded-lg shadow-lg flex flex-col justify-between bg-white "
                >
                  <div>
                    <img
                      className={`w-full lg:w-[300px]`}
                      src={official.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center text-lg mt-1 font-medium">
                      {official.name}
                    </p>
                    <p className="text-center text-gray-700">
                      {official.degignation}
                    </p>
                    <button className="bg-green-500 hover:bg-green-600 transition duration-200 w-full py-2 rounded mt-2 text-white font-medium">
                      More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
