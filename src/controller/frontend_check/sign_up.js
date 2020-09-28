import {checkExistByUserName} from '../api_check/sign_up'

const format_check = (state, fieldName, fieldValue) =>{
    let result = "";
    if(fieldName === "userName"){
        if (fieldValue.length > 24 || fieldValue.length < 4)
            result = "* Length should be upper than 3 and lower than 25";
    }
    else if(fieldName === "fullName"){
        if (fieldValue.length > 24 || fieldValue.length < 1)
            result = "* Length should be upper than 0 and lower than 25"; 
    }
    else if(fieldName === "email"){
        if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(fieldValue)))
            result = "* Email pattern is not correct"; 
    }
    else if(fieldName === "password"){
        if (fieldValue.length < 6)
            result = "* Length should be upper than 5";
    }
    else if(fieldName === "cfPassword"){
        if (fieldValue !== state.status["password"])
            result = "* Not the same password";
    }
        return result;
}

const ifDataExist = async function(fieldName, fieldValue){
    let result = "";    
    if (fieldName === "userName"){
        if (fieldValue.length < 25 && fieldValue.length > 3){
            result = await checkExistByUserName(fieldValue)
            .then((response)=>{
                if (response.data.results === true)
                    return "* Someone has registered this user name.";
                return "";
            });
        }
    };
    return result;
}

export {format_check, ifDataExist};