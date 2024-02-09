/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { useTranslation } from 'next-i18next'

import { motion, useAnimation } from 'framer-motion'

import ScrollContainer from 'react-indiana-drag-scroll'
import Image from 'next/image'

import { ICarouselProps } from '@Interfaces/carousel'
import { IProjectListItem } from '@Interfaces/projectList'
import crypto from 'crypto'

const Projects = ({ isStopAnimation, setIsStopAnimation }: ICarouselProps) => {
  const { t } = useTranslation(['experience'])

  const projectsList = t('experience:projects.list', {
    returnObjects: true,
  }) as Array<IProjectListItem>

  const animation = useAnimation()

  useEffect(() => {
    animation.set({ x: 0 })

    animation.start({
      x: [0, -80, 0],
      transition: {
        delay: 0.75,
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 5,
        ease: 'backInOut',
      },
    })
  }, [])

  const stopAnimation = () => {
    animation.stop()
    animation.set({ x: 0 })

    if (!isStopAnimation) {
      setIsStopAnimation(true)
    }
  }

  useEffect(() => {
    if (isStopAnimation) {
      stopAnimation()
    }
  }, [isStopAnimation])

  return (
    <>
      <div className="col-12 text-center">
        <h3 className="cap__title">{t('experience:projects.title')}</h3>
      </div>

      <div className="col-12 mt-15 card__container">
        <div className="card__l-sh" />

        <ScrollContainer
          className="d-flex"
          horizontal
          style={{
            marginLeft: '-15px',
            marginRight: '-15px',
          }}
          onStartScroll={stopAnimation}
          onClick={stopAnimation}
        >
          <motion.div className="d-flex w-100" animate={animation}>
            {projectsList.map((item) => (
              <div
                key={crypto.randomBytes(20).toString('hex')}
                className="col-12 col-md-6 col-lg-4"
              >
                <a href={item.url} target="_blank" rel="noreferrer">
                  <div className="card text-center d-flex align-items-center justify-content-center">
                    <div
                      className="card__header d-flex justify-content-center"
                      style={{
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        priority
                        src={item.image}
                        height={75}
                        width={75}
                        alt={item.title}
                      />
                    </div>
                    <div
                      className="card__content text-left"
                      style={{
                        overflow: 'hidden',
                      }}
                    >
                      <h3 className="card__title" style={{ marginLeft: '3px' }}>
                        {item.title}
                      </h3>
                      {item.text.map((text, index) => (
                        <p
                          key={crypto.randomBytes(20).toString('hex')}
                          className={`card__subtitle card__subtitle-${
                            index + 1
                          }`}
                          title={text}
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </ScrollContainer>

        <div className="card__r-sh" />
      </div>
    </>
  )
}

export default Projects
