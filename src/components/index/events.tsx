import { FC } from "react";
import Event from "@/components/index/event";
import { useEvents } from "@/queries/index/use-events";

const Events: FC = () => {
    const events: Queries.ContentfulEvents = useEvents();

    return (
        <>
            <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-4xl">Events</h2>
            {events?.events?.length ? (
                events.events.map(
                    (event: Queries.Maybe<Queries.ContentfulEvent>) =>
                        event && (
                            <Event
                                key={event.id}
                                name={event.name ?? ""}
                                date={event.date ?? ""}
                                url={event.url}
                                image={event.image}
                            />
                        ),
                )
            ) : (
                <p>Check back soon!</p>
            )}
        </>
    );
};

export default Events;
