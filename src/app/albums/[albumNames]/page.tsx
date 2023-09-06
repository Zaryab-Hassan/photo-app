import cloudinary  from "cloudinary";
import CloudinaryImages from "@/components/cloudinary-image";
import { SearchResult } from "@/app/gallery/page";

export default async function AlbumPages ({params : {albumName}}: {params:{albumName : string}}) {
    const results = await cloudinary.v2.search
  .expression(`resource_type:image AND folder = ${albumName}`)
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(3)
  .execute() as {resources : SearchResult[]};

    return (
        <section className = "flex flex-col gap-5">
            <div className ="flex justify-between">
                <h1 className = "text-4xl font-bold">Album {albumName}</h1>
            </div>
            <div className = "grid grid-cols-4">
                {results.resources.map((result)=>(
                        <CloudinaryImages
                        key = {result.public_id}
                        src = {result.public_id}
                        imageData = {result}
                        width="300"
                        height="200"
                        alt="Description of my image"
                        />                
                ))}
            </div>
        </section>
    )
}