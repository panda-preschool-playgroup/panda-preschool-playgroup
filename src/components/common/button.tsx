interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="bg-green hover:bg-green-light text-slate-100 text-shadow-light font-bold text-lg rounded-lg px-6 py-4 no-underline"
        >
            {text}
        </button>
    );
};

export default Button;
