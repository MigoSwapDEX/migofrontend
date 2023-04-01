import {
  amigoesImage,
  dapps,
  people,
  ethereumb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "ido",
    title: "Ido",
  },
  {
    id: "launchApp",
    title: "launchApp",
  },
];

const services = [
  {
    title: "Available in all continents",
    icon: ethereumb,
  },
  {
    title: "Scalable for millions of users",
    icon: people,
  },
  {
    title: "DAPPs for everyone",
    icon: dapps,
  },
];

const footerConfig = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://migoswap.gitbook.io/migodoc/contact-us",
        isHighlighted: true,
      },
      {
        label: "Blog",
        href: "https://medium.com/@migoswap",
      },
      {
        label: "Community",
        href: "https://discord.gg/Yfbgv2MWv6",
      },
      {
        label: "Litepaper",
        href: "#",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer Support",
        href: "https://migoswap.gitbook.io/migodoc/customer-support",
      },
      {
        label: "Guides",
        href: "https://migoswap.gitbook.io/migodoc/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/MigoSwapDEX",
      },
      {
        label: "Documentation",
        href: "https://migoswap.gitbook.io/migodoc/",
      },
    ],
  },
];

export { services, amigoesImage, footerConfig };
