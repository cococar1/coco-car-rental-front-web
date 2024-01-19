import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { ButtonSecondaryContainer } from './buttonSecondary'

export const ButtonSecondarylUI = ({ ...props }) => {
  return (
    <ButtonSecondaryContainer style={props.sx} ref={props.btnRef} {...props}>
      {props.startIcon && (
        <span className='button-startIcon'>{props.startIcon}</span>
      )}
      {props.loading && (
        <span className='button-startIcon'>
          <AiOutlineLoading3Quarters />
        </span>
      )}
      {props.children}
      {props.endIcon && <span className='button-endIcon'>{props.endIcon}</span>}
    </ButtonSecondaryContainer>
  )
}
