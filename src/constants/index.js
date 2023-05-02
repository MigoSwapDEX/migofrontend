import { migosvg, dapps, people, ethereumb } from "../assets";

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
    title: "Launch App",
    link: "https://dex.migoswap.org/#/swap",
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

const idos = [
  {
    title: "Commit CORE",
    company_name: null,
    icon: migosvg,
    iconBg: "#383E56",
    date: null,
    points: [
      "Commit CORE to participate in this sale, incase of overflow left over SHDW will be returned back to users wallet",
    ],
  },
  {
    title: "Claim your tokens",
    company_name: null,
    icon: migosvg,
    iconBg: "#E6DEDD",
    date: null,
    points: [
      "After the Token sales is over, you can claim any tokens bought, and any unspent CORE tokens will be returned to your wallet.",
    ],
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

export { services, migosvg, idos, footerConfig };
