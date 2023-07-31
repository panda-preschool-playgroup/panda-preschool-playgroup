import { Link } from "gatsby";

interface LinkButtonProps {
    text: string;
    href: string;
    style: string;
}

type ColoredLinkButtonProps = Pick<LinkButtonProps, "text" | "href">;

const PrimaryLinkButton = ({ text, href }: ColoredLinkButtonProps) => {
    return <LinkButton text={text} href={href} style="bg-cyan hover:bg-cyan-dark" />;
};

const SecondaryLinkButton = ({ text, href }: ColoredLinkButtonProps) => {
    return <LinkButton text={text} href={href} style="bg-blue hover:bg-blue-dark " />;
};

const LinkButton = ({ text, href, style }: LinkButtonProps) => {
    return (
        <Link to={href} className={`${style} text-gray-100 font-bold text-lg rounded-lg px-6 py-4 no-underline`}>
            {text}
        </Link>
    );
};

export { PrimaryLinkButton, SecondaryLinkButton };
