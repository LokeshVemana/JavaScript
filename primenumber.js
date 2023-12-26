//Even Number//
var num=7;
if(num % 2 ===0){
    console.log("Its an even number");
}
else{
    console.log("its an odd number")
}
//Marriage Eligibility//
var gender='M'
age=21;
if(gender === 'M'){
    if(age >= 21){
        console.log("Eligible for marriage boy")
     } else {
            console.log("Not Eligible for marriage boy")
        }
    }
    if(gender === 'F'){
        if(age >=18){
            console.log("Eligible for marriage girl")
        } else{
            console.log("Not Eligible for marriage girl")
        }
    }
    //Prime Number//
    var num=9;
    if(num %2 ===0 && num % 9 ===0){
        console.log("num is a prime number");
    }else {
        console.log("num is not a prime number")
    }
    //Month//
    var month="March"

    switch(month){
        case "Jan":
        console.log(month);
        break;
        case "Feb":
            console.log(month);
            break;
            case "March":
            console.log(month);
            break;
            case "April":
                console.log(month);
                break;
                case "may":
                    console.log(month);
                    break;
                    case "June":
                    console.log(month);
                    break;
                    case "July":
                        console.log(month);
                        break;
                        case "Aug":
                            console.log(month);
                            break;
                            case "sep":
                            console.log(month);
                            break;
                            case "oct":
                                console.log(month);
                                break;
                                case "Nov":
                                    console.log(month);
                                    break;
                                    case "Dec":
                                        console.log(month);
                                        break;
                                        default :
                                        console.log("Not a Month");
    }

    
