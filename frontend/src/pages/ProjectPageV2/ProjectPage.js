import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ReactComponent as BackgroundSVG } from '../../icons/BackgroundSVG.svg'
import { ReactComponent as ArrowNext } from '../../icons/ArrowNext.svg'

import ReactGA from 'react-ga4'

import './projectPage.css'

import data from '../../assets/data/portfolio.json'

const ProjectPage = () => {
  const [imageShow, setImageShow] = useState(0)
  const [imageSize, setImageSize] = useState(0)
  const navigate = useNavigate()

  const params = useParams()
  const id = params.Id

  useEffect(() => {
    window.scrollTo({ behavior: 'auto', top: 0 })
  }, [navigate])

  useEffect(() => {
    WindowChange()
  }, [])

  const previousImage = () => {
    let imageCount = data[id].images.length
    if (imageShow === 0) {
      setImageShow(imageCount - 1)
    } else {
      setImageShow(imageShow - 1)
    }
  }

  const nextImage = () => {
    let imageCount = data[id].images.length
    if (imageCount === imageShow + 1) {
      setImageShow(0)
    } else {
      setImageShow(imageShow + 1)
    }
  }

  const viewProject = () => {
    window.open(data[id].LinkTo)
  }

  const goBack = () => {
    navigate(-1)
  }

  const WindowChange = () => {
    if (window.innerWidth > 620) {
      setImageSize(window.innerHeight - 200)
    } else {
      setImageSize(window.innerHeight - 400)
    }
  }

  useEffect(() => {
    ReactGA.event({ category: 'page', action: window.location.pathname })
  }, [])

  window.addEventListener('resize', WindowChange)

  return (
    <>
      <div className='componentFirst'>
        <div className='mainPageBC'>
          <BackgroundSVG className='mainPageBcSVG' />
        </div>
        <div className='componentSecond'>
          <div className='mainPage'>
            <div className='mainPageContainer'>
              <div className='mainPageTitle'>{data[id].title}</div>
              <div className='mainPageText'>{data[id].supTitle}</div>
              <div className='mainPageButton' onClick={viewProject}>
                View Project
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='componentFirst'>
        <div className='componentSecond'>
          <div className='projectPageImages' style={{ height: imageSize }}>
            <div className='projectPageImagesArrow'>
              <ArrowNext className='arrowNext arrowPrevious' onClick={previousImage} />
            </div>
            <div className='projectPageImagesContainer'>
              <img
                src={data[id].images[imageShow].image}
                alt=''
                className='projectPageImagesIMG'
                style={{ maxHeight: imageSize }}
              />
            </div>
            <div className='projectPageImagesArrow projectPageImagesArrowRight'>
              <ArrowNext className='arrowNext' onClick={nextImage} />
            </div>
          </div>
        </div>
      </div>
      <div className='componentFirst'>
        <div className='componentSecond' style={{ alignItems: 'center' }}>
          <div className='projectAbout'>
            <div className='projectAboutContainer'>
              <div className='mainAboutLeftTitle'>About Project</div>
              <div className='mainAboutText'>{data[id].about}</div>
            </div>
            <div className='projectAboutContainer'>
              <div className='mainAboutLeftTitle'>Tools Used</div>

              <div className='mainAboutSkills projectMobileSkill'>
                {data[id].tools.map((item) => (
                  <div className='mainAboutSkillItem' key={item.id}>
                    {item.tool}
                  </div>
                ))}
              </div>
            </div>
            <div className='projectAboutContainer'>
              <div className='mainAboutLeftTitle'>Links</div>
              <div className='projectPageButtonsContainer'>
                <div className='mainProjectButton' onClick={viewProject}>
                  View Project
                </div>
                <div className='mainProjectButton' onClick={goBack}>
                  Back
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectPage
