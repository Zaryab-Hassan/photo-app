import { SearchResult } from "@/app/gallery/page"; 
import CloudinaryImages from "./cloudinary-image";

export default function ImageGrid ({images} : {images : SearchResult[]})
{

    const MAX_COLUMNS = 4;
    function getColumn(colindex : number){
        return images.filter(
            (resource,idx) => idx % MAX_COLUMNS === colindex
        );
    }
    return (
        <div className = "grid grid-cols-4 gap-4">
            {[getColumn(0),getColumn(1),getColumn(2),getColumn(3)].map((column , idx)=>(
                <div className = "flex flex-col gap-4" key = {idx}>
                    {column.map((result)=>
                    <CloudinaryImages
                    key = {result.public_id}
                    src = {result.public_id}
                    imageData = {result}
                    width="300"
                    height="200"
                    alt="Description of my image"
                    />
                    )}
                </div>
            ))}
        </div>
    )
}