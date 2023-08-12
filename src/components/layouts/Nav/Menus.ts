import AppConst from "@config/app.const";

export const Menus: Array<MenuItem> = [
  {
    id: 1,
    name: "Survey",
    url: "",
    children: [
      {
        id: 1,
        name: "Home Energy Assessment",
        url: "/home-energy-assessment",
        children: [
          { id: 1, name: "Building Survey", url: "/building-survey" },
          { id: 2, name: "Pre-BER", url: "/pre-ber" },
          { id: 3, name: "Technical Assessment", url: "/technical-assessment" },
          { id: 4, name: "Upgrade Plan", url: "/upgrade-plan" },
          { id: 5, name: "Detailed Quotations", url: "/detailed-quotations" },
          { id: 6, name: "One Stop Shop Delivery", url: "/one-stop-shop" },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Installation",
    url: "",
    children: [
      {
        id: 1,
        name: "Roof Insulation",
        url: "",
        children: [
          {
            id: 1,
            name: "Attic Insulation",
            url: AppConst.wpSiteUrl + "attic-insulation",
          },
        ],
      },
      {
        id: 2,
        name: "Wall Insulation",
        url: "",
        children: [
          {
            id: 1,
            name: "External Wall Insulation",
            url: AppConst.wpSiteUrl + "external-wall-insulation/",
            children: [
              {
                id: 1,
                name: "Details & Finishes",
                url: AppConst.wpSiteUrl + "details-and-finishes/",
              },
              {
                id: 2,
                name: "External Wall Finishes",
                url: AppConst.wpSiteUrl + "external-wall-finishes/",
              },
            ],
          },
          {
            id: 2,
            name: "Internal Wall Insulation",
            url: AppConst.wpSiteUrl + "internal-wall-insulation/",
          },
          {
            id: 3,
            name: "Cavity Wall Insulation",
            url: AppConst.wpSiteUrl + "cavity-wall-insulation/",
          },
        ],
      },
      {
        id: 3,
        name: "Windows & Doors",
        url: "",
        children: [
          {
            id: 1,
            name: "Window Replacements",
            url: AppConst.wpSiteUrl + "window-replacements/",
          },
        ],
      },
      {
        id: 4,
        name: "Ventilation",
        url: "",
        children: [
          {
            id: 1,
            name: "Roof & Wall Ventilation",
            url: AppConst.wpSiteUrl + "roof-and-wall-ventilation/",
            children: [
              {
                id: 1,
                name: "Does Your Home Need Ventilation?",
                url: AppConst.wpSiteUrl + "does-your-home-need-ventilation/",
              },
            ],
          },

          {
            id: 2,
            name: "Demand Control Ventilation",
            url: AppConst.wpSiteUrl + "demand-control-ventilation/",
          },
        ],
      },
      {
        id: 5,
        name: "Heating Upgrades",
        url: "",
        children: [
          {
            id: 1,
            name: "Heat Pumps",
            url: AppConst.wpSiteUrl + "heat-pumps/",
          },
          {
            id: 2,
            name: "Gas Boiler",
            url: AppConst.wpSiteUrl + "gas-boiler-replacements/",
          },
          {
            id: 3,
            name: "Oil Boiler",
            url: AppConst.wpSiteUrl + "oil-boiler-replacements/",
          },
          {
            id: 4,
            name: "Heating Controls",
            url: AppConst.wpSiteUrl + "heating-controls/",
          },
          {
            id: 5,
            name: "Hot Water Cylinders",
            url: AppConst.wpSiteUrl + "hot-water-cylinder-replacement/",
          },
          {
            id: 6,
            name: "Cold Water Storage Tanks",
            url: AppConst.wpSiteUrl + "cold-water-storage-tank-replacement/",
          },
          {
            id: 7,
            name: "Radiators",
            url: AppConst.wpSiteUrl + "central-heating-system-replacement/",
          },
        ],
      },
      {
        id: 6,
        name: "Renewables",
        url: "",
        children: [
          {
            id: 1,
            name: "Solar PV",
            url: AppConst.wpSiteUrl + "solar-pv-thermal-panels/",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Guarantees",
    url: AppConst.wpSiteUrl + "q-smart-quality-guaranteed/",
  },

  {
    id: 4,
    name: "Grants",
    url: "",
    children: [
      {
        id: 1,
        name: "SEAI Grants",
        url: "/seai-better-energy-home-scheme",
      },
    ],
  },

  {
    id: 5,
    name: "About Us",
    url: "",
    children: [
      {
        id: 1,
        name: "Our Company",
        url: "",
        children: [
          {
            id: 1,
            name: "Core Values",
            url: AppConst.wpSiteUrl + "our-company/",
          },
        ],
      },
      {
        id: 2,
        name: "Standards & Accreditions",
        url: AppConst.wpSiteUrl + "accreditation/",
      },
      {
        id: 3,
        name: "Our Experience",
        url: "",
        children: [
          {
            id: 1,
            name: "Our Projects",
            url: AppConst.wpSiteUrl + "recent-works/",
          },
          {
            id: 2,
            name: "Customer Reviews",
            url: AppConst.wpSiteUrl + "customer-reviews/",
          },
        ],
      },
      {
        id: 4,
        name: "Contact Us",
        url: AppConst.wpSiteUrl + "contact-us/",
        children: [
          {
            id: 1,
            name: "Customer Care",
            url: AppConst.wpSiteUrl + "customer-care/",
          },
        ],
      },
    ],
  },
];

export interface MenuItem {
  id: number;
  name: string;
  url: string;
  children?: MenuItem[];
  selected?: boolean;
}
