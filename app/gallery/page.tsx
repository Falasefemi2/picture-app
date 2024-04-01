"use client"
import { Button } from "@/components/ui/button";
import { ArrowUpFromLine } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";

type uploadResult = {
    info: {
        public_id: string
    };
    event: 'success'
}

const GalleryPage = () => {
    return (
        <section>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <Button asChild>
                    <div className="flex gap-2">
                        <ArrowUpFromLine />
                        <CldUploadButton
                            onUpload={(result: uploadResult) => {
                                //   setImageId(result.info.public_id)
                            }}

                            uploadPreset="ghxtzimu" />
                    </div>
                </Button>
            </div>
        </section>
    );
}

export default GalleryPage;