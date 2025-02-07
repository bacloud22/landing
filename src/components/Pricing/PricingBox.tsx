import { useState, useEffect } from "react";

const PricingBox = (props: {
  price: number;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;
  const action = packageName === "Ultimate" ? "Schedule a meeting" : "Buy now";
  const disabled = packageName === "Ultimate";

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  const handleConfirm = () => {
    setIsModalOpen(false);
    if (!disabled) {
      window.location.href = "/checkout"; // Replace with actual checkout URL
    }
  };

  return (
    <div className="w-full">
      <div className="relative z-10 rounded-md bg-white px-8 py-10 shadow-lg dark:bg-gray-800 dark:shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-[32px] font-bold text-black dark:text-white">
            $<span className="amount">{price}</span>
            <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
              {duration}
            </span>
          </h3>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="mb-7 text-base text-gray-600 dark:text-gray-300">{subtitle}</p>
        <div className="mb-8 border-b border-gray-300 dark:border-gray-700 pb-8">
          <button
            className={`flex w-full items-center justify-center rounded-md p-3 text-base font-semibold text-white transition-all duration-300 ${
              disabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 shadow-md"
            }`}
            disabled={disabled}
            onClick={() => setIsModalOpen(true)}
          >
            {action}
          </button>
        </div>
        <div>{children}</div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[1000]">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl w-[90%] max-w-md transform transition-all scale-100 opacity-100 z-[1001]">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Accept Terms & Conditions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You must agree to the terms before proceeding.
            </p>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-green-600 text-white font-medium rounded-md shadow-md hover:bg-green-700 transition-all"
                onClick={handleConfirm}
              >
                Accept & Proceed
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white font-medium rounded-md shadow-md hover:bg-gray-600 transition-all"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingBox;
