// Your code here
function mapToNegativize(sourceArray){
return sourceArray.map(x => x * -1)
}

function mapToNoChange(sourceArray){
    return sourceArray.map(x => x)
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => 2 * x)
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => x * x)
}

function reduceToTotal(sourceArray, startingPoint = 0 )  {
 const reducer = function(accumulator, currentvalue)
{return accumulator + currentvalue}
return sourceArray.reduce(reducer, startingPoint)
}

function reduceToAllTrue  (sourceArray) {
    const reducer = function(accumulator, currentvalue){
        if(!!accumulator == true && !!currentvalue == true){
            return true;
        }else{
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

    
function reduceToAnyTrue (sourceArray)  {
    const reducer = function(accumulator, currentvalue){
        if(accumulator == true){
            return true
        }else{
            return !!currentvalue
        }
    }
    return sourceArray.reduce(reducer, false)
}
