import Fonts from "@/components/layout/page-head/fonts";
import { render } from "@testing-library/react";

describe("fonts", () => {
    it("renders the links to preload fonts", () => {
        render(<Fonts />);

        const links = document.getElementsByTagName("link");

        expect(links).toHaveLength(3);

        expect(links[0].getAttribute("rel")).toEqual("preload");
        expect(links[0].getAttribute("type")).toEqual("font/woff2");
        expect(links[1].getAttribute("rel")).toEqual("preload");
        expect(links[1].getAttribute("type")).toEqual("font/woff2");
        expect(links[2].getAttribute("rel")).toEqual("preload");
        expect(links[2].getAttribute("type")).toEqual("font/woff2");
    });
});
