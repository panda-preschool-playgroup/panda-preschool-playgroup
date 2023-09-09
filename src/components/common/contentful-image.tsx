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
                <GatsbyImage image={image.gatsbyImageData} alt={image.description ?? ""} className="rounded-lg" />
            )}
        </>
    );
};

export default ContentfulImage;
