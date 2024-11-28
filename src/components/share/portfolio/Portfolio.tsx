import Theme from "../../common/theme/Theme.tsx";
import './index.scss';
import PortfolioItem from "../../common/portfolio-item/PortfolioItem.tsx";
import { useContext, useMemo } from "react";
import { LanguageContext } from "../../../context/context.ts";

const Portfolio = () => {
    const context = useContext(LanguageContext);
    const { language, isLang } = context || { language: {}, isLang: '' };
    const currentLang = language?.[isLang]?.main?.portfolio || { title: "Portfolio", projects: [] };
    const projectList = useMemo(
        () =>
            currentLang.projects.map((project, index) => (
                <PortfolioItem key={index} {...project} />
            )),
        [currentLang.projects]
    );

    if (!context || !currentLang.projects.length) {
        return <div>No Projects Available</div>;
    }

    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio__theme-container">
                <Theme title={currentLang.title} />
            </div>
            <div className="portfolio__work-container">
                {projectList}
            </div>
        </section>
    );
};

export default Portfolio;

