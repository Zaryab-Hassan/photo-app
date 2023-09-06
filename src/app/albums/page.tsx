import React from 'react';
import cloudinary from "cloudinary";
import { AlbumCards } from './[albumNames]/albums-card';

export type Folders = {name : string , path : string};

export default async function AlbumsPage() {
  const {folders} = (await cloudinary.v2.api.root_folders()) as {
    folders : Folders[];
  }
  return (
    <section className = "flex flex-col gap-5">
            <div className ="flex justify-between">
                <h1 className = "text-4xl font-bold">Albums</h1>
            </div>
            <div className = "grid grid-cols-3">
              {folders.map((folder) => (
                <AlbumCards key = {folder.path} folder = {folder} />
              ))}
            </div>
        </section>
  )
}