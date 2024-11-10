import Neurologist from "../assets/Neurologist.svg";
import Gynecologist from "../assets/Gynecologist.svg";
import Pediatricians from "../assets/Pediatricians.svg";
import Gastroenterologist from "../assets/Gastroenterologist.svg";
import Medcins from "./Medcin";

const SpecialtyCard = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <img src={icon} alt={label} className="w-20 h-20 mb-2 rounded-full" />
      <span className="text-center font-medium">{label}</span>
    </div>
  );
};

const Medcin = () => {
  const specialties = [
    { icon: Gynecologist, label: "Gynecologist" },
    { icon: Pediatricians, label: "Pediatrician" },
    { icon: Neurologist, label: "Neurologist" },
    { icon: Gastroenterologist, label: "Gastroenterologist" },
  ];

  return (
    <div className="flex w-4/5 mx-auto mt-6">
      {/* Left section for specialties */}
      <div className="flex flex-col items-center w-1/3 border-r border-gray-300 pr-8 mr-8">
        <h1 className="text-2xl font-bold mb-8">Specialities</h1>
        {specialties.map((specialty, index) => (
          <SpecialtyCard key={index} icon={specialty.icon} label={specialty.label} />
        ))}
      </div>

      {/* Right section for doctor photos or additional content */}
      <Medcins />
    </div>
  );
};

export default Medcin;
