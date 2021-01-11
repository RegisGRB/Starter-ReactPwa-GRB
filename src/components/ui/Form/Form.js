import React from "react";
import { StyledTheme } from "../../StyledComponents";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { helpers } from "../../../utils";
const Form = ({
  UrlAPI,
  Fields,
  Action,
  Redirect,
  className = "GrbForm",
  props,
}) => {
  const history = useHistory();
  const [FormState, SetFormState] = React.useState(Fields);
  const submit = (e) => {
    e.preventDefault();
    if (UrlAPI) {
      APICALL();
    } else {
      console.log(FormState);
      Action(FormState);
      history.push(Redirect);
    }
  };

  const APICALL = () => {
    axios({
      method: "Post",
      url: UrlAPI,
      data: JSON.stringify(FormState),
    })
      .then((res) => {
        Action(res);
        history.push(Redirect);
      })
      .catch((err) => {
        console.log(err);
      });
  };
React.useEffect(()=>{
  SetFormState(Fields);
},[Fields])
  const FormGenerator = () => {
    const elements = [];
    for (let field in FormState) {
      elements.push(
        <div
          className={`inputFields ${
            FormState[field].type === "submit" ? "SubmitButton" : ""
          }`}
          key={helpers.generateKey(field)}
        >
          <StyledInput
            checked={FormState[field].checked}
            name={FormState[field].name}
            as={FormState[field].as ? FormState[field].as : "input"}
            type={FormState[field].type}
            id={field}
            pattern={`.{${
              FormState[field].minlength ? FormState[field].minlength : 0
            },${FormState[field].maxlength ? FormState[field].maxlength : ""}}`}
            size={FormState[field].size}
            placeholder={FormState[field].placeholder}
            fontcolorinvert="true"
            backgroundcolorinvert="true"
            required={FormState[field].required}
            value={FormState[field].value}
            onChange={(e) => {
              SetFormState({
                ...FormState,
                [field]: { ...FormState[field], value: e.target.value },
              });
              if(FormState[field].Change)
              FormState[field].Change(FormState[field].value);
            }}
            onClick={(e) => {
              if(FormState[field].Change)
              FormState[field].Change(FormState[field].value);
            }}
          ></StyledInput>
          {FormState[field].label ? (
            <label htmlFor={field}>{FormState[field].label}</label>
          ) : (
            ""
          )}
        </div>
      );
    }
    return elements;
  };
  return (
    <StyledForm onSubmit={submit} className={className}>
      {FormGenerator()}
    </StyledForm>
  );
};
const StyledForm = styled.form``;
const StyledInput = styled(StyledTheme)``;

export default Form;
// fields exemple
// const Fields =
//     {
//      UserName:{
//         type: "text",
//         placeholder: "UserName",
//         value:""
//       },
//       Password:{
//         type: "Password",
//         placeholder: "Password",
//         value:""
//       },
//       Email:{
//         type: "Email",
//         placeholder: "Email",
//         value:"",
//         required:true
//       },
//       Message:{
//         as:"Textarea",
//         type: "text",
//         placeholder: "Your Message",
//         value:""
//       },
//       Checkbox:{
//         label: "Checkbox",
//         type: "Checkbox",
//         placeholder: "",
//         value:""
//       },
//       Radio:{
//         checked:true,
//         name:"GRB",
//         label: "Radio",
//         type: "Radio",
//         placeholder: "",
//         value:""
//       },
//       Radio1:{
//         name:"GRB",
//         label: "Radio",
//         type: "Radio",
//         placeholder: "",
//         value:""
//       },
//     };
