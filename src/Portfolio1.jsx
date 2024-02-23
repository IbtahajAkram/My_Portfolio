import React from 'react'
import imgtop from './assets/portfoli1.jpg'
import './profile.css'
import { FaGithub} from 'react-icons/fa';
import { FaLinkedin, FaGoogle } from 'react-icons/fa';
import pdfFile from './assets/myCv.pdf'
import freelance from './assets/freelance.png'

const Portfolio1 = () => {
  const CvDownload = ()=> {
    window.open(pdfFile, '_blank')
  }
  return (
    <>
      <div className='topLeftPortfolio1'>
        <img className='topImg' src={imgtop} alt="" />
      </div>
      <ul className='li'>
        <li className='name'>Zawwar</li>
        <li style={{marginLeft:'-22px'}}>Home</li>
       <a style={{color:'white' , textDecoration:'none'}} href='#about'> <li>About</li></a>
       <a style={{color:'white' , textDecoration:'none'}} href='#Myservices'> <li>Services</li></a>
       <a style={{color:'white' , textDecoration:'none'}} href='#Hire'> <li>Hire Me</li></a>
        <li onClick={CvDownload}>Download CV</li>
        <a style={{textDecoration:'none'}} href="https://www.linkedin.com/in/muhammad-zawwar-akram-572b36266/" target='_blank'><li className='contact'>Contact Us</li></a>

      </ul>
      <div className='sidecontent'>
        <p style={{ fontSize: '25px' }}>👋Let`s Meet!</p>
      </div>
      <div>
        <p style={{ color: 'white', marginLeft: '62px', fontSize: '43px', marginTop: '-2px', fontWeight: 'bold' }}>I`M <span style={{ color: '#8080ff', fontSize: '43px', fontWeight: 'bold' }}>MERN STACK </span><br />WEB DEVELOPER</p>

        <p style={{ color: 'white', fontSize: '36px', marginLeft: '78px' }}>3 +&nbsp;<span style={{ fontSize: '19px' }}>Years&nbsp; of &nbsp;Experience</span></p>
        <button className='cvbutton' onClick={CvDownload}>Download Cv →</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div id='about' className='about'>
        <img className='blob' src={imgtop} alt="" />
        <h1 className='abouthead'>About Me</h1>
        <p style={{ color: 'white', fontSize: '17px', marginLeft: '697px', marginTop: '-8px' }}>MERN Maestro</p> <span style={{ color: ' #8080ff', fontSize: '22px', marginLeft: '810px', marginTop: '-39px', display: 'block' }}>Web Developer</span>
        <p id='about' className='aboutContent'>
          I`M Muhammad Zawwar Akram, BSCS student at <br />Urdu
          Federal University, adept MERN Stack and <br />
          Full Stack Developer with 3+ years of experience.<br />
          Passionate about crafting innovative solutions <br />
          using cutting-edge technologies. Skilled in HTML5,<br />
          CSS3, JavaScript, React.js, Node.js, Express.js, <br />
          MongoDB, SQL, MySQL,Microsoft SQL, PHP, <br />and VB.NET.
          Open to exciting opportunities and <br />
          collaborations in the tech industry.</p>
          <a href="https://www.linkedin.com/in/muhammad-zawwar-akram-572b36266/" target='_blank'> <button style={{ marginLeft: '700px', padding: '14px 24px', backgroundColor: ' #5050ff', color: 'white', border: 'none', borderRadius: '20px' }}>Contact Us &nbsp;→</button></a>
      </div>

      {/* Services */}
      <br/>
<br/>     <br/>
<br/>
      <div id='Myservices' className='MyServices'>
<h1 style={{color:'white' , marginLeft:'537px'}}>My Services</h1>
<br/>
<br/>
<br/>

<div className='service1'>
<h2  style={{color:'  #8a8aff'}}>&nbsp;&nbsp;&nbsp;&nbsp;Front End Development</h2>
<p style={{wordSpacing:'5px', fontSize:'17px',paddingLeft:'18px'}}>Frontend Web Development: I am<br/>
specialize in creating websites using<br/> HTML5, CSS3, JavaScript, React,<br/>
and Bootstrap to deliver captivating<br/>
  user experiences. With expertise in <br/>
  crafting responsive and visually <br/>
  appealing an designs, I ensure <br/> 
  seamless navigation and optimal performance.</p>
  
  <a href="https://www.freelancer.com/u/zain556" target='_blank'><button className='cvbutton1'>Contact</button></a>
</div>
<div className='service2'>
<h2  style={{color:' #8a8aff'}}>&nbsp;&nbsp;&nbsp;&nbsp;Back End Development</h2>
<p style={{wordSpacing:'5px', fontSize:'17px',paddingLeft:'18px'}}>
Back-End Development: I specialize <br/>
in building powerful server-side <br/>
applications using Node.js, Express.js,<br/>
 and PHP. With extensive experience <br/>
 in database management and server <br/>
 configuration, I ensure seamless functionality and scalability for web projects of all sizes.</p>
 <br />
<a href="https://www.freelancer.com/u/zain556" target='_blank'><button  className='cvbutton1'>Contact</button></a>
</div>  
<div className='service3'>
<h2 style={{color:' #8a8aff'}}>&nbsp;&nbsp;&nbsp;&nbsp;Database Management</h2>
<p style={{wordSpacing:'5px', fontSize:'17px',paddingLeft:'18px'}}>Database Management: I specialize <br/>in utilizing SQL, MySQL, Microsoft SQL Server, PHPMyAdmin, and MongoDB for efficient and secure data storage and retrieval. From designing robust database architectures to optimizing query performance, I ensure seamless operation and data integrity for web applications.</p>

<a href="https://www.linkedin.com/in/muhammad-zawwar-akram-572b36266/ " target='_blank'><button className='cvbutton1'>Contact</button></a>
</div>
      </div>
      <div id = 'Hire' className='hireMe'>
<h2 style={{color:'white' , marginLeft:'494px' , paddingTop:'36px'}}>Hire Me</h2>

<p id = 'Hire'className='hire'>
"Looking for a skilled developer who can bring your vision to life? Let's collaborate <br/>
 and turn your ideas into reality together! Hire me today and let's build something amazing!"</p>
 <br/>
 <button onClick={CvDownload} style={{backgroundColor:'yellow',marginLeft:'400px', border:'none', padding:'10px 21px', borderRadius:'19px'}}>View My CV</button>
 <a href="https://www.linkedin.com/in/muhammad-zawwar-akram-572b36266/" target='_blank'><button style={{backgroundColor:'yellow', border:'none', padding:'10px 21px', borderRadius:'19px' , marginLeft:'15px'}}>Contact Me</button></a>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='footer'>
<form className='form' ><h1 style={{color:'white' , marginTop:'-48px'}}>Contact Me</h1>
  <input type="text" name="name" id="name" placeholder='Enter Your Name' /><br/><br/>
  <input type="text" name="name" id="name" placeholder='Enter Your Email Address'/><br/><br/>
  <input type="text" name="name" id="name" placeholder='Enter Your Phone Number'/><br/><br/>
  <textarea  type="text" name="name" id="name" placeholder='Enter Your Name'/><br/><br/>
  <button style={{backgroundColor:'yellow',padding:'11px 23px', borderRadius:'19px', border:'none' , marginLeft:'7px'}}>Send Message</button>
</form>
<div className='contactMe'>
<p>Contact Me</p>
<p style={{fontSize:'49px' , fontWeight:'bold', color:'white'}}>Let`s Disscus Your <br/>Project</p>
<div className='SocialIcon'>
<a style={{marginLeft:'-11px'}} className='SocialIcon' href="https://www.linkedin.com/in/muhammad-zawwar-akram-572b36266/" target="_blank" rel="noopener noreferrer"title="Linkedin Account">
               <FaLinkedin />
           </a>
<a className='SocialIcon' href="https://mail.google.com/" target="_blank" rel="noopener noreferrer"title="Gmail Account">
               <FaGoogle />
           </a>
<a className='SocialIcon' href="https://github.com/IbtahajAkram" target="_blank" rel="noopener noreferrer"title="Github Account">
               <FaGithub />
               <a href="https://www.freelancer.com/u/zain556" target="_blank" rel="noopener noreferrer" alt="freelancer.com" title="My Freelancer.com Account">
    <img style={{height:'36px', marginLeft:'11px'}} src={freelance} alt="My Freelancer.com Account" />
</a>
 </a>
           </div>
</div>
      </div>
    </>
  )
}

export default Portfolio1