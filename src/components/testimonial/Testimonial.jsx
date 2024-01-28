import TestimonialSlider from "./TestimonialSlider.jsx";

export default function Testimonial() {
  return (
    <section name="Testimonial" className="flex bg-background">
      <div className="margin-rules flex my-14">
        <div className="flex flex-col w-full">
          <div className="text-center m-auto flex flex-col gap-5">
            <h1 className="font-bold text-4xl text-text">
              Trusted by Thousands of Happy Customer
            </h1>
            <p className="text-gray-700">
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </p>
          </div>

          <div className="flex flex-col mt-10 h-full">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
