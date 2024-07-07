import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";
function PreviousEvents() {
  return (
    <>
      <Header />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-40">

        <Carousel
          images={["/assets/events24/eviv.jpg"]}
          title="Industry Visit to Elecnovo"
          description="The primary objective of the visit was to expose students to the cutting-edge technologies that power electric vehicles. Students gained a comprehensive view of EV technology and its practical applications."
          date="5th June, 2024"
        />

        <Carousel
          images={[
            "/assets/events24/dw1.jpg",
            "/assets/events24/dw2.jpg",
            "/assets/events24/dw3.jpg",
            "/assets/events24/dw4.jpg",
            "/assets/events24/dw5.jpg",
          ]}
          title="The Design Workshop "
          description="Participants gained proficiency in Adobe Photoshop and Illustrator, allowing them to create graphic designs, and design user interfaces for websites and applications. Additionally, they learnt advanced techniques in graphic design and video editing using Adobe After Effects, enhancing their ability to create visually appealing content across different platforms."
          date="31st May – 2nd June, 2024"
        />

        <Carousel
          images={["/assets/events24/kit.jpg"]}
          title="Dream Kit Robo War Camp"
          description="The camp took kids on an exciting journey to explore various emerging technologies. They learned to build robots, delving into the potential of robotics and automation. The children also explored the concept of self-driving robots and future gadgets, aligning with the camp's theme."
          date="10th and 11th  May, 2024"
        />

        <Carousel
          images={["/assets/events24/ipr1.jpg", "/assets/events24/ipr2.jpg"]}
          title="IPR in Academia: Strategies for success"
          description="The workshop helped participants gain a comprehensive understanding of various IPR mechanisms and develop tailored strategies to safeguard their intellectual assets, fostering a culture of innovation and knowledge dissemination."
          date="9th May, 2024"
        />
      </div>
    </>
  );
}

export default PreviousEvents;
