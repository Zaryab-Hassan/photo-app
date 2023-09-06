import cloudinary  from "cloudinary";
import ForceRefresh from "@/components/force-fresh";
import CloudinaryImages from "@/components/cloudinary-image";
import { SearchResult } from "../gallery/page";
import ImageGrid from "@/components/images-grid";
import { resourceUsage } from "process";

export default async function Favorites () {
    const results = await cloudinary.v2.search
  .expression('resource_type:image AND tags = favorite')
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(50)
  .execute() as {resources : SearchResult[]};

    return (
        <section className = "flex flex-col gap-5">
            <ForceRefresh/>
            <div className ="flex justify-between">
                <h1 className = "text-4xl font-bold">Favorites</h1>
            </div>
            <ImageGrid images = {results.resources}/>
        </section>
    )
}