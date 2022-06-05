import "boxicons/css/boxicons.min.css";

const sidebarItems = [
  {
    display: "DAI",
    icon: <i className="bx bx-home-smile"></i>,
    to: "/",
    section: "",
  },
  {
    display: "Splunk Data Fetch",
    icon: <i className="bx bx-cloud-download"></i>,
    to: "/splunk_api",
    section: "splunk_api",
  },
  {
    display: "Cell Location",
    icon: <i className="bx bx-map"></i>,
    to: "/cell_info",
    section: "cell_info",
  },
  {
    display: "Cites Map",
    icon: <i className="bx bx-map-alt"></i>,
    to: "/city_map",
    section: "city_map",
  },
];

export default sidebarItems;
