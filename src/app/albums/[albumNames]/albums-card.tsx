import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Folders}  from "../page"
import Link from "next/link"

export function AlbumCards({folder}:{folder : Folders}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All of your {folder.name}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button><Link href = {`/albums/${folder.name}`}>View Albums</Link></Button>
      </CardFooter>
    </Card>
  )
}
