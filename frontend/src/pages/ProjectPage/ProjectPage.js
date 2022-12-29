import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AppLeft from '../../components/appLeft/AppLeft'
import AppRight from '../../components/appRight/AppRight'

import data from '../../assets/data/portfolio.json'

import './projectPage.css'

const ProjectPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.Id

  useEffect(() => {
    window.scrollTo({ behavior: 'auto', top: 0 })
  }, [navigate])

  // useEffect(() => {
  //   setReloadData(!reloadData)
  // }, [id])

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
            <div className='projectTitle'>{data[id].title}</div>
            <div className='projectSubTitle'>{data[id].supTitle}</div>
            <div className='projectText'>{data[id].about}</div>

            {data[id].linkTitle && (
              <>
                <div className='projectLinkTitle'>{data[id].linkTitle}</div>
                <a href={data[id].link} target='_blank' rel='noreferrer' className='projectLink'>
                  {data[id].linkText}
                </a>

                {data[id].more && (
                  <>
                    <div className='projectLinkTitle'>View more on GitHub</div>
                    <a href='https://github.com/TheMuCiT' target='_blank' rel='noreferrer' className='projectLink'>
                      GitHub
                    </a>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div className='projectRight'>
        <AppRight title={'ABOUT PROJECT'} />
        <div className='projectRightContainer' style={{ height: data[id].pageSize }}>
          {data[id].images.map((item, index) => (
            <div className='' key={index}>
              {console.log(item)}
              <img
                src={item.image}
                alt=''
                className={item.sideLeft ? 'projectImage projectImageLeft' : 'projectImage'}
                style={{ top: item.offset, width: `calc(${item.size}% - 25px)` }}
              />
            </div>
          ))}
          {/* <img src={'./images/1.png'} alt='' className='projectImage' style={{ left: 0, top: 0 }} /> */}
          {/* <img src={'./images/2.png'} alt='' className='projectImage' style={{ right: 0, top: '15%' }} /> */}
          {/* <img src={'./images/3.png'} alt='' className='projectImage' style={{ left: 0, bottom: '15%' }} /> */}
          {/* <img src={'./images/4.png'} alt='' className='projectImage' style={{ right: 0, bottom: 0 }} /> */}
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
