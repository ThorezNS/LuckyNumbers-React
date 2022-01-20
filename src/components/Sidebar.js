import SidebarTitle from "./SidebarTitle";
import OccurrencesWrapper from "./OccurrencesWrapper";

const Sidebar = ({occurrences}) => {

    return (
        <section className="sidebar">
            {occurrences.length ? <SidebarTitle title={'occurrences'} /> : null}
            <OccurrencesWrapper occurrences={occurrences}/>

        </section>
    )
}

export default Sidebar;
