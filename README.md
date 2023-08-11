# react-tutorial
This repo contains all the basics and advanced topics in JavaScript React library.

![image](https://github.com/Hameedullah-Asadi3300/react-tutorial/assets/123219655/febea8e5-e56b-42f0-afcf-b55b857bc527)


##  jsx
    JSX stands for JavaScript XML which allows us to write HTML code and elements in React. JSX converts HTML tags into
    react elements.
    JSX converts HTML tags into react elements like so:
    const JSX = <h1>This is JSX</h1>


## React.memo
    The React.memo project explains the usage and purpose of using memos in react.
    Using memo will cause React to skip rendering a component if its props have not changed.
    This can improve performance and highly recommended while working in large apps espcially while there are tens of hundreds
    of nested child components.
    How?
    At the top of the component insert the react components like so:
    import React from 'react';
    Then while exporting the component which we do not want it to be rendered, export like so:
    export default React.memo(Child);
    This memo will memorize value of the targeted component, and will not allow it to be render while the parent component is
    rendered.


## Portal
    Sometiems we may need to render our components outside the 'root' element. it is used when we use 'modal' in our website.
    modal is a message box contains information and pops up when some sorts of action is done on website. Modals appear at the
    top of the web page because they have different css style which makes them look different.
    
    ![image](https://github.com/Hameedullah-Asadi3300/react-tutorial/assets/123219655/322f15da-b1b0-4d63-ac70-cf8de376bfe4)

    These modals cannot be part of the page, means the <div></div> element for these modals should be different that the <div></div> elements      of the page.
    So, if we put the portals inside the root element, it will not get the different styling and standout.
    Portal allows developers to add elements to a <div></div> which is other that 'root' <div></div> elemtn.
    How?
    Go the the index.html, and under the <div id="root"></div> create another div with id
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
    And nest it with App component. However it is nested with App component, but it is not part of the <div id="root"></div>.
