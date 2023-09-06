import GalleryButton from "@/components/gallery-button";
import cloudinary from "cloudinary";
// import ForceRefresh from "@/components/forceRefresh";
import CloudinaryImages from "@/components/cloudinary-image";
import ImageGrid from "@/components/images-grid";

export type SearchResult = {
      public_id : string;
      tags : any[];
  }
export default async function Gallery () {
    const results = await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(10)
  .execute() as {resources : SearchResult[]};

    return (
        <section className = "flex flex-col gap-5">
            <div className ="flex justify-between">
                <h1 className = "text-4xl font-bold">Gallery</h1>
                <GalleryButton/>
            </div>
            <ImageGrid images = {results.resources} />
        </section>
    )
}