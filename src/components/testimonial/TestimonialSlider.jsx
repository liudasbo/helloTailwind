import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export default class TestimonialSlider extends Component {
  testimonialData = [
    {
      name: "Alice Johnson",
      city: "Kaunas",
      country: "Lithuania",
      stars: 2,
      testimonial:
        "Fantastic experience with WestVPN! The service surpassed my expectations, providing seamless and secure browsing. Highly recommended for anyone seeking top-notch VPN protection.",
    },
    {
      name: "Emily Davis",
      city: "Riga",
      country: "Latvia",
      stars: 5,
      testimonial:
        "Incredible service! WestVPN not only met but exceeded my expectations. Fast, reliable, and secure – the perfect VPN solution for online enthusiasts.",
    },
    {
      name: "Joe Steve",
      city: "Vilnius",
      country: "Lithuania",
      stars: 3,
      testimonial:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. WestVPN always the best",
    },
    {
      name: "Joe Bob",
      city: "Vilnius",
      country: "Lithuania",
      stars: 5,
      testimonial:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. WestVPN always the best",
    },
    {
      name: "John Smith",
      city: "Tallinn",
      country: "Estonia",
      stars: 4,
      testimonial:
        "Great VPN solution! Easy to use and incredibly effective. WestVPN is my go-to choice for online privacy.",
    },
    {
      name: "Sophie White",
      city: "Helsinki",
      country: "Finland",
      stars: 5,
      testimonial:
        "Outstanding service! WestVPN ensures a seamless and secure online experience. I couldn't be happier with it.",
    },
    {
      name: "David Brown",
      city: "Stockholm",
      country: "Sweden",
      stars: 4,
      testimonial:
        "WestVPN is a game-changer! The user-friendly interface and top-notch performance make it the best VPN out there.",
    },
    {
      name: "Eva Miller",
      city: "Oslo",
      country: "Norway",
      stars: 5,
      testimonial:
        "I've tried several VPNs, but WestVPN stands out. Excellent speed, reliable connections, and great customer support.",
    },
    {
      name: "Mark Taylor",
      city: "Copenhagen",
      country: "Denmark",
      stars: 4,
      testimonial:
        "WestVPN has proven to be a reliable companion for secure browsing. The features and performance are commendable.",
    },
  ];

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Slider {...settings}>
          {this.testimonialData.map((item) => (
            <div key={item} className="px-2 flex h-full pb-8">
              <div className="p-6 bg-white rounded-xl border border-secondary h-full">
                <div className="flex items-center mb-5">
                  <FaUser className="bg-secondary rounded-full size-14 p-3 text-primary border border-gray-300 mr-4" />
                  <div>
                    <p className="text-text font-medium">{item.name}</p>
                    <p className="text-gray-500 text-sm">
                      {item.country}, {item.city}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mb-5">
                  {Array.from({ length: item.stars }, (_, index) => (
                    <FaStar key={index + 1} className="text-yellow-500" />
                  ))}
                </div>
                {/* eslint-disable react/no-unescaped-entities */}
                <p className="text-text">"{item.testimonial}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
