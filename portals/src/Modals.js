
import { createPortal } from "react-dom"

/*
Sometiems we may need to render our components outside the 'root' element.
it is used when we use 'modal' in our website. modal is a message box contains
information and pops up when some sorts of action is done on website. Modals 
appear at the top of the web page because they have different css style which makes
them look different. These modals cannot be part of the page, means the <div></div>
element for these modals should be different that the <div></div> elements of the
page.
So, if we put the portals inside the root element, it will not get the different
styling and standout.

Portal allows developers to add elements to a <div></div> which is other that 'root'
<div></div> elemtn.
How?
Go the the index.html, and under the <div id="root"></div> create another div witi id
like so:
<div id="modal"></div>

Then create the component and import the create portal at the top like so:
import { createPortal } from "react-dom"

Then we need to return createPortal like so:

function Modal() {
    return createPortal(
        <div>
            Modal
        </div>,document.getElementById('modal')
    )
}
*/

function Modal() {
    return createPortal(
        <div>
            Modal
        </div>,document.getElementById('modal')
    )
}


export default Modal;