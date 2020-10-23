
const format_check = (fieldName, fieldValue) =>{
    let result = "";
    if(fieldName === "account"){
        if (fieldValue.length < 4)
            result = "* Length should be more than 3";
    }
    else if(fieldName === "password"){
        if (fieldValue.length < 6)
            result = "* Length should be more than 5";
    }
    return result;
}


export {format_check};
