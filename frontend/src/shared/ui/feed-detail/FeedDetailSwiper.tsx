import { FeedDetailSwiperWrapper, SwiperImageBox, useSwiperStore } from "@/shared";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const FeedDetailSwiper = ({ media }: { media: string[] }) => {
    const { hasMultipleSlides, setHasMultipleSlides } = useSwiperStore();

    // 이미지 개수 체크
    const isMultiple = media.length > 1;

    if (hasMultipleSlides !== isMultiple) {
        setHasMultipleSlides(isMultiple);
    }

    return (
            <FeedDetailSwiperWrapper>
                <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={16}
                        slidesPerView={1}
                        breakpoints={{
                            780: { slidesPerView: Math.min(2, media.length) },
                            1200: { slidesPerView: Math.min(3, media.length) },
                            1920: { slidesPerView: Math.min(4, media.length) },
                            2500: { slidesPerView: Math.min(5, media.length) },
                        }}
                        navigation={hasMultipleSlides}
                        pagination={hasMultipleSlides ? { clickable: true } : false}
                >
                    {media.map((url, i) => (
                            <SwiperSlide key={i}>
                                <SwiperImageBox>
                                    <img src={url} alt={`slide-${i}`}/>
                                </SwiperImageBox>
                            </SwiperSlide>
                    ))}
                </Swiper>
            </FeedDetailSwiperWrapper>
    );
};