import { IoDownloadOutline } from "react-icons/io5";




const Heropage = () => {
	return (
		<>
			<div id="home" className="px-[8%]  w-100% h-[calc(100vh-10vh)] flex items-center justify-between">
				<div className="">
					<div className="text-5xl font-bold flex flex-col gap-2  ">
						<span>Hi,👋</span>
						<h1>My name is</h1>
						<h1 className="bg-gradient-to-tr from-pink-500 to-cyan-400 text-transparent bg-clip-text ">Devesh Choudhary</h1>
						<h1>A FullStack Devloper & DevOps </h1>
					</div>

					<a href="/FullStack_bg.png" download="FullStack_bg.png"><button type="button" className="px-5 py-2.5 flex justify-between gap-2 items-center border-none rounded-3xl mt-4  text-lg  bg-blue-800 hover:bg-blue-900"> <IoDownloadOutline style={{ backgroundColor:"rgb(30 64 175)", background:"transparent", fontSize:"22px"  }} /> Download Resume</button></a>
				</div>

				<div className="">
					<div className="bg-red-300 w-[250px] h-[250px] rounded-full flex justify-center items-center  bg-gradient-to-tr from-pink-500 to-cyan-400">
						<div className=" w-[240px] h-[240px] rounded-full m-auto overflow-hidden bg-cover items-center flex justify-center">
							<img src="/myimage.png" alt="profile pic" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Heropage; 