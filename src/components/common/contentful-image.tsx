import { GatsbyImage } from "gatsby-plugin-image";

interface ContentfulImageProps {
    imageTitle: string;
    images: Queries.ContentfulAsset[];
}

const ContentfulImage = ({ imageTitle, images }: ContentfulImageProps) => {
    const image: Queries.ContentfulAsset | undefined = images.find(
        (image: Queries.ContentfulAsset) => image.title === imageTitle,
    );

    return (
        <>
            {image?.gatsbyImageData && (
                <GatsbyImage
                    image={image.gatsbyImageData}
                    alt=""
                    aria-hidden
                    className="rounded-lg"
                    // className="grid-area-1-1 opacity-80 brightness-80"
                />
            )}
        </>
    );
};

export default ContentfulImage;
