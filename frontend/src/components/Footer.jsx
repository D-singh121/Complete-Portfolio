
const Footer = () => {
	return (
		<>
			<div className="px-[8%] m-0 flex justify-between items-center w-full py-10">
				<nav>
					<ul className="flex justify-between items-center gap-12 w-[50%] list-none  cursor-pointer">
						<a href='/'>Home</a>
						<a href='#techstack'>Technologies</a>
						<a href='#projects'> Projects</a>
						<a href='#contact'>Contact</a>
					</ul>
				</nav>
				<h3>Designed and built by <b className="bg-gradient-to-tr from-red-400 to-cyan-400 text-transparent bg-clip-text "> Devesh Choudhary</b> and fueled by <b className="bg-gradient-to-tr from-pink-500 to-cyan-400 text-transparent bg-clip-text ">Chai...</b></h3>
			</div>
		</>
	)
}

export default Footer;