import HeaderLogo from "../header/components/HeaderLogo";
import "./Footer.css";

export function Footer() {
    const COMPANY_INFO =
        "A cutting-edge platform dedicated to maximizing digital efficiency and personal growth. We empower users to build powerful routines, achieve flow state, and deliver their best work.";

    const LINKS_GROUP = [
        {
            title: "company",
            links: [
                {
                    name: "about us",
                    link: "#",
                },
                {
                    name: "blog",
                    link: "#",
                },
                {
                    name: "career",
                    link: "#",
                },
                {
                    name: "contact",
                    link: "#",
                },
            ],
        },
        {
            title: "resources",
            links: [
                {
                    name: "certifications & awards",
                    link: "#",
                },
                {
                    name: "partners",
                    link: "#",
                },
                {
                    name: "events",
                    link: "#",
                },
            ],
        },
        {
            title: "legal & support",
            links: [
                {
                    name: "help center",
                    link: "#",
                },
                {
                    name: "privacy policy",
                    link: "#",
                },
                {
                    name: "terms of use",
                    link: "#",
                },
            ],
        },
    ];

    const YEAR = new Date().getFullYear()

    return (
        <div className="footer-container">
            <div className="footer-sub-container alingCenterDiv">
                {/* links  */}
                <div className="footer-info-container">
                    <div className="footer-brand-section">
                        <h2 className="footer-app-title">Malta Habit</h2>
                        <p className="company-info">{COMPANY_INFO}</p>

                        {/* all the social links of our  */}
                        <nav>
                            <ul className="centerDiv">
                                <li>
                                    <a href="https://www.facebook.com" target="_blank">
                                        <i className="fa-brands fa-facebook socialIcons"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com" target="_blank">
                                        <i className="fa-brands fa-youtube socialIcons"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com" target="_blank">
                                        <i className="fa-brands fa-linkedin socialIcons"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" target="_blank">
                                        <i className="fa-brands fa-instagram socialIcons"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {LINKS_GROUP.map((group) => {
                        return (
                            <div key={group.title}>
                                <div>
                                    <h2 className="footer-info-title">{group.title}</h2>
                                </div>
                                <div>
                                    <nav>
                                        <ul >
                                            {group.links.map((linkItem) => {
                                                return (
                                                    <li key={linkItem.name}>
                                                        <a className="footer-info-items" href={linkItem.link} >{linkItem.name}</a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* copy right text  */}
                <div className="footer-copy-right-container">
                    <p>© {YEAR} MaltaHabit. Built for the MALTAS.</p>
                </div>
            </div>
        </div>
    );
}
