import { render } from "@testing-library/react";
import { MockLayout } from "@/test/fixtures";
import IndexPage, { Head } from "@/pages/index";
import PageHead from "@/components/layout/page-head/page-head";
import Layout from "@/components/layout/layout";
import Jumbotron from "@/components/index/jumbotron";
import Section from "@/components/index/section";
import * as homepageImagesQuery from "@/queries/index/use-get-homepage-images";

jest.mock("@/components/layout/page-head/page-head");
const mockPageHead = jest.mocked(PageHead);

jest.mock("@/components/layout/layout");
const mockLayout = jest.mocked(Layout).mockImplementation(MockLayout);

jest.mock("@/components/index/jumbotron");
const mockJumbotron = jest.mocked(Jumbotron);

jest.mock("@/components/index/section");
const mockSection = jest.mocked(Section);

jest.mock("@/components/common/contentful-image");

jest.mock("@/queries/index/use-get-homepage-images");
const mockHomepageImagesQuery = jest.mocked(homepageImagesQuery);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("index", () => {
    it("renders the layout", () => {
        render(<IndexPage />);

        expect(mockLayout).toHaveBeenCalled();
    });

    it("renders the jumbotron", () => {
        render(<IndexPage />);

        expect(mockJumbotron).toHaveBeenCalled();
    });

    it("retrieves the homepage images", () => {
        render(<IndexPage />);

        expect(mockHomepageImagesQuery.useGetHomepageImages).toHaveBeenCalledTimes(1);
    });

    it("renders the sections", () => {
        render(<IndexPage />);

        expect(mockSection).toHaveBeenCalledTimes(3);
    });
});

describe("head", () => {
    it("renders the head", () => {
        render(<Head />);

        expect(mockPageHead).toHaveBeenCalled();
    });
});
