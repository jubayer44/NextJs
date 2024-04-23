import Image from "next/image";
// import nextImage from "../../assets/nextimage.jpg"; // Relative image path
import nextImage from "@/assets/nextimage.jpg"; // Absolute image path

export const metadata = {
  title: "Image Gallery",
  description: "This is the image gallery page",
};

const ImageGalleryPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-10">Image Gallery</h1>
      <Image
        src={nextImage}
        alt="Picture of the author"
        fill
        // width={500}
        // height={500}
      />
    </div>
  );
};

export default ImageGalleryPage;
