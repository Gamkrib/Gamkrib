import { useState } from "react";
import {
  Center,
  Tooltip,
  UnstyledButton,
  Stack,
  rem,
  createStyles,
} from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantine/ds";

const useStyles = createStyles((theme) => ({
  navbar: {
    width: `${rem(80)}`,
    height: `${rem(750)}`,
    padding: `var(--mantine-spacing-md)`,
    display: `flex`,
    flexDirection: `column`,
    borderRight: `rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))`,
  },
  navbarMain: {
    flex: 1,
    marginTop: rem(50),
  },
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: `var(--mantine-radius-md)`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: ` center`,
    color: `lightDark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))`,
    "&:hover": {
      backgroundColor: `light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5))`,
    },
    "& : [data-active]": {
      "&: hover": {
        backgroundColor: `var(--mantine-color-blue-light)`,
        color: `var(--mantine-color-blue-light-color)`,
      },
    },
  },
}));
function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" },
];

export function StudentNavBar() {
  const [active, setActive] = useState(2);
  const { classes } = useStyles();
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>{/* <MantineLogo type="mark" size={30} /> */}</Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}
