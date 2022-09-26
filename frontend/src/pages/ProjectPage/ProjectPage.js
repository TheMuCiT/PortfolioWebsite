import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppLeft from '../../components/appLeft/AppLeft'
import AppRight from '../../components/appRight/AppRight'

import './projectPage.css'

// const testData = [
//   {
//     size: 1,
//     offset: 0,
//     left: 0,
//   },
//   {
//     size: 1,
//     offset: 10,
//     left: 1,
//   },
//   {
//     size: 1,
//     offset: 20,
//     left: 0,
//   },
//   {
//     size: 1,
//     offset: 30,
//     left: 1,
//   },
// ]

const ProjectPage = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className='project'>
      <div className='projectLeft'>
        <AppLeft />

        <div className='projectLeftContainer'>
          <div className='projectBackButton' onClick={goBack}>
            <div className='projectBackButtonText'>Back</div>
          </div>

          <div className='projectTitleContainer'>
            <div className='projectTitle'>Project Title</div>
            <div className='projectSubTitle'>Project Title</div>
            <div className='projectText'>
              Passionate React developer with two years of experience in a freelancer industrial and a strong focus
              on front-end development with a willingness to learn and master Back-end development and testing.
              Expertise in web and mobile app development, with a particular interest in using React to create
              high-performance user interfaces.
            </div>
          </div>
        </div>
      </div>

      <div className='projectRight'>
        <AppRight title={'ABOUT PROJECT'} />
        <div className='projectRightContainer'>
          <img src={'./images/1.png'} alt='' className='projectImage' style={{ left: 0, top: 0 }} />
          <img src={'./images/2.png'} alt='' className='projectImage' style={{ right: 0, top: '15%' }} />
          <img src={'./images/3.png'} alt='' className='projectImage' style={{ left: 0, bottom: '15%' }} />
          <img src={'./images/4.png'} alt='' className='projectImage' style={{ right: 0, bottom: 0 }} />
        </div>
      </div>
    </div>
  )
}

export default ProjectPage

/**
 * <div className='appMain'>
        <div className='projectHeader'>
          <div className='projectLeft'>
            <div className='projectBackButton'>
              <div className='projectBackButtonText'>Back</div>
            </div>
          </div>
          <div className='projectRight'></div>
        </div>
        <div className='projectTitleContainer'>
          <div className='projectTitle'>Project Title</div>
        </div>
        <div className='projectContainer'>
          <div className='projectLeft projectLeftMain'>
            <div className='projectAbout'>
              Passionate React developer with two years of experience in a freelancer industrial and a strong focus
              on front-end development with a willingness to learn and master Back-end development and testing.
              Expertise in web and mobile app development, with a particular interest in using React to create
              high-performance user interfaces.
            </div>
          </div>
          <div className='projectRight'>
            <div className='projectImage'></div>
            <div className='projectImage'></div>
            <div className='projectImage'></div>
          </div>
        </div>
      </div>
 */
