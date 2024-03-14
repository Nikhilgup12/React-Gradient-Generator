import {Component} from 'react'
import {
  MainConatiner,
  GradientContainer,
  MainHeading,
  DirectionPara,
  DirectionList,
  ColorContainer,
  GreenContainer,
  BlueContainer,
  FirstColorInput,
  SecondColorInput,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'
const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    activeTab: gradientDirectionsList[0].directionId,
    activeDirection: gradientDirectionsList[0].value,
    colorGradient: {},
  }

  onFirstColor = event => {
    const {firstColor} = this.state
    this.setState({firstColor: event.target.value})
    console.log(firstColor)
  }

  onSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onGenerate = () => {
    const {firstColor, secondColor, activeDirection} = this.state
    const colorGradient = {
      backgroundImage: `linear-gradient(to ${activeDirection}, ${firstColor}, ${secondColor})`,
    }
    this.setState({colorGradient})
  }

  clickDirectionBtn = (value, directionId) => {
    this.setState({activeTab: directionId, activeDirection: value})
  }

  render() {
    const {firstColor, secondColor, activeTab, colorGradient} = this.state

    return (
      <MainConatiner style={colorGradient}>
        <GradientContainer>
          <MainHeading> Generate a CSS Color Gradient </MainHeading>
          <DirectionPara> Choose Direction</DirectionPara>
          <DirectionList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                item={each}
                key={each.directionId}
                clickDirectionBtn={this.clickDirectionBtn}
                isActive={each.directionId === activeTab}
              />
            ))}
          </DirectionList>
          <DirectionPara> Pick the Colors </DirectionPara>
          <ColorContainer>
            <GreenContainer>
              <p> #8ae323 </p>
              <FirstColorInput
                type="color"
                value={firstColor}
                onChange={this.onFirstColor}
              />
            </GreenContainer>
            <BlueContainer>
              <p> #014f7b </p>
              <SecondColorInput
                type="color"
                value={secondColor}
                onChange={this.onSecondColor}
              />
            </BlueContainer>
          </ColorContainer>
          <GenerateButton onClick={this.onGenerate}> Generate </GenerateButton>
        </GradientContainer>
      </MainConatiner>
    )
  }
}

export default GradientGenerator
