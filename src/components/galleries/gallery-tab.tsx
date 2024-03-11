import { FC, KeyboardEvent } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

interface GalleryLinkProps {
    gallery?: Queries.Maybe<Queries.ContentfulGallery>;
    activeGalleryId?: string;
    setActiveGalleryId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const GalleryTab: FC<GalleryLinkProps> = ({ gallery, activeGalleryId, setActiveGalleryId }: GalleryLinkProps) => {
    const isActive: boolean = activeGalleryId === gallery?.id;

    const action = () => setActiveGalleryId(gallery?.id);

    const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (["Space", "Enter"].includes(event.code)) {
            event.preventDefault();
            action();
        }
    };

    return (
        <div
            id={`tab-${gallery?.id}`}
            role="tab"
            tabIndex={0}
            onClick={action}
            onKeyDown={onKeyDown}
            className={`grid cursor-pointer ${isActive ? "" : "opacity-60 hover:opacity-100"}`}
        >
            {gallery?.headerImage?.gatsbyImageData && (
                <GatsbyImage
                    image={gallery?.headerImage?.gatsbyImageData}
                    alt=""
                    aria-hidden
                    className="grid-area-1-1 rounded-lg opacity-50"
                />
            )}
            <div className="grid-area-1-1 relative text-center flex items-center">
                <p className="font-dk-crayon-crumble my-auto py-4 md:py-8 tracking-tight leading-none text-5xl text-shadow-light w-full">
                    {gallery?.name}
                </p>
            </div>
        </div>
    );
};

export default GalleryTab;
