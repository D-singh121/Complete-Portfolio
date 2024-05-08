import { ImGithub } from "react-icons/im";
import { HiLink } from "react-icons/hi";




const Project_Card = ({ projectImage, title, description, stack, liveLink, gitLink }) => {
	return (
		<>
			<div className=" m-0 cursor-pointer rounded-2xl  ">
				<div className="flex justify-center items-center bg-cover w-[100%] m-0 cursor-pointer bg-no-repeat overflow-hidden">
					<img width="100%" src={projectImage} alt="Project_image" />
				</div>

				<div className="p-4 w-full bg-gray-600 m-0">
					<div className="bg-inherit">
						<h1 className="text-2xl font-bold pb-2 bg-inherit cursor-pointer">{title}</h1>
						<p className="bg-inherit">{description}</p>
					</div>
					<h3 className="text-m line-clamp-1 pt-2 bg-inherit">
						<b className="bg-inherit">Tech Stack : </b>{stack}</h3>

					<div className="bg-inherit flex justify-between items-center pt-6">
						<div className="bg-inherit font-bold">
							<HiLink style={{ backgroundColor: "inherit", fontSize: "3vh", display: "inline-block", marginRight: "5px" }} />
							<a href={liveLink} className="bg-inherit underline cursor-pointer">Live Preview</a>
						</div>

						<div className="bg-inherit font-bold" >
							<ImGithub style={{ backgroundColor: "inherit", fontSize: "3vh", display: "inline-block", marginRight: "5px" }} />
							<a href={gitLink} className="bg-inherit underline cursor-pointer">
								View Code
							</a>
						</div>
					</div>
				</div>

			</div>
		</>
	);
};

export default Project_Card;