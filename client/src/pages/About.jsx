import {useSpring, animated, useTrail} from '@react-spring/web';

import rohan from '../assets/contributors/rohan.jpg';
import vinayak from '../assets/contributors/vinayak.jpg';

import {Contributor} from '../components';

const About = () => {
  const contacts = [
    {
      name: 'ROHAN TIWARI',
      linkedin: '',
      github: 'https://github.com/rohan00608/AGROHELP-main',
      info: 'B.Sc in INFORMATION TECHNOLOGY at MUMBAI UNIVERSITY',
      gmail: 'rohantiwari2303298@gmail.com',
      photo: rohan,
      
    },
    {
      name: 'VINAYAK MISHRA',
      linkedin: '',
      github: '',
      info: 'B.Sc in INFORMATION TECHNOLOGY at MUMBAI UNIVERSITY',
      gmail: 'vinayakmishra2417076@gmail.com',
      photo: vinayak,
      
    },
   
  ];

  const config = {mass: 2, tension: 2000, friction: 500};

  const trail = useTrail(contacts.length, {
    from: {opacity: 0, transform: 'translateY(-20px)'},
    to: {opacity: 1, transform: 'translateY(0px)'},
    delay: 1000,
    config,
  });

  const fadeDown1 = useSpring({
    from: {opacity: 0, transform: 'translateY(-50px)'},
    to: {opacity: 1, transform: 'translateY(0px)'},
    config: {duration: 500},
  });

  const fadeDown2 = useSpring({
    from: {opacity: 0, transform: 'translateY(-50px)'},
    to: {opacity: 1, transform: 'translateY(0px)'},
    config: {duration: 500},
    delay: 500,
  });

  return (
    <div className='flex justify-center'>
      <div className='w-[100rem] px-8 mt-[10rem] mb-[5rem]'>
        <div className='flex flex-col lg:w-[50rem] w[20rem] text-[#2c302e]'>
          <animated.div style={fadeDown1}>
            <p className='text-[18px] text-[#43b348] font-medium'>What is it?</p>
            <h1 className='text-[32px] font-bold font-serif'>About Agro Help</h1>
            <div className="mb-10">
              <p className="pt-2 text-[16px] text-[#666e75]">
                <span className="font-bold text-[#537a5a]">
                  Agro Help (AG)
                </span>{' '}
                assists rice farmers with A.I. technology to detect diseases in
                their paddies, brings scientific information to light, and helps
                them with solutions from experts.
              </p>
              <br />
              <p className="text-[16px] text-[#666e75]">
                Agro Help uses a{' '}
                <span className="font-bold text-[#537a5a]">
                  custom trained machine learning model
                </span>{' '}
                alongside{' '}
                <span className="font-bold text-[#537a5a]">
                  image recognition technology
                </span>{' '}
                to analyze images of rice plants and detect signs of disease. It
                also provides farmers with detailed information about the{' '}
                <span className="font-bold text-[#537a5a]">specific disease</span>{' '}
                and its potential causes, as well as recommendations for{' '}
                <span className="font-bold text-[#537a5a]">
                  treatment and prevention.
                </span>
              </p>
              <br />
              <p className="pt-2 text-[16px] text-[#666e75]">
                The goal of AgroHelp is to help farmers increase the productivity and
                profitability of their crops by providing them with the tools and
                knowledge they need to effectively manage disease and protect
                their plants.
              </p>
            </div>
          </animated.div>
          
          <animated.div style={fadeDown2}>
            <p className='text-[18px] text-[#43b348] font-medium mt-6'>Who made it?</p>
            <h1 className='text-[32px] font-bold font-serif'>Meet Our Contributors</h1>
            <p className='pt-2 pb-6 text-[16px] text-[#666e75]'>We are thriving students with a passion for developing tools to help the world!</p>
            <div className="flex flex-col justify-between md:items-start gap-6 pb-10">
              {contacts.map((contact, index) => (
                <animated.div style={trail[index]}>
                  <Contributor
                    key={index}
                    photo={contact.photo}
                    name={contact.name}
                    linkedin={contact.linkedin}
                    github={contact.github}
                    info={contact.info}
                    gmail={contact.gmail}
                  />
                </animated.div>
              ))}
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default About;
