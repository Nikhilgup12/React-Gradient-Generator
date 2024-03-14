// Write your code here
import {List, DirectionButton} from './styledComponents'
const GradientDirectionItem = props => {
  const {item, clickDirectionBtn, isActive} = props
  const {displayText, directionId, value} = item
  const onClickDirectionBtn = () => {
    clickDirectionBtn(directionId, value)
  }
  const active = isActive

  return (
    <>
      <List>
        <DirectionButton activeClass={active} onClick={onClickDirectionBtn}>
          {displayText}
        </DirectionButton>
      </List>
    </>
  )
}

export default GradientDirectionItem
