import {ButtonListContainer, ButtonImage, ImageItem} from './styledComponents'

const Buttons = props => {
  const {buttonDetails, onGetId} = props
  const {id, image} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, image)
  }

  return (
    <ButtonListContainer>
      <ButtonImage
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={image} alt={id} />
      </ButtonImage>
    </ButtonListContainer>
  )
}

export default Buttons
