// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: 'mdi:home-outline',
      children: [
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
      ]
    },

    {
      title: 'User',
      icon: 'mdi:account-outline',
      children: [
        {
          title: 'List',
          path: '/apps/user/list'
        },
        // {
        //   title: 'View',
        //   children: [
        //     {
        //       title: 'Overview',
        //       path: '/apps/user/view/overview'
        //     },
        //     {
        //       title: 'Security',
        //       path: '/apps/user/view/security'
        //     },
        //     {
        //       title: 'Billing & Plans',
        //       path: '/apps/user/view/billing-plan'
        //     },
        //     {
        //       title: 'Notifications',
        //       path: '/apps/user/view/notification'
        //     },
        //     {
        //       title: 'Connection',
        //       path: '/apps/user/view/connection'
        //     }
        //   ]
        // }
      ]
    },

  ]
}

export default navigation
