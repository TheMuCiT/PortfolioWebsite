import React from 'react'

import { useNavigate } from 'react-router-dom'
import AppLeft from '../../components/appLeft/AppLeft'
import AppRight from '../../components/appRight/AppRight'

import './homePage.css'

const HomePage = () => {
  const navigate = useNavigate()

  const goToProject = (id) => {
    navigate(`./project/${id}`)
  }

  return (
    <div className='app'>
      <div className='appLeft'>
        <AppLeft />
      </div>
      <div className='appMain'>
        <div className='appMainTitleContainer'>
          <div className='appMainTitle'>Karolis Vilimas</div>
          <div className='appMainText'>Full-Stack React Native and React JS developer</div>
        </div>

        <div className='appMainAboutMe'>
          <div className='appMainAboutMeText'>
            Passionate React developer with two years of experience in a freelancer industrial and a strong focus
            on front-end development with a willingness to learn and master Back-end development and testing.
            Expertise in web and mobile app development, with a particular interest in using React to create
            high-performance user interfaces.
          </div>
          <div className='appMainAboutMeMobileTitle'>ABOUT ME</div>
        </div>

        <div className='appMainSkill'>
          <div className='appMainSkillMobileTitle'>SKILLS</div>
          <div className='appMainSkillList'>
            <div className='appMainSkillListTitle'>I’m Working With</div>
            <div className='appMainSkillListItem'>React Native</div>
            <div className='appMainSkillListItem'>React JS</div>
            <div className='appMainSkillListItem'>Github</div>
            <div className='appMainSkillListItem'>Figma</div>
          </div>
          <div className='appMainSkillList'>
            <div className='appMainSkillListTitle'>Language</div>
            <div className='appMainSkillListItem'>Css</div>
            <div className='appMainSkillListItem'>HTML</div>
            <div className='appMainSkillListItem'>JavaScript</div>
            <div className='appMainSkillListItem'>TypeScript</div>
          </div>
          <div className='appMainSkillList'>
            <div className='appMainSkillListTitle'>Backend</div>
            <div className='appMainSkillListItem'>AWS</div>
            <div className='appMainSkillListItem'>Firebase</div>
            <div className='appMainSkillListItem'>MongoDB</div>
            <div className='appMainSkillListItem'>Apollo</div>
          </div>
          <div className='appMainSkillList'>
            <div className='appMainSkillListTitle'>Features</div>
            <div className='appMainSkillListItem'>CI/CD Pipeline</div>
            <div className='appMainSkillListItem'>EAS Expo</div>
          </div>
          <div className='appMainSkillList appMainSkillListMobile'>
            <div className='appMainSkillListTitle'>Personal</div>
            <div className='appMainSkillListItem'>Attention to Detail</div>
            <div className='appMainSkillListItem'>Analytical and Critical Thinking</div>
            <div className='appMainSkillListItem'>UI Maintenance</div>
            <div className='appMainSkillListItem'>Responsive & Adaptive Design</div>
          </div>
        </div>

        <div className='appMainProjectContainer'>
          <img src={'./images/light.png'} alt='' className='appMainProjectItem' onClick={() => goToProject(0)} />
          <img
            src={'./images/pawIntro.png'}
            alt=''
            className='appMainProjectItem'
            onClick={() => goToProject(1)}
          />
          <img src={'./images/dark.png'} alt='' className='appMainProjectItem' onClick={() => goToProject(2)} />
          <img
            src={'./images/stotiesIntro.png'}
            alt=''
            className='appMainProjectItem'
            onClick={() => goToProject(3)}
          />
          <img
            src={'./images/imoIntro.png'}
            alt=''
            className='appMainProjectItem'
            onClick={() => goToProject(4)}
          />
          <img
            src={'./images/pandaIntro.png'}
            alt=''
            className='appMainProjectItem'
            onClick={() => goToProject(5)}
          />
          <div className='appMainSkillMobileTitle' style={{ top: '-10%' }}>
            PORTFOLIO
          </div>
        </div>
      </div>
      <div className='appRight'>
        <AppRight />
      </div>
    </div>
  )
}

export default HomePage
