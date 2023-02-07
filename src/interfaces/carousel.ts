import { Dispatch, SetStateAction } from 'react'

export interface ICarouselProps {
  isStopAnimation: boolean
  setIsStopAnimation: Dispatch<SetStateAction<boolean>>
}
