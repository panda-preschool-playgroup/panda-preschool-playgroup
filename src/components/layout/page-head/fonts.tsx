import { FC } from "react";

const Fonts: FC = () => {
    return (
        <>
            <link
                key="sofia-pro-soft-bold"
                rel="preload"
                href="/fonts/sofia-pro-soft-bold.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                key="quicksand"
                rel="preload"
                href="/fonts/quicksand.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                key="dk-crayon-crumble"
                rel="preload"
                href="/fonts/dk-crayon-crumble.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
        </>
    );
};

export default Fonts;
