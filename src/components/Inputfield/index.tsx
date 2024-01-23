import { FC, HTMLAttributes } from 'react'
import { $Inputfield } from './styles'

export const Inputfield: FC<HTMLAttributes<HTMLInputElement>> = ({ ...props }) => <$Inputfield {...props} />