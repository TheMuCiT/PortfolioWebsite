import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { ReactComponent as BackgroundSVG } from '../../icons/BackgroundSVG.svg'

import data from '../../assets/data/portfolio.json'

import './mainPage.css'

import ReactGA from 'react-ga4'

const MainPage = () => {
  const navigate = useNavigate()

  const goToProject = (id) => {
    navigate(`../project/${id}`)
  }

  const goToGitHub = () => {
    window.open('https://github.com/TheMuCiT')
  }

  const goToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/karolisvilimas/')
  }

  const scrollToProject = () => {
    let home = document.getElementsByClassName('scrollToProject')

    window.scrollTo({ top: home[0].offsetTop - 100, behavior: 'smooth' })
  }

  useEffect(() => {
    ReactGA.event({ category: 'page', action: 'Main' })
  }, [])

  return (
    <>
      <div className='componentFirst'>
        <div className='mainPageBC'>
          <BackgroundSVG className='mainPageBcSVG' />
        </div>
        <div className='componentSecond'>
          <div className='mainPage'>
            <div className='mainPageContainer'>
              <div className='mainPageTitle'>Karolis Vilimas</div>
              <div className='mainPageText'>Full-Stack React Native and React JS developer</div>
              <div className='mainPageButton' onClick={scrollToProject}>
                projects
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='componentFirst scrollToAbout'>
        <div className='componentSecond'>
          <div className='mainAbout'>
            <div className='mainAboutTitle'>about me</div>
            <div className='mainLine' />
            <div className='mainAboutSectionText'>
              Short summary about me and what skills I have. If my skill is matching your interests or you have
              some questions feel free to contact me on
              <span className='mainAboutSectionTextLink' onClick={goToLinkedIn}>
                {' '}
                LinkedIn
              </span>
              .
            </div>
            <div className='mainAboutContainer'>
              <div className='mainAboutLeft'>
                <div className='mainAboutLeftTitle'>More About Me</div>
                <div className='mainAboutText'>
                  Passionate React developer with two years of experience in a freelancer industrial and a strong
                  focus on front-end development with a willingness to learn and master Back-end development and
                  testing. Expertise in web and mobile app development, with a particular interest in using React
                  to create high-performance user interfaces.
                </div>
              </div>
              <div className='mainAboutRight'>
                <div className='mainAboutLeftTitle'>My Skills</div>
                <div className='mainAboutSkills'>
                  <div className='mainAboutSkillItem'>React Native</div>
                  <div className='mainAboutSkillItem'>React JS</div>
                  <div className='mainAboutSkillItem'>Github</div>
                  <div className='mainAboutSkillItem'>Figma</div>
                  <div className='mainAboutSkillItem'>Css</div>
                  <div className='mainAboutSkillItem'>HTML</div>
                  <div className='mainAboutSkillItem'>JavaScript</div>
                  <div className='mainAboutSkillItem'>TypeScript</div>
                  <div className='mainAboutSkillItem'>AWS</div>
                  <div className='mainAboutSkillItem'>Firebase</div>
                  <div className='mainAboutSkillItem'>MongoDB</div>
                  <div className='mainAboutSkillItem'>Apollo</div>
                  <div className='mainAboutSkillItem'>CI/CD Pipeline</div>
                  <div className='mainAboutSkillItem'>EAS Expo</div>
                  <div className='mainAboutSkillItem'>Attention to Detail</div>
                  <div className='mainAboutSkillItem'>Analytical and Critical Thinking</div>
                  <div className='mainAboutSkillItem'>UI Maintenance</div>
                  <div className='mainAboutSkillItem'>Responsive & Adaptive Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='componentFirst scrollToProject'>
        <div className='componentSecond'>
          <div className='mainAbout'>
            <div className='mainAboutTitle'>projects</div>
            <div className='mainLine' />
            <div className='mainAboutSectionText'>
              Some of the personal and client projects that I created. Take a look at it or view more on my
              <span className='mainAboutSectionTextLink' onClick={goToGitHub}>
                {' '}
                GitHub
              </span>
              .
            </div>
            <div className='mainProjectContainer'>
              <div className='mainProjectItem'>
                <div className='mainProjectImage'>
                  <img src={'./images/light.webp'} alt='' className='appMainProjectItem' />
                </div>
                <div className='mainProjectTextContainer'>
                  <div className='mainProjectTitle'>{data[0].title}</div>
                  <div className='mainProjectText'>{data[0].supTitle}</div>
                  <div className='mainProjectButton' onClick={() => goToProject(0)}>
                    View project
                  </div>
                </div>
              </div>
              <div className='mainProjectItem'>
                <div className='mainProjectImage'>
                  <img src={'./images/pawIntro.webp'} alt='' className='appMainProjectItem' />
                </div>
                <div className='mainProjectTextContainer'>
                  <div className='mainProjectTitle'>{data[1].title}</div>
                  <div className='mainProjectText'>{data[1].supTitle}</div>
                  <div className='mainProjectButton' onClick={() => goToProject(1)}>
                    View project
                  </div>
                </div>
              </div>

              <div className='mainProjectItem'>
                <div className='mainProjectImage'>
                  <img src={'./images/dark.webp'} alt='' className='appMainProjectItem' />
                </div>
                <div className='mainProjectTextContainer'>
                  <div className='mainProjectTitle'>{data[2].title}</div>
                  <div className='mainProjectText'>{data[2].supTitle}</div>
                  <div className='mainProjectButton' onClick={() => goToProject(2)}>
                    View project
                  </div>
                </div>
              </div>

              <div className='mainProjectItem'>
                <div className='mainProjectImage'>
                  <img src={'./images/stotiesIntro.webp'} alt='' className='appMainProjectItem' />
                </div>
                <div className='mainProjectTextContainer'>
                  <div className='mainProjectTitle'>{data[3].title}</div>
                  <div className='mainProjectText'>{data[3].supTitle}</div>
                  <div className='mainProjectButton' onClick={() => goToProject(3)}>
                    View project
                  </div>
                </div>
              </div>

              <div className='mainProjectItem'>
                <div className='mainProjectImage'>
                  <img src={'./images/imoIntro.webp'} alt='' className='appMainProjectItem' />
                </div>
                <div className='mainProjectTextContainer'>
                  <div className='mainProjectTitle'>{data[4].title}</div>
                  <div className='mainProjectText'>{data[4].supTitle}</div>
                  <div className='mainProjectButton' onClick={() => goToProject(4)}>
                    View project
                  </div>
                </div>
              </div>

              <div className='mainProjectItem'>
                <div className='mainProjectImage'>
                  <img src={'./images/pandaIntro.webp'} alt='' className='appMainProjectItem' />
                </div>
                <div className='mainProjectTextContainer'>
                  <div className='mainProjectTitle'>{data[5].title}</div>
                  <div className='mainProjectText'>{data[5].supTitle}</div>
                  <div className='mainProjectButton' onClick={() => goToProject(5)}>
                    View project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
