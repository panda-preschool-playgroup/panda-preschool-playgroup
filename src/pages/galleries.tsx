import { FC, useState } from "react";
import { graphql } from "gatsby";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import GallerySelector from "@/components/galleries/gallery-selector";
import ContentfulImage from "@/components/common/contentful-image";

const heading = "Galleries";

interface PageProps {
    data: Queries.Query;
}

const GalleriesPage: FC<PageProps> = ({ data }: PageProps) => {
    const [activeGalleryId, setActiveGalleryId] = useState<string | undefined>(undefined);

    const galleries: Queries.Maybe<readonly Queries.Maybe<Queries.ContentfulGallery>[]> | undefined =
        data.contentfulGalleries?.galleries;

    const activeGallery = galleries?.find(
        (gallery: Queries.Maybe<Queries.ContentfulGallery>) => gallery?.id === activeGalleryId,
    );

    return (
        <Layout showHomeLink activeSection={heading} pageHeading={heading}>
            <Article heading={heading}>
                <div className="mb-16">
                    <GallerySelector
                        galleries={galleries}
                        activeGalleryId={activeGalleryId}
                        setActiveGalleryId={setActiveGalleryId}
                    />
                </div>
                <hr className="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
                    role="tabpanel"
                    aria-labelledby={`tab-${activeGalleryId}`}
                >
                    {activeGallery?.images?.map((image: Queries.Maybe<Queries.ContentfulAsset>) => (
                        <div key={image?.id}>
                            <ContentfulImage imageTitle={image?.title ?? ""} images={[image]} />
                        </div>
                    ))}
                </div>
            </Article>
        </Layout>
    );
};

export default GalleriesPage;

export const Head = () => <PageHead pageTitle={heading} />;

export const query = graphql`
    {
        contentfulGalleries(name: { eq: "Galleries" }) {
            galleries {
                id
                name
                headerImage {
                    title
                    gatsbyImageData(width: 400, height: 150, placeholder: BLURRED)
                }
                images {
                    id
                    title
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
        }
    }
`;
