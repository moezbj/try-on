import CategoryCard from "../components/category-card";
import Man from "../assets/image/blogs/blog-3.jpg";
import women from "../assets/image/blogs/blog-13.jpg";
import kids from "../assets/image/blogs/blog-10.webp";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

const CATEGORIES = [
  {
    img: Man,
    title: "Man",
    desc: "",
  },
  {
    img: women,
    title: "Women",
    desc: "",
  },
  {
    img: kids,
    title: "kids",
    desc: "",
  },
];

export function TopBookCategories() {
  return (
    <section className="container mx-auto px-8 pb-20 mt-20 lg:pt-0">
      <div className="mb-20 grid place-items-center text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="my-3"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Top Glasses Categories
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody
            className="relative w-full"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Typography
              variant="h4"
              className="mt-9"
              color="white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Best selling Glasses
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Explore our extensive collection of glasses, man, women, and more.
            </Typography>
            <Button
              size="sm"
              color="white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Read More
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBookCategories;
