import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ChevronLeftIcon, ChevronRightIcon, Menu } from 'lucide-react'
import * as React from 'react'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}))

interface AppBarProps extends MuiAppBarProps {
	open?: boolean
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	variants: [
		{
			props: ({ open }) => open,
			style: {
				marginLeft: drawerWidth,
				width: `calc(100% - ${drawerWidth}px)`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
		},
	],
}))

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	variants: [
		{
			props: ({ open }) => open,
			style: {
				...openedMixin(theme),
				'& .MuiDrawer-paper': openedMixin(theme),
			},
		},
		{
			props: ({ open }) => !open,
			style: {
				...closedMixin(theme),
				'& .MuiDrawer-paper': closedMixin(theme),
			},
		},
	],
}))

const menuItems = [
	{
		title: 'Dashboard',
		iconSrc: './menu/dashboard.svg',
	},
	{
		title: 'Transactions',
		iconSrc: './menu/transactions.svg',
	},
	{
		title: 'Accounts',
		iconSrc: './menu/accounts.svg',
	},
	{
		title: 'Investments',
		iconSrc: './menu/investments.svg',
	},
	{
		title: 'Credit Cards',
		iconSrc: './menu/credit_cards.svg',
	},
	{
		title: 'Loans',
		iconSrc: './menu/loans.svg',
	},
	{
		title: 'Services',
		iconSrc: './menu/services.svg',
	},
	{
		title: 'My Privileges',
		iconSrc: './menu/privileges.svg',
	},
	{
		title: 'Settings',
		iconSrc: './menu/settings.svg',
	},
]

export default function MiniDrawer() {
	const theme = useTheme()
	const [open, setOpen] = React.useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position='fixed' open={open}>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
					}}
				>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={[
							{
								marginRight: 5,
							},
							open && { display: 'none' },
						]}
					>
						<Menu />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						Overview
					</Typography>
					<Typography variant='h6' component='div'>
						<div className='w-9 h-9 rounded-full overflow-hidden'>
							<img
								className='w-full h-full object-cover'
								src='./me.jpg'
								alt='me'
							/>
						</div>
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{menuItems.map(({ title, iconSrc }) => (
						<MenuItem open={open} title={title} iconSrc={iconSrc} />
					))}
				</List>
			</Drawer>
		</Box>
	)
}

interface MenuItemProps {
	open: boolean
	title: string
	iconSrc: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ open, title, iconSrc }) => {
	return (
		<ListItem disablePadding sx={{ display: 'block' }}>
			<ListItemButton
				sx={[
					{
						minHeight: 48,
						px: 2.5,
					},
					open
						? {
								justifyContent: 'initial',
						  }
						: {
								justifyContent: 'center',
						  },
				]}
			>
				<ListItemIcon
					sx={[
						{
							minWidth: 0,
							justifyContent: 'center',
						},
						open
							? {
									mr: 3,
							  }
							: {
									mr: 'auto',
							  },
					]}
				>
					<img src={iconSrc} alt={title} />
				</ListItemIcon>
				<ListItemText
					primary={title}
					sx={[
						open
							? {
									opacity: 1,
							  }
							: {
									opacity: 0,
							  },
					]}
				/>
			</ListItemButton>
		</ListItem>
	)
}
