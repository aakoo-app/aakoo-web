// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    // {
    //   title: 'Dashboards',
    //   icon: 'mdi:home-outline',
    //   children: [
    //     {
    //       title: 'Analytics',
    //       path: '/dashboards/analytics'
    //     }
    //   ]
    // },

    {
      title: 'Applications',
      icon: 'mdi:account-outline',
      path: '/apps/appkeys/list'
    },

    {
      title: 'Identity',
      icon: 'mdi:account-outline',
      children: [
        {
          title: 'List',
          path: '/apps/user/list'
        }
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
    }
  ]
}

export default navigation
