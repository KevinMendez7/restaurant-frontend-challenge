import styled from "styled-components";
import { specificSize } from "../../../utils/devicesSizeValidation";

const Form = ({ submitReview, onChangeName, onChangeComment, name, comment }) => {
  return (
    <CustomForm onSubmit={submitReview}>
      <Label>Nombre:</Label>
      <InputName type="text" value={name} required minLength='5' name="name" onChange={onChangeName}/>
      <Label>Comentario:</Label>
      <InputComment type="text" value={comment} required minLength='10' rows="6" cols="100" name="comment" onChange={onChangeComment}/>
      <Button type='submit'>Enviar</Button>
    </CustomForm>
  );
}

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  
  @media only screen and ${specificSize.laptop} {
    
  }

  @media only screen and ${specificSize.tablet} {
    
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 15px;
    font-weight: bold;
  }  
`;

const Label = styled.label`
  color: #ff9900;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 25px;
  
  
  @media only screen and ${specificSize.laptop} {
    font-size: 25px;
    font-weight: bold;
  }

  @media only screen and ${specificSize.tablet} {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  
`;

const InputName = styled.input`
  
  width: 20%;
  line-height: 20px;  
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;

  @media only screen and ${specificSize.laptop} {
    font-size: 16px;
    line-height: 25px;  
    width: 20%;
    padding: 5px;
  }

  @media only screen and ${specificSize.tablet} {
    font-size: 15px;
    line-height: 17px;  
    padding: 8px;
    margin-top: 6px;
    
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 14px;
    margin: 0;
    padding: 5px;
    line-height: 10px;  
  }  
`;

const InputComment = styled.textarea`
  
  width: 60%;
  line-height: 20px;  
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;

  @media only screen and ${specificSize.laptop} {
    font-size: 16px;
    line-height: 25px;  
    width: 70%;
    padding: 5px;
  }

  @media only screen and ${specificSize.tablet} {
    font-size: 15px;
    line-height: 17px;  
    padding: 8px;
    margin-top: 6px;
    
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 14px;
    margin: 0;
    line-height: 15px;  
  }  
`;

const Button = styled.button`
  background: #ff9900;
  color: #fff;
  width: 10%;
  margin-top: 40px;
  margin-bottom: 15px;
  margin-left: 5px;
  padding: 5px;
  border-color: #ffd391;
  font-size: 20px;
  
  @media only screen and ${specificSize.laptop} {
    font-size: 20px;
    padding: 5px;
    width: 12%;
  }

  @media only screen and ${specificSize.tablet} {
    font-size: 20px;
    padding: 3px;
    width: 16%;
    margin-top: 20px;
  }

  @media only screen and ${specificSize.mobile} {
    font-size: 15px;
    padding: 5px;
    width: 30%;
  }  
`;

export default Form;