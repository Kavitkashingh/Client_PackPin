
import Slider from "react-slick";
import img from "../assets/banner 9.png"
import imga from "../assets/3.jpg"
import imgs from "../assets/banner 8.png"

function Slidex() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
  };


  return (
    <div className="xs:w-full w-[85%] justify-center mx-auto overflow-hidden">
      <Slider {...settings}>
        {[img, imga, imgs].map((image, index) => (
          <div key={index} className='' >
            <img src={image} alt="Slide" className='overflow-hidden rounded-xl  w-[98%] object-cover' />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slidex;
