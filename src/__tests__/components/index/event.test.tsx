import { render, screen } from "@testing-library/react";
import Event from "@/components/index/event";

describe("event", () => {
    it("renders the name", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} url="http://localhost:8000/event" />);

        const url = screen.queryByText("Event one");

        expect(url).toBeInTheDocument();
    });

    it("renders the formatted date", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} url="http://localhost:8000/event" />);

        const url = screen.queryByText("Wed 1 Jan 2020");

        expect(url).toBeInTheDocument();
    });

    it("renders the link", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} url="http://localhost:8000/event" />);

        const url = screen.queryByRole("link", { name: "Event one Wed 1 Jan 2020" });

        expect(url).toBeInTheDocument();
    });
});
