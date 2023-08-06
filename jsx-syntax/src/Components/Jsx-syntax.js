import React from 'react';  //Imported react

/*XML
XML is a JavaScript extenstion for syntax. It can convert the JavaScript code/variable used inside in an XML as follows:
*/
//  Created a variable for later use in function
const library = "React";

//  Created a function to return the value stored in the variable above
function JsxSyntax() {
    return( 
        <div>
            <h3>
                What is jsx and xml syntax in JavaScript?
            </h3>         
            <p>XML is a JavaScript extenstion for syntax. It can convert the JavaScript code/variable
                used inside in an XML. To return a javaScript value inside the xml, we write down the
                property inside the curly braces.            
            </p>
            <p>{library} is the most powerful frontend library of JavaScript.</p>
        </div>
    )  
}
//  Exported the function component as default export
export default JsxSyntax; 