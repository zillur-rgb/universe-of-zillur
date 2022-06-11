import Slider from "react-slick";

export default function Carousel({ image }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {image.map((img, idx) => (
        <div>
          <img key={idx} src={img} alt="img" />
        </div>
      ))}
    </Slider>
  );
}
