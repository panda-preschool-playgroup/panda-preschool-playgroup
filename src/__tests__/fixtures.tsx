import { IGatsbyImageData } from "gatsby-plugin-image";
import { PropsWithChildren } from "react";

const createMockContentfulAsset = (overrides?: Partial<Queries.ContentfulAsset>): Queries.ContentfulAsset => {
    return {
        contentful_id: "",
        id: "",
        children: [],
        internal: {
            content: null,
            contentDigest: "",
            contentFilePath: null,
            description: null,
            fieldOwners: null,
            ignoreType: null,
            mediaType: null,
            owner: "",
            type: "",
        },
        parent: null,
        filename: "",
        filesize: null,
        gatsbyImage: null,
        height: null,
        mimeType: "",
        publicUrl: "",
        resize: null,
        width: null,
        createdAt: null,
        description: null,
        file: null,
        gatsbyImageData: createMockGatsbyImageData(),
        node_locale: null,
        placeholderUrl: null,
        size: null,
        spaceId: null,
        sys: null,
        title: null,
        updatedAt: null,
        url: null,
        ...overrides,
    };
};

const createMockGatsbyImageData = (overrides?: Partial<IGatsbyImageData>): IGatsbyImageData => {
    return {
        layout: "fixed",
        width: 0,
        height: 0,
        images: { sources: [] },
        ...overrides,
    };
};

const MockLayout = ({ children }: PropsWithChildren) => {
    return <>{children}</>;
};

export { createMockContentfulAsset, createMockGatsbyImageData, MockLayout };
