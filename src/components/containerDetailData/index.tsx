import {
  ContainerDetailDataElement,
  ContainerIcon,
  DetailDataElementText
} from './containerDetailData.style'
enum PositionIcon {
  left = 'left',
  right = 'right'
}
interface ContainerDetailDataProps {
  positionIcon: string
  SvgIcon: any
  title: string
  description: string
}

const ContainerDetailData: React.FC<ContainerDetailDataProps> = ({
  positionIcon,
  SvgIcon
}: ContainerDetailDataProps) => {
  return (
    <ContainerDetailDataElement>
      {positionIcon == 'right' && (
        <ContainerIcon>
          <SvgIcon />
        </ContainerIcon>
      )}

      <DetailDataElementText>
        <h2
          style={
            positionIcon == 'right'
              ? { textAlign: 'left' }
              : { textAlign: 'right' }
          }
        >
          Propuesta de variedad de autos
        </h2>
        <p
          style={
            positionIcon == 'right'
              ? { textAlign: 'left' }
              : { textAlign: 'right' }
          }
        >
          Lorem ipsum dolor sit amet consectetur. Vivamus quam at dui tristique.
        </p>
      </DetailDataElementText>
      {positionIcon == 'left' && (
        <ContainerIcon>
          <SvgIcon />
        </ContainerIcon>
      )}
    </ContainerDetailDataElement>
  )
}

export default ContainerDetailData
