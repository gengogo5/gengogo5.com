import React from "react";
import Image from "next/image";

const CustomImage = (img) => {
  return(
    <div className="w-full relative h-96 tablet:h-80">
      <Image
        src={img.src}
        layout={"fill"}
        quality={75}
        objectFit={"contain"}
        loading={"lazy"}
      />
    </div>
  )
}

export default CustomImage;