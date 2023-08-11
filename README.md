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
   
