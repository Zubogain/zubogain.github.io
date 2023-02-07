import React, { useEffect } from 'react'

import { useTranslation } from 'next-i18next'

import { motion, useAnimation } from 'framer-motion'

import ScrollContainer from 'react-indiana-drag-scroll'

import { ICarouselProps } from '@Interfaces/carousel'
import { IExperienceListItem } from '@Interfaces/experienceList'
import crypto from 'crypto'

const Experience = ({
  isStopAnimation,
  setIsStopAnimation,
}: ICarouselProps) => {
  const { t } = useTranslation(['experience'])

  const experienceList = t('experience:experience.list', {
    returnObjects: true,
  }) as Array<IExperienceListItem>

  const animation = useAnimation()

  useEffect(() => {
    animation.set({ x: 0 })

    animation.start({
      x: [0, -80, 0],
      transition: {
        delay: 3,
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
      <div className="col-12 text-center mt-30">
        <h3 className="cap__title">{t('experience:experience.title')}</h3>
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
        >
          <motion.div className="d-flex w-100" animate={animation}>
            {experienceList.map((item) => (
              <div
                key={crypto.randomBytes(20).toString('hex')}
                className="col-12 col-md-6 col-lg-4"
              >
                <div className="card text-center">
                  <div className="card__header d-flex justify-content-center">
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__date">{item.date}</p>
                  </div>
                  <p className="card__subtitle">{item.subtitle}</p>
                  <p className="card__text">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </ScrollContainer>

        <div className="card__r-sh" />
      </div>
    </>
  )
}

export default Experience
