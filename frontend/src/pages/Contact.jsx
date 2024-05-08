import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';




const Contact = () => {
	return (
		<>
			<div id='contact' className='px-[8%] mt-14'>
				<div className=' flex justify-between items-center m-0 overflow-hidden w-full pt-10 pb-5 cursor-pointer '>
					<div className='text-4xl pt-1 opacity-95'>DC</div>
					<div className='flex justify-between items-center m-0 overflow-hidden w-[50%] '>
						<h3>+91-9082444800</h3>
						<h3>choudharydevesh121@gmail.com</h3>
						<div className='flex justify-between gap-2 opacity-85 cursor-pointer'>
							<a href='https://github.com/D-singh121'><GitHubIcon /></a>
							<a href='https://twitter.com/Dee_Singh121'><XIcon /></a>
							<a href='https://www.linkedin.com/in/devesh-choudhary-b25a01152/'><LinkedInIcon /></a>
							<a href='https://www.instagram.com/deesingh9851/'><InstagramIcon /></a>
						</div>
					</div>


				</div>
				<hr className='pb-5' />
			</div>

		</>
	);
};

export default Contact;