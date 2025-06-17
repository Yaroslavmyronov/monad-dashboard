// Import Swiper React components
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CautionTape from '../CautionTape';

function InsightCard() {
  const data = [
    {
      title: 'aesthetic usability effect',
      text: ' users often percetiu aethetically pleasing design as design thats more usable',
    },
    {
      title: 'aesthetic usability effect',
      text: ' users often percetiu aethetically pleasing design as design thats more usable',
    },
    {
      title: 'aesthetic usability effect',
      text: ' users often percetiu aethetically pleasing design as design thats more usable',
    },
    {
      title: 'aesthetic usability effect',
      text: ' users often percetiu aethetically pleasing design as design thats more usable',
    },
  ];
  const text = ' in development • in development • in development • ';

  return (
    <div className="bg-[#8884d854] p-4 min-h-[479px] relative select-none">
      <CautionTape text={text}></CautionTape>
      <Swiper
        pagination
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper h-full !pb-[50px]"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="flex! flex-col">
            <div className="mt-auto text-[42px] tracking-[-6px] leading-none mb-3">{item.title}</div>
            <div className="text-[12px]">{item.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default InsightCard;
