import { IGatsbyImageData } from "gatsby-plugin-image";
import { PropsWithChildren } from "react";

const createMockGatsbyImageData = (props?: Partial<IGatsbyImageData>): IGatsbyImageData => {
    return {
        layout: "fixed",
        width: 0,
        height: 0,
        images: { sources: [] },
        ...props,
    };
};

const MockLayout = ({ children }: PropsWithChildren) => {
    return <>{children}</>;
};

const createMockContentfulEntry = (): Queries.ContentfulEntry &
    Queries.ContentfulReference &
    Queries.Node & {
        children: ReadonlyArray<Node>;
        contentful_id: Queries.Scalars["String"];
        createdAt: Queries.Maybe<Queries.Scalars["Date"]>;
        id: Queries.Scalars["ID"];
        internal: Queries.Internal;
        node_locale: Queries.Scalars["String"];
        parent: Queries.Maybe<Node>;
        spaceId: Queries.Maybe<Queries.Scalars["String"]>;
        sys: Queries.Maybe<Queries.ContentfulFooterSys>;
        updatedAt: Queries.Maybe<Queries.Scalars["Date"]>;
    } => {
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
        createdAt: null,
        node_locale: "",
        spaceId: null,
        sys: null,
        updatedAt: null,
    };
};

const createMockContentfulAsset = (props?: Partial<Queries.ContentfulAsset>): Queries.ContentfulAsset => {
    return {
        ...createMockContentfulEntry(),
        gatsbyImageData: createMockGatsbyImageData(),
        filename: "",
        filesize: null,
        gatsbyImage: null,
        height: null,
        mimeType: "",
        publicUrl: "",
        resize: null,
        width: null,
        description: null,
        file: null,
        placeholderUrl: null,
        size: null,
        title: null,
        url: null,
        ...props,
    };
};

const createMockContentfulEvent = (props?: Partial<Queries.ContentfulEvent>): Queries.ContentfulEvent => {
    return {
        ...createMockContentfulEntry(),
        name: "",
        date: "",
        image: createMockContentfulAsset(),
        url: "",
        events: [],
        ...props,
    };
};

const createMockContentfulNews = (props?: Partial<Queries.ContentfulNews>): Queries.ContentfulNews => {
    return {
        ...createMockContentfulEntry(),
        name: "",
        isPublished: true,
        lastUpdated: "",
        text: null,
        ...props,
    };
};

const createMockContentfulVirtualTour = (
    props?: Partial<Queries.ContentfulVirtualTour>,
): Queries.ContentfulVirtualTour => {
    return {
        ...createMockContentfulEntry(),
        name: "",
        isPublished: true,
        ...props,
    };
};

export {
    createMockGatsbyImageData,
    MockLayout,
    createMockContentfulEntry,
    createMockContentfulAsset,
    createMockContentfulEvent,
    createMockContentfulNews,
    createMockContentfulVirtualTour,
};
