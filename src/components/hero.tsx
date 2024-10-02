"use client";

import { Button, Typography } from "@material-tailwind/react";
import bg from "../assets/image/blogs/hero.jpg";

function Hero() {
  return (
    <header className="mt-12 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div
          className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2"
          /*   style={{
            backgroundImage: `url('${bg.src}')`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }} */
        >
          <div className="row-start-2 lg:row-auto">
            <Typography
              variant="h1"
              color="red"
              className="text-3xl !leading-snug"
              placeholder={undefined}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Unbelievable low prices
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"
              placeholder={undefined}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              GLASSES FOR EVERYONE
            </Typography>

            <Button size="lg" color="gray" placeholder={undefined}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              see offers
            </Button>
          </div>
        </div>
        <div className="mt-40 md:grid gap-6 lg:mt-0 h-full w-full hidden">
          <div
            className=" grid-cols-4 gap-6  "
            style={{
              backgroundImage: `url('${bg}')`,
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
