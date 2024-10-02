import {
  Typography,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface BookCardProps {
  img: string;
  title: string;
  category: string;
}

export function BookCard({ img, category, title }: BookCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        color="gray"
        floated={false}
        className="mx-0 mt-0 mb-6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link to="/detail">
          <img
            width={768}
            height={768}
            src={img}
            alt={title}
            className="h-full w-full scale-[1.1] object-cover object-center"
          />
        </Link>
      </CardHeader>
      <CardBody
        className="p-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          color="blue"
          className="mb-2 text-xs !font-semibold"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {category}
        </Typography>
        <a href="#">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-3 font-bold normal-case xl:w-64"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {title}
          </Typography>
        </a>
      </CardBody>
    </Card>
  );
}
export default BookCard;
