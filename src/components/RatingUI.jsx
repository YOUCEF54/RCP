import { Rating } from "@material-tailwind/react";
import { BsStar,BsStarFill, BsTriangle,BsTriangleFill } from "react-icons/bs";
import { TbStar,TbStarFilled } from "react-icons/tb";


 
export function RatingUI({value}) {
  return (
    <Rating
    className=""
      value={value}
      ratedColor="black"
      ratedIcon={<TbStarFilled className=" size-5" />}
      unratedIcon={<TbStar className=" size-5" />}
    />
  );
}