import { ButtonLabel, ImageButton } from "../../components/Button";
import { SmallTag, Tags } from "../../components/Tags";
import { StyledSchoolDetails } from "./SchoolDetails.styles";
import back from '../../assets/back.png'

const SchoolDetails = ({setSelectedSchool}) => {

  return (
    <StyledSchoolDetails>
      <header>
        <div className="app-bar">
          <h1>Nome da Escola</h1>
          <ImageButton 
            icon={back}
            size="16px"
            className="back-btn"
            onClick={() => setSelectedSchool(null)}
          >
            <ButtonLabel>voltar</ButtonLabel>
          </ImageButton>
        </div>
        <div className="info">
          <Tags>
            <SmallTag>
              Nome Social
            </SmallTag>
            <SmallTag>
              Banheiro inclusivo
            </SmallTag>
          </Tags>
          <div className="grade">
            4,5
          </div>
        </div>
      </header>
    </StyledSchoolDetails>
  )
}

export default SchoolDetails;
