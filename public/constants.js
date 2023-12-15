import moment from "moment-timezone";

export const PERSONAL = [
  {
    label: "Profile",
    path: "/profile",
    notifications: "none",
  },
  {
    label: "Meetings",
    path: "/meetings",
    notifications: "none",
  },
  {
    label: "Webinars",
    path: "/webinars",
    notifications: "none",
  },
  {
    label: "Personal Contacts",
    path: "/personal/contacts",
    notifications: "none",
  },
  {
    label: "Personal Devices",
    path: "/personal/devices",
    notifications: "none",
  },
  {
    label: "Whiteboards",
    path: "/whiteboards",
    notifications: "none",
  },
  {
    label: "Notes",
    path: "/notes",
    notifications: "none",
  },
  {
    label: "Recordings",
    path: "/recordings",
    notifications: "none",
  },
  {
    label: "Clips",
    path: "/clips",
    notifications: "none",
  },
  {
    label: "Settings",
    path: "/settings",
    notifications: "none",
  },
  {
    label: "Schedular",
    path: "/schedular",
    notifications: "none",
  },
  {
    label: "Reports",
    path: "/reports",
    notifications: "none",
  },
];

export const ADMIN = [
  {
    name: "user management",
    properties: [
      {
        name: "users",
        path: "/users",
      },
      {
        name: "groups",
        path: "/groups",
      },
      {
        name: "roles",
        path: "/roles",
      },
    ],
  },
  {
    name: "room management",
    properties: [
      {
        name: "zoom rooms",
        path: "/zoom rooms",
      },
      {
        name: "calender integration",
        path: "/calender integration",
      },
      {
        name: "digital signage content",
        path: "/digital signage content",
      },
      {
        name: "cisco/Polycom rooms",
        path: "/cisco/Polycom rooms",
      },
      {
        name: "h.323/SIP room connector",
        path: "/h.323/SIP room connector",
      },
    ],
  },
  {
    name: "workspaces management",
    properties: [],
  },
  {
    name: "account management",
    properties: [],
  },
  {
    name: "advanced",
    properties: [],
  },
];

export const TIMEZONES = moment.tz.names().map((timezone) => ({
  value: timezone,
  label: timezone,
}));
