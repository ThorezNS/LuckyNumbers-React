import OccurrenceItem from "./OccurrenceItem";

const Sidebar = () => {

    return (
        <section className="sidebar">
            <h2 className="sidebar__title">occurrences</h2>
            <OccurrenceItem />
            <OccurrenceItem />
            <OccurrenceItem />
            <OccurrenceItem />
        </section>
    )
}

export default Sidebar;
