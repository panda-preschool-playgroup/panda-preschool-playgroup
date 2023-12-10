import { FC } from "react";
import { Table } from "flowbite-react";
import { useTermDates } from "@/queries/index/use-term-dates";
import { formatDate } from "@/services/dates";

const TermDates: FC = () => {
    const termDates: Queries.ContentfulTermDates = useTermDates();

    return (
        <>
            <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-4xl">Term dates</h2>
            <Table className="text-center">
                <Table.Body className="text-lg text-slate-800 divide-y">
                    {termDates.terms?.map((term: Queries.Maybe<Queries.ContentfulTerm>) => (
                        <Term key={term?.id} term={term} />
                    ))}
                </Table.Body>
            </Table>
        </>
    );
};

interface TermProps {
    term: Queries.Maybe<Queries.ContentfulTerm>;
}

const Term: FC<TermProps> = ({ term }: TermProps) => {
    return (
        <>
            <Table.Row>
                <Table.Cell colSpan={2} theme={{ base: "px-6 py-4 bg-slate-200" }}>
                    <strong>{term?.name}</strong>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    {formatDate(term?.start)} - {formatDate(term?.lastDayBeforeHalfTerm)}
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    {formatDate(term?.firstDayAfterHalfTerm)} - {formatDate(term?.end)}
                </Table.Cell>
            </Table.Row>
        </>
    );
};

export default TermDates;
