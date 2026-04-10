"use client"

import * as React from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Images, Maximize2 } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  title: string
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [open, setOpen] = React.useState(false)

  if (!images || images.length === 0) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="flex-1">
          <Images className="h-4 w-4 mr-1" />
          Gallery
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-black/95 border-none">
        <DialogHeader className="sr-only">
          <DialogTitle>{title} Gallery</DialogTitle>
          <DialogDescription>
            Image gallery for {title}
          </DialogDescription>
        </DialogHeader>
        <div className="relative w-full aspect-video flex items-center justify-center">
          <Carousel className="w-full max-w-3xl">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="flex items-center justify-center">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/70 border-none text-white" />
                <CarouselNext className="right-2 bg-black/50 hover:bg-black/70 border-none text-white" />
              </>
            )}
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  )
}
