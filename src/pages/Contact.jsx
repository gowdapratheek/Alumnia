import Header from "../components/Header";

const ContactPage = () => {
  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-md lg:mt-[13vh] mt-[10vh]">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Contact Us</h2>

        {/* General Inquiries */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            General Inquiries
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Email:{" "}
              <a href="mailto:alumni_email@30.com" className="text-blue-600">
                alumni_email@30.com
              </a>
            </li>
            <li>Phone: </li>
          </ul>
        </div>

        {/* Alumni Relations */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            Alumni Relations
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Email:{" "}
              <a href="mailtoalumni_email@30.com" className="text-blue-600">
                alumni_email@30.com
              </a>
            </li>
          </ul>
        </div>

        {/* Student Support */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            Student Support
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Email:{" "}
              <a
                href="mailto:alumni_email@30.com
              "
                className="text-blue-600"
              >
                alumni_email@30.com
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-green-600 mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:underline">
              Facebook
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Twitter
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Instagram
            </a>
          </div>
        </div>

        {/* Office Hours */}
        <div>
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            Office Hours
          </h3>
          <p className="text-gray-600">
            Monday to Friday: 9:00 AM - 5:00 PM
            <br />
            Saturday and Sunday: Closed
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
