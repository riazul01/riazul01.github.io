import { useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useResizeObserver from "hooks/useResizeObserver";
import ReactSwiper from "components/base/ReactSwiper";
import Iconify from "components/base/Iconify";

interface HasId {
  id: string | number;
}

interface ProjectSliderProps<T> {
  title: string;
  SliderCard: React.ComponentType<{ data: T }>;
  data: T[];
}

const ProjectSlider = <T extends HasId>({
  title,
  SliderCard,
  data,
}: ProjectSliderProps<T>) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const containerSize = useResizeObserver(containerRef);
  const [isSlideBegin, setIsSlideBegin] = useState(true);
  const [isSlideEnd, setIsSlideEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Box ref={containerRef} sx={{ mb: 8, width: 1 }}>
      <Stack
        sx={{ mb: 3, alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography variant="h4" sx={{ letterSpacing: "-0.04em" }}>
          {title}
        </Typography>

        <Stack
          spacing={{ xs: 1, sm: 1.5 }}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <IconButton
            onClick={handlePrev}
            sx={(theme) => ({
              bgcolor: isSlideBegin
                ? `${theme.palette.background.paper} !important`
                : `${theme.palette.primary.main} !important`,
              border: 1,
              borderColor: isSlideBegin ? "divider" : "transparent",
            })}
          >
            <Iconify
              icon="fluent:arrow-left-32-filled"
              sx={{
                color: isSlideBegin ? "text.primary" : "white",
                fontSize: "h5.fontSize",
              }}
            />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={(theme) => ({
              bgcolor: isSlideEnd
                ? `${theme.palette.background.paper} !important`
                : `${theme.palette.primary.main} !important`,
              border: 1,
              borderColor: isSlideEnd ? "divider" : "transparent",
            })}
          >
            <Iconify
              icon="fluent:arrow-right-32-filled"
              sx={{
                color: isSlideEnd ? "text.primary" : "white",
                fontSize: "h5.fontSize",
              }}
            />
          </IconButton>
        </Stack>
      </Stack>

      <ReactSwiper
        slidesPerView={containerSize > 1536 ? 3 : containerSize > 900 ? 2 : 1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          setIsSlideBegin(swiper.isBeginning);
          setIsSlideEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsSlideBegin(swiper.isBeginning);
          setIsSlideEnd(swiper.isEnd);
        }}
        spaceBetween={16}
        sx={{
          "& .swiper-wrapper": {
            p: 0.25,
            "& .swiper-slide > div": { width: "99%" },
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderCard data={item} />
          </SwiperSlide>
        ))}
      </ReactSwiper>
    </Box>
  );
};

export default ProjectSlider;
