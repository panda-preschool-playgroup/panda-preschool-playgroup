import { render, screen } from "@testing-library/react";
import Event from "@/components/index/event";

describe("event", () => {
    it("renders the name", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} url="http://localhost:8000/event" />);

        const url = screen.queryByText("Event one");

        expect(url).toBeInTheDocument();
    });

    it("renders the date", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} url="http://localhost:8000/event" />);

        const url = screen.queryByText("2020-01-01");

        expect(url).toBeInTheDocument();
    });

    it("renders the link", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} url="http://localhost:8000/event" />);

        const url = screen.queryByRole("link", { name: "Event one 2020-01-01" });

        expect(url).toBeInTheDocument();
    });
});
