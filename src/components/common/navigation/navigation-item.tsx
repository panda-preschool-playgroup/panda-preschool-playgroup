import { FC } from "react";
import { Link } from "gatsby";

interface NavigationItemProps {
    text: string;
    href?: string;
    active?: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ text, href, active }: NavigationItemProps) => {
    let classes = "block py-2 pr-4 pl-3 md:p-0 border-b md:border-0 text-xl font-bold hover:text-cyan-dark";

    if (text === active) classes += " text-cyan";

    return (
        <li className="text-left w-full md:w-auto">
            {href ? (
                <Link to={href} className={classes}>
                    {text}
                </Link>
            ) : (
                <p className={classes}>{text}</p>
            )}
        </li>
    );
};

export default NavigationItem;
