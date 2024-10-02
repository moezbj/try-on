import { Card, CardBody, Typography } from "@material-tailwind/react";

interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
}

function CategoryCard({ img, title }: CategoryCardProps) {
  return (
    <Card
      className="relative grid min-h-[12rem] w-full overflow-hidden"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <img
        width={768}
        height={768}
        src={img}
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 h-full w-full bg-black/80">
        <CardBody
          className="relative flex justify-center items-center w-full h-full"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            variant="h5"
            className="mb-1"
            color="white"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {title}
          </Typography>
        </CardBody>
      </div>
    </Card>
  );
}
export default CategoryCard;
