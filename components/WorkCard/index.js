import Image from "next/image";
import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "400px" }}
        onClick={onClick}
      >
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300 cursor-pointer"
          src={img}
        ></Image>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
