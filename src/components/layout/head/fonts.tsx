const Fonts = () => {
    return (
        <>
            <link
                key="darumadrop-one"
                rel="preload"
                href="/fonts/darumadrop-one.woff2"
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
        </>
    );
};

export default Fonts;
