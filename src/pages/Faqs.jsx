import Accordion from "../components/Accordian";

const Faq = () => {
  return (
    <>
      <h1 className="font-bold text-2xl my-[2vw] mx-[5vw]">FAQ&apos;S</h1>
      <div className="w-[98vw] flex flex-col  items-center">
        <div className="p-4 bg-gray-200 rounded-lg w-[90vw]">
          <Accordion
            title="Do you prefer Android or iOS"
            answer="I like to use iOS products"
          />
          <Accordion
            title="Do you prefer writing CSS or Tailwind?"
            answer="I like to use Tailwind"
          />
          <Accordion
            title="Firebase or Supabase?"
            answer="I am using Supabase!"
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
