import { FC } from "react";
import GalleryTab from "@/components/galleries/gallery-tab";

interface GallerySelectorProps {
    galleries?: Queries.Maybe<readonly Queries.Maybe<Queries.ContentfulGallery>[]>;
    activeGalleryId?: string;
    setActiveGalleryId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const GallerySelector: FC<GallerySelectorProps> = ({
    galleries,
    activeGalleryId,
    setActiveGalleryId,
}: GallerySelectorProps) => {
    return (
        <div aria-label="Gallery selector" role="tablist" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {galleries?.map((gallery: Queries.Maybe<Queries.ContentfulGallery>) => (
                <GalleryTab
                    key={gallery?.id}
                    gallery={gallery}
                    activeGalleryId={activeGalleryId}
                    setActiveGalleryId={setActiveGalleryId}
                />
            ))}
        </div>
    );
};

export default GallerySelector;
