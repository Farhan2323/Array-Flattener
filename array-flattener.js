// YOUR CODE BELOW

function arrayFlattener (originalArray){

    newArray = []

    for(i = 0; i < originalArray.length; i++){
        let element = originalArray[i]

        if (Array.isArray(element)){
           
            for(j = 0; j < element.length; j++){
                let nxElement = element[j]
                newArray.push(nxElement)
            }

        }else newArray.push(element)
    
    }
    return newArray


}







