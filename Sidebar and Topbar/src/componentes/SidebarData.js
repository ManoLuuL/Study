import React from 'react';
import * as Icons from '@mui/icons-material';

export const SidebarData = [
  
  {
    title: 'Dashboard',
    path: '#',
    icon: <Icons.Speed />,
    iconClosed: <Icons.ArrowDropDown/>,
    iconOpened: <Icons.ArrowDropUp />,

    subNav: [
      {
        title: 'Home',
        path: '/home',
        icon: <Icons.Home />
      },
      {
        title: 'User',
        path: '/user',
        icon: <Icons.Person />
      },
      
    ]
  },
  {
    title: 'Reports',
    path: '#',
    icon: <Icons.Report />,
    iconClosed: <Icons.ArrowDropDown/>,
    iconOpened: <Icons.ArrowDropUp />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <Icons.Report />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <Icons.Report />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <Icons.Report />
      }
    ]
  },
  {
    title: 'Produtos',
    path: '/produtos',
    icon: <Icons.ShoppingCart />
  },
  {
    title: 'Grupos',
    path: '/team',
    icon: <Icons.Group />
  },
  {
    title: 'Messages',
    path: '#',
    icon: <Icons.Comment />,

    iconClosed: <Icons.ArrowDropDown/>,
    iconOpened: <Icons.ArrowDropUp />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <Icons.Comment />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <Icons.Comment/>
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <Icons.SupportAgent />
  }
];
