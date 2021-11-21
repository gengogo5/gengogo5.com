import React from "react";
import Image from "next/image";

// 記事内のimgタグはImageコンポーネントで扱う
// 高さがh-96固定になるのは課題だが、基本横長の画像だけ載せるようにすれば当面問題ない
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