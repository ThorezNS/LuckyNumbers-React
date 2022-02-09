import SidebarTitle from "../../atoms/SidebarTitle/SidebarTitle";
import OccurrencesWrapper from "../../moleculs/OccurrencesWrapper/OccurrencesWrapper";

const Sidebar = ({occurrences}) => {

    return (
        <section className="sidebar">
            {occurrences.length ? <SidebarTitle title={'occurrences'} /> : null}
            <OccurrencesWrapper occurrences={occurrences}/>

        </section>
    )
}

export default Sidebar;
