import {
  BookOutlined,
  CalendarTwoTone,
  DashboardOutlined,
  EnvironmentOutlined,
  MobileOutlined,
  ReadOutlined,
  SettingOutlined,
  StarOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const basicNavTree = [
  {
    key: 'basic',
    path: `${APP_PREFIX_PATH}`,
    title: 'sidenav.basic',
    icon: '',
    breadcrumb: true,
    submenu: [
      {
        key: 'basic-dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: 'sidenav.basic.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'basic-scheduler',
        path: `${APP_PREFIX_PATH}/scheduler`,
        title: 'sidenav.basic.scheduler',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'basic-booking',
        path: `${APP_PREFIX_PATH}/booking`,
        title: 'sidenav.basic.booking',
        icon: ReadOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'basic-clients',
        path: `${APP_PREFIX_PATH}/clients`,
        title: 'sidenav.basic.clients',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'basic-ratings-and-reviews',
        path: `${APP_PREFIX_PATH}/ratings-and-reviews`,
        title: 'sidenav.basic.ratings-and-reviews',
        icon: StarOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'basic-institution',
        path: `${APP_PREFIX_PATH}/institution`,
        title: 'sidenav.basic.institution',
        icon: EnvironmentOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'basic-events',
        path: `${APP_PREFIX_PATH}/events`,
        title: 'sidenav.basic.events',
        icon: CalendarTwoTone,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'basic-employees',
        path: `${APP_PREFIX_PATH}/employees`,
        title: 'sidenav.basic.employees',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'basic-web-module',
        path: `${APP_PREFIX_PATH}/web-module`,
        title: 'sidenav.basic.web-module',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'basic-reserve-book',
        path: `${APP_PREFIX_PATH}/reserve-book`,
        title: 'sidenav.basic.reserve-book',
        icon: BookOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemicNavTree = [
  {
    key: 'systemic',
    path: `${APP_PREFIX_PATH}`,
    title: 'sidenav.systemic',
    icon: '',
    breadcrumb: true,
    submenu: [
      {
        key: 'systemic-settings',
        path: `${APP_PREFIX_PATH}/settings`,
        title: 'sidenav.systemic-settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...basicNavTree, ...systemicNavTree];

export default navigationConfig;
