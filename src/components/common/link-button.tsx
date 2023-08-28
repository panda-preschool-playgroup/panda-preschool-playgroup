import { Link } from "gatsby";

interface LinkButtonProps {
    text: string;
    href: string;
}

const LinkButton = ({ text, href }: LinkButtonProps) => {
    return (
        <Link
            to={href}
            className="bg-green hover:bg-green-light text-slate-100 text-shadow-light font-bold text-lg rounded-lg px-6 py-4 no-underline"
        >
            {text}
        </Link>
    );
};

export default LinkButton;
