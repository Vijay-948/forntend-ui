// import { title } from "process";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { link } from "fs";



const sections = [
  {
    title: "Company",
    items: ["ABout", "Blog"]
  },
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data"]
  },
  {
    title: "Support",
    items: ["Pricing", "Guides", "24/7 Support"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies"]
  }
]

const icons = [
  {name: "Github", iconName: GitHubIcon, link: "http://www.github.com"},
  {name: "Linkedin", iconName: LinkedInIcon, link: "http://www.github.com"},
  {name: "Twitter", iconName: XIcon, link: "http://www.github.com"},
  {name: "Instagram", iconName: InstagramIcon, link: "http://www.github.com"},
  {name: "FaceBook", iconName: FacebookOutlinedIcon, link: "http://www.github.com"},

]

const Footer = () => {
  return(
    <>
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2' style={{position:'sticky'}}>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className='font-bold uppercase pt-2'>{section.title}</h6>
            <ul>
              {section.items.map((item, index) => (
                <li key={index} className='py-1 text-gray-500 hover:text-white'>{item}</li>
              ))}
            </ul>
          </div>
        ))}

       <div className='col-span-2 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <form className='flex flex-col sm:flex-row'>
            <input  className='w-full p-2 mr-4 rouded-md mb-4' type="email" placeholder='Enter Email..' />
            <button className='p-2 mb-4'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col  max-w-[1240px] px=2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
          <p className='py-4'>2024 Workflow, LLC. All rights reserved</p>
          <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            {icons.map((icon, index) => (
              <a key={index} href={icon.link} target='_blank' rel='noopener noreferrer' className='hover:text-white'>
               <icon.iconName />
              </a>
            ))}
          </div>
        </div>



    </div>

    
    </>
  )
}

export default Footer;