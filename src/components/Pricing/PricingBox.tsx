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
      <div className="dark:bg-gray-800 dark:shadow-xl relative z-10 rounded-md bg-white px-8 py-10 shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="dark:text-white text-[32px] font-bold text-black">
            $<span className="amount">{price}</span>
            <span className="dark:text-gray-300 text-lg font-medium text-gray-600">
              {duration}
            </span>
          </h3>
          <h4 className="dark:text-white text-xl font-bold text-gray-900">
            {packageName}
          </h4>
        </div>
        <p className="dark:text-gray-300 mb-7 text-base text-gray-600">
          {subtitle}
        </p>
        <div className="dark:border-gray-700 mb-8 border-b border-gray-300 pb-8">
          <button
            className={`flex w-full items-center justify-center rounded-md p-3 text-base font-semibold text-white transition-all duration-300 ${
              disabled
                ? "cursor-not-allowed bg-gray-400"
                : "bg-blue-600 shadow-md hover:bg-blue-700"
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
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="dark:bg-gray-800 z-[1001] w-[90%] max-w-md scale-100 transform rounded-lg bg-white p-6 opacity-100 shadow-2xl transition-all">
            <h2 className="dark:text-white mb-4 text-xl font-semibold text-gray-900">
              Accept Terms & Conditions
            </h2>
            <p className="dark:text-gray-300 mb-6 text-gray-600">
              You must agree the terms before proceeding. This is not terms of
              usage, these are terms for purchasing & downloading Open-listings
            </p>
            <ul style={{ fontSize: "smaller" }}>
              <li>
                1) Only some geolocations are present out of the box; The United
                States, France, Italy and Algeria are supported, Please opt for
                monthly payments if you want another geolocation support so that
                We take time to add it.
              </li>
              <li>
                2) We provide installation support, but not deployment for lite
                and pro plans. Expect a delay up to a week to receive
                installation support.
              </li>
              <li>
                3) If you opt for Ultimate plan, We can discuss that you would
                be the only owner for a geolocation if it is not yet sold.
              </li>
              <li>
                4) You will need to hire a developer or some kind of support (We
                propose this support separately) for any deployment task like:
                Providing credentials and API keys by Setting up an email
                account on SendGrid, Setup GCP account and S3 bucket.
              </li>
              <li>
                5) You will probably need to setup a Cookie Banner Acceptance
                component depending on your legal needs.
              </li>
              <li>
                6) You will need to edit other static files which are linked to
                in the footer. These HTML files are easily edited and are
                already prepared for you inside `templates/pages/statics` and in
                `/home/ubu/open-listings/public/pdf` paths.
              </li>
              <li>
                7) In payment page, You will need to enter a Bitbucket account
                username to later have access to a private repository. I by
                chance you entered a wrong one, no worries We later can exchange
                by email.
              </li>
            </ul>
            <br />
            <div className="flex justify-between">
              <button
                className="rounded-md bg-green-600 px-4 py-2 font-medium text-white shadow-md transition-all hover:bg-green-700"
                onClick={handleConfirm}
              >
                Accept & Proceed
              </button>
              <button
                className="rounded-md bg-gray-500 px-4 py-2 font-medium text-white shadow-md transition-all hover:bg-gray-600"
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
