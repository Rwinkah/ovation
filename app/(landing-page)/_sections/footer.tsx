import Link from "next/link";

export default function Footer() {
	return (
		<footer className="container flex flex-wrap justify-between w-[90%] py-10 border-t border-[#FFFFFF80] px-0">
			<div className="flex flex-col gap-10 footer-left">
				<Link href="/">
					<img
						src="/assets/images/logo/logo.png"
						width={250}
						height={40}
						alt="logo"
						className="-ml-10"
					/>
				</Link>

				<p>© 2024 Ovation Technologies.</p>
			</div>

			<div className="flex items-stretch justify-end gap-10 w-[60%] h-fit footer-right">
				{/* <div className="flex flex-col gap-6 footer-left">
					<p className="font-heading text-primary-foreground text-xl">
						Contact
					</p>
					<p>hello@ovation.network</p>
				</div> */}

				<div className="flex flex-col gap-6 footer-left">
					<p className="font-heading text-primary-foreground text-xl">
						Support
					</p>

					<div className="flex flex-col gap-3">
						<Link
							href="https://ovationnetwork.notion.site/Ovation-Terms-of-Service-4f90f9d4f85c4e95bdd28c47e187323c"
							target="_blank"
						>
							Terms of service
						</Link>
						<Link href="https://ovationnetwork.notion.site/" target="_blank">
							Privacy policy
						</Link>
					</div>
				</div>

				<div className="flex flex-col gap-6 footer-left">
					<p className="font-heading text-primary-foreground text-xl">
						Socials
					</p>

					<div className="flex gap-3 w-fit">
						<Link href="#">
							<img
								src="/assets/images/footer/footer1.png"
								alt=""
								className="w-8 h-8"
							/>
						</Link>
						<Link href="#">
							{" "}
							<img
								src="/assets/images/footer/footer2.png"
								alt=""
								className="w-8 h-8"
							/>
						</Link>
						<Link href="#">
							{" "}
							<img
								src="/assets/images/footer/footer3.png"
								alt=""
								className="w-8 h-8"
							/>
						</Link>
						<Link href="#">
							{" "}
							<img
								src="/assets/images/footer/footer4.png"
								alt=""
								className="w-8 h-8"
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
