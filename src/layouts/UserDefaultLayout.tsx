// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from 'src/@core/layouts/Layout'

// ** Navigation Imports
import VerticalNavItems from 'src/navigation/defaultVertical'
import HorizontalNavItems from 'src/navigation/defaultHorizontal'
// import HorizontalNavItems from 'src/navigation/horizontal'

// ** Component Import
// Uncomment the below line (according to the layout type) when using server-side menu
// import ServerSideVerticalNavItems from './components/vertical/ServerSideNavItems'
// import ServerSideHorizontalNavItems from './components/horizontal/ServerSideNavItems'

// import VerticalAppBarContent from './components/vertical/AppBarContent'
import VerticalAppBarDefaultContent from './components/vertical/AppBarDefaultContent'
import HorizontalAppBarContent from './components/horizontal/AppBarContent'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'
import { Box, Typography } from '@mui/material'

interface Props {
  children: ReactNode
  contentHeightFixed?: boolean
}

const AppBrand = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src='/images/logo.png' alt='logo' width='30' height='30' />
      <Typography variant='h6' sx={{ ml: 2 }}>
        <strong>AAKOO</strong>
      </Typography>
    </Box>
  )
}

const UserDefaultLayout = ({ children, contentHeightFixed }: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  // ** Vars for server side navigation
  // const { menuItems: verticalMenuItems } = ServerSideVerticalNavItems()
  // const { menuItems: horizontalMenuItems } = ServerSideHorizontalNavItems()

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/material-ui/react-use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  if (hidden && settings.layout === 'horizontal') {
    settings.layout = 'vertical'
  }

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      contentHeightFixed={contentHeightFixed}
      verticalLayoutProps={{
        navMenu: {
          branding: () => <AppBrand />,
          navItems: VerticalNavItems()

          // Uncomment the below line when using server-side menu in vertical layout and comment the above line
          // navItems: verticalMenuItems
        },
        appBar: {
          content: props => (
            <VerticalAppBarDefaultContent
              hidden={hidden}
              settings={settings}
              saveSettings={saveSettings}
              toggleNavVisibility={props.toggleNavVisibility}
            />
          )
        }
      }}
      {...(settings.layout === 'horizontal' && {
        horizontalLayoutProps: {
          navMenu: {
            branding: () => <AppBrand />,
            navItems: HorizontalNavItems()

            // Uncomment the below line when using server-side menu in horizontal layout and comment the above line
            // navItems: horizontalMenuItems
          },
          appBar: {
            content: () => <HorizontalAppBarContent hidden={hidden} settings={settings} saveSettings={saveSettings} />
          }
        }
      })}
    >
      {children}
    </Layout>
  )
}

export default UserDefaultLayout
