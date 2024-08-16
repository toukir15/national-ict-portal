import honorableAdviser from "/Honorable-Adviser.jpg";
import honorableSecretary from "/Honorable-Secretary.jpg";
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
    <div className="block lg:hidden">
      <div className="grid md:grid-cols-2 gap-8 px-8 my-12">
        {officialsData.map((official) => {
          return (
            <div
              key={official.name}
              className="w-fit border p-4 rounded bg-white"
            >
              <div>
                <img className={`w-full py-8`} src={official.img} alt="" />
              </div>
              <p className="text-center text-lg mt-1 font-medium">
                {official.name}
              </p>
              <p className="text-center text-gray-700">
                {official.degignation}
              </p>
              <button className="bg-green-500 hover:bg-green-600 transition duration-200 w-full py-1 rounded mt-2 text-white font-medium">
                More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
