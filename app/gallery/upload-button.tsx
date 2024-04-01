'use client'

import { Button } from "@/components/ui/button";
import { ArrowUpFromLine } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

type uploadResult = {
    info: {
        public_id: string
    };
    event: 'success'
}

const UploadButton = () => {
    const router = useRouter()
    return (
        <Button asChild>
            <CldUploadButton
                onUpload={(result: uploadResult) => {
                    //   setImageId(result.info.public_id)
                    setTimeout(() => {
                        router.refresh();
                    }, 1000)
                }}

                uploadPreset="ghxtzimu">
                <div className="flex gap-2 justify-center items-center">
                    <ArrowUpFromLine />
                    Upload
                </div>
            </CldUploadButton>

        </Button>
    );
}

export default UploadButton;