
const format_check = (state, fieldName, fieldValue) =>{
    let result = "";
    if(fieldName === "userName"){
        if (fieldValue.length > 24 || fieldValue.length < 4)
            result = "* Length should be more than 3 and lower than 25";
    }
    else if(fieldName === "fullName"){
        if (fieldValue.length > 24 || fieldValue.length < 1)
            result = "* Length should be more than 0 and lower than 25"; 
    }
    else if(fieldName === "email"){
        if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(fieldValue)))
            result = "* Email pattern is not correct"; 
    }
    else if(fieldName === "password"){
        if (fieldValue.length < 6)
            result = "* Length should be more than 5";
    }
    else if(fieldName === "cfPassword"){
        if (fieldValue !== state.status["password"])
            result = "* Not the same password";
        if (fieldValue.length < 6)
            result = "* Length should be more than 5";
    }
    return result;
}


export {format_check};
