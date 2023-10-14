import { render, screen } from "@testing-library/react";
import Event from "@/components/index/event";

describe("event", () => {
    it("renders the name", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} />);

        const name = screen.queryByText("Event one");

        expect(name).toBeInTheDocument();
    });

    it("renders the formatted date", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} />);

        const date = screen.queryByText("Wed 1 Jan 2020");

        expect(date).toBeInTheDocument();
    });

    it("renders the link", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} href="http://localhost:8000/event" />);

        const url = screen.queryByRole("link", { name: "Event one Wed 1 Jan 2020" });

        expect(url).toBeInTheDocument();
    });
});
