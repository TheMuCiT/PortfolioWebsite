import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AppLeft from '../../components/appLeft/AppLeft'
import AppRight from '../../components/appRight/AppRight'

import data from '../../assets/data/portfolio.json'

import './projectPage.css'
import { DataContext } from '../../contexts/DataContext'

const ProjectPage = () => {
  const { setSideShow } = useContext(DataContext)
  const navigate = useNavigate()
  const params = useParams()
  const id = params.Id

  useEffect(() => {
    window.scrollTo({ behavior: 'auto', top: 0 })
    setSideShow(true)
  }, [navigate, setSideShow])

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className='project'>
      <div className='projectLeft'>
        <AppLeft />
      </div>
      <div className='projectCenter'>
        <div className='projectCenterLeft'>
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
                      <a
                        href='https://github.com/TheMuCiT'
                        target='_blank'
                        rel='noreferrer'
                        className='projectLink'
                      >
                        GitHub
                      </a>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className='projectCenterRight'>
          <div className='projectRightContainer' style={{ height: data[id].pageSize }}>
            {data[id].images.map((item, index) => (
              <div className='' key={index}>
                <img
                  src={item.image}
                  alt=''
                  className={item.sideLeft ? 'projectImage projectImageLeft' : 'projectImage'}
                  style={{ top: item.offset, width: `calc(${item.size}% - 25px)` }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='projectCenterRightMobile'>
          {data[id].images.map((item, index) => (
            <div className='' key={index}>
              <img src={item.image} alt='' className='projectImageMobile' />
            </div>
          ))}
        </div>
      </div>
      <div className='projectRight'>
        <AppRight />
      </div>
    </div>
  )
}

export default ProjectPage

// {
//    <div className='project'>
//       <div className='projectLeft'>
//         <AppLeft />

//         <div className='projectLeftContainer'>
//           <div className='projectBackButton' onClick={goBack}>
//             <div className='projectBackButtonText'>Back</div>
//           </div>

//           <div className='projectTitleContainer'>
//             <div className='projectTitle'>{data[id].title}</div>
//             <div className='projectSubTitle'>{data[id].supTitle}</div>
//             <div className='projectText'>{data[id].about}</div>

//             {data[id].linkTitle && (
//               <>
//                 <div className='projectLinkTitle'>{data[id].linkTitle}</div>
//                 <a href={data[id].link} target='_blank' rel='noreferrer' className='projectLink'>
//                   {data[id].linkText}
//                 </a>

//                 {data[id].more && (
//                   <>
//                     <div className='projectLinkTitle'>View more on GitHub</div>
//                     <a href='https://github.com/TheMuCiT' target='_blank' rel='noreferrer' className='projectLink'>
//                       GitHub
//                     </a>
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className='projectRight'>
//         <AppRight />
//         <div className='projectRightContainer' style={{ height: data[id].pageSize }}>
//           {data[id].images.map((item, index) => (
//             <div className='' key={index}>
//               {console.log(item)}
//               <img
//                 src={item.image}
//                 alt=''
//                 className={item.sideLeft ? 'projectImage projectImageLeft' : 'projectImage'}
//                 style={{ top: item.offset, width: `calc(${item.size}% - 25px)` }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
// }
