import SidebarTitle from "./SidebarTitle";
import OccurrencesWrapper from "./OccurrencesWrapper";

const Sidebar = () => {

    return (
        <section className="sidebar">
            <SidebarTitle title={'occurrences'} />
            <OccurrencesWrapper />
        </section>
    )
}

export default Sidebar;
