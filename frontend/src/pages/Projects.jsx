import Project_Card from "../components/Project_Card";

const Projects = () => {
	return (
		<>
			<div id="projects" className=" px-[8%] w-[100%] h-full min-h-[100vh] mt-16">
				<div className="flex justify-center items-center flex-col ">
					<h1 className="text-4xl font-bold pb-2">My Projects</h1>
					<h2 className="text-xl opacity-85">Things I’ve built so far</h2>
				</div>

				{/* card-container */}
				<div className="grid grid-cols-3 mt-16   gap-6 " >
					<Project_Card
						projectImage="/netflix-banner.png"
						title="Moviemania-Netflix clone"
						description="MovieMania is a web application inspired by Netflix, allowing users to discover and watch movies. It utilizes the MERN stack for a robust and scalable architecture."
						stack="MongoDB, Express.js, React.js, TMDB and Node.js "
						liveLink="https://moviemania-netflix-clone-devesh-choudharys-projects.vercel.app"
						gitLink="https://github.com/D-singh121/moviemania_netflix_clone"
					/>

					<Project_Card
						projectImage="/todo-banner.png"
						title="TO-Do Management App"
						description="The app helps people to manage their day-to-day task in easy way ! in this app user can create the todo task  , update that task and after the task get finished they can delete the task also.  "
						stack="React.js HTML ,Tailwind css ,Javascript and context Api "
						liveLink="https://todo-app-pied-psi.vercel.app/"
						gitLink="https://github.com/D-singh121/TodoApp"
					/>


					<Project_Card
						projectImage="/DC-jobResized.png"
						title="Job Seeking app"
						description="This is Job seeking app on which user can signup and login based on their roles. After successfull login they can post a job or apply for job. all jobs are stored in database.  "
						stack="Reactjs ,Nodejs,Express ,MongoDB ,Multer ,Cloudnary"
						liveLink="https://mern-jobseeking-app-devesh-choudharys-projects.vercel.app"
						gitLink="https://github.com/D-singh121/MERN_Jobseeking_app"
					/>

					<Project_Card
						projectImage="/filtering-project.png"
						title="Advance Filter section"
						description="This is a advanced filtering project where i implemented the Searching ,sorting , filtering based on color ,price and other inputs.here we learn the concept of prop drilling "
						stack="HTML, CSS,JAVASCRIPT, React and react-icons"
						liveLink=""
						gitLink="https://github.com/D-singh121/Advance-filtering"
					/>


					<Project_Card
						projectImage="/travel-site.png"
						title="Travel-Site UI "
						description="This is a simple Travel website UI part built with the help of Reactjs and SCSS. I also implemented AOS(Animate on scroll) library to animate the content of page while scrollig.  "
						stack="Reactjs,SCSS, javascript, HTML"
						liveLink=""
						gitLink="https://github.com/D-singh121/react-travel-site"
					/>

					{/* <Project_Card
						projectImage=""
						title=""
						description=""
						stack=""
						liveLink=""
						gitLink=""
					/>
					<Project_Card
						projectImage=""
						title=""
						description=""
						stack=""
						liveLink=""
						gitLink=""
					/>
					 */}

				</div>
			</div>
		</>
	)
}

export default Projects;
