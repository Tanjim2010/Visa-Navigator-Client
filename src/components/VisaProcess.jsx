
import { FaPassport, FaFileAlt, FaCheckCircle, FaPlane } from "react-icons/fa";

const VisaProcess = () => {
  const steps = [
    {
      title: "Step 1: Submit Application",
      description: "Fill out your visa application form online with accurate details.",
      icon: <FaFileAlt className="text-4xl text-primary-color" />,
    },
    {
      title: "Step 2: Document Verification",
      description: "Our team will review and verify all your documents.",
      icon: <FaPassport className="text-4xl text-primary-color" />,
    },
    {
      title: "Step 3: Approval Notification",
      description: "Receive updates on your visa approval status quickly.",
      icon: <FaCheckCircle className="text-4xl text-primary-color" />,
    },
    {
      title: "Step 4: Ready to Travel",
      description: "Get your visa and enjoy your travel to your dream destination!",
      icon: <FaPlane className="text-4xl text-primary-color" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Visa Process Made Easy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaProcess;
