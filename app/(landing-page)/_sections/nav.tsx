"use client";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header({ navLinks = links }: HeaderProps) {
	return (
		<header className="relative border-b border-[#FFFFFF33] bg-transparent">
			<nav className="container mx-auto  flex w-full items-center justify-between  px-4 md:px-6 py-6">
				<a href="/">
					<Logo />
				</a>
				<Navigation navLinks={navLinks} />
				<Navigation mobile navLinks={navLinks} />
			</nav>
		</header>
	);
}

function Logo() {
	return (
		<Image
			src="/assets/images/logo/logo.png"
			width={200}
			height={40}
			alt="logo"
			className="-ml-[15%] sm:ml-0"
		/>
	);
}
const links: NavLink[] = [
	{
		title: "Learn",
		href: "#",
	},
	{
		title: "News",
		href: "#",
	},
	{
		title: "Founder NFT",
		href: "#",
	},
];

function Navigation({ mobile = false, navLinks = [] }: NavigationProps) {
	const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);

	const navClassName = ` text-lg text-primary-foreground space-x-2
    ${
			mobile
				? `transition transform -right-full absolute top-[90px] z-20 py-4 pb-7 w-full overflow-y-auto sm:hidden backdrop-filter backdrop-blur-md ${
						mobileNavigationOpened
							? "-translate-x-full visible bg-[#111310] opacity-100"
							: "hidden opacity-0"
					}`
				: "hidden sm:flex"
		}
  `;

	const navListClassName = `
    flex
    ${mobile ? "flex-col space-y-2 w-full " : "items-center gap-5"}
  `;
	const navListItemClassName = `
    group relative rounded-full  px-5 py-2 hover:shadow-[0px_4px_20px_0px_#AFC76B4D] text-lg text-primary-foreground transform transition-transform
    ${mobile ? "w-full overflow-x-visible" : ""}
  `;
	const navListLinkClassName = mobile ? "mx-2 rounded-[20px]" : "";

	const closeMobileNavigation = () => setMobileNavigationOpened(false);

	return (
		<>
			{mobile && (
				<div className="flex gap-2 md:hidden ">
					<Button
						className="block bg-transparent sm:hidden"
						onClick={() => setMobileNavigationOpened(true)}
						title="Open navigation menu"
					>
						<HamburgerMenuIcon height={"15px"} width={"20px"} color="#CFF073" />
					</Button>
				</div>
			)}

			{mobile && mobileNavigationOpened && (
				<Button
					className="fixed right-0 top-0 z-10 h-full w-full opacity-0 sm:hidden"
					onClick={closeMobileNavigation}
				/>
			)}

			<nav className={navClassName}>
				<ul className={navListClassName}>
					{navLinks.map(({ title, href, button }) => (
						<li
							className={navListItemClassName}
							key={href}
							onClick={closeMobileNavigation}
							onKeyUp={() => {}}
							onKeyDown={() => {}}
						>
							{button ? (
								<Button variant={"default"} className={` ${mobile && "mx-4"}`}>
									<a href={href}>{title}</a>
								</Button>
							) : (
								<NavLink
									className={navListLinkClassName}
									mobile={mobile}
									href={href}
								>
									{title}
								</NavLink>
							)}
						</li>
					))}
					<Button className="hover:bg-transparent hover:scale-105 border-[#bdff00] border-2 text-black rounded-full" variant={'ghost'}>
						<Link 	
							className={`
							block whitespace-nowrap  text-lg text-primary-foreground no-underline transition 
							${mobile && ""}
							`}
							href='/apps/timeline'>

							Dashboard
						</Link>
					</Button>

								</ul>
			</nav>
		</>
	);
}

function NavLink({ children, className, mobile, href }: NavLinkProps) {
	return (
		<Button variant={"ghost"} disabled>
			<Link
				className={`
        block whitespace-nowrap  text-lg text-primary-foreground no-underline transition 
        ${mobile && ""}
        ${className}
        `}
				aria-disabled
				href={`${href}`}
			>
				{children}
			</Link>
		</Button>
	);
}

export interface NavLink {
	title: string;
	href: string;
	children?: NavLink[];
	button?: boolean;
}

interface NavigationProps {
	mobile?: boolean;
	navLinks?: NavLink[];
}

interface NavLinkProps extends React.HTMLProps<HTMLLinkElement> {
	mobile?: boolean;
}

interface HeaderProps {
	navLinks?: NavLink[];
}
