import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const doctors = [
  { img: "/doctors/doc1.png", name: "Dr.Riju Mitchel", spec: "Orthopedic" },
  {
    img: "/doctors/doc2.png",
    name: "Dr.Mickel Sandwitch",
    spec: "Cardiologist",
  },
  { img: "/doctors/doc3.png", name: "Dr.Ilisha Thakn", spec: "Pediatrician" },
  { img: "/doctors/doc4.png", name: "Dr.M.C.Ghanak", spec: "Ophthalmologist" },
  {
    img: "/doctors/doc2.png",
    name: "Dr.Mickel Sandwitch",
    spec: "Cardiologist",
  },
  { img: "/doctors/doc3.png", name: "Dr.Ilisha Thakn", spec: "Pediatrician" },
];

export default function Doctors() {
  const sliderRef = useRef(null);

  // arrow scroll
  const scroll = (dir) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  // mouse wheel scroll
  const handleWheel = (e) => {
    if (!sliderRef.current) return;

    e.preventDefault();
    sliderRef.current.scrollLeft += e.deltaY;
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Our Doctors</h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-gray-200 rounded">
            <FaArrowLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-2 bg-gray-200 rounded">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        onWheel={handleWheel}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="min-w-[260px] flex-shrink-0 snap-start bg-white rounded-xl shadow-lg hover:scale-105 transition">
            <img
              src={doc.img}
              alt={doc.name}
              className="h-56 w-full object-cover rounded-t-xl"
            />

            <div className="p-4 text-center">
              <h3 className="font-semibold">{doc.name}</h3>
              <p className="text-sm text-gray-500">{doc.spec}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
