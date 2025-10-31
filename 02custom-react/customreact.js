let mainContainer = document.querySelector("#root");

let reactElement = {
    type : "a",
    props : {
        href : "https://www.google.com",
        target : "_main"
    },
    children : "Click Me to Visit Google"
}

function costomRender(reactElement, mainContainer) {
    /* let element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    element.setAttribute('href', reactElement.props["href"]);
    element.setAttribute('target', reactElement.props.target);
    mainContainer.appendChild(element); */ 

    let element = document.createElement(reactElement.type);

    element.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop === 'childern') continue;

        element.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(element);
}

costomRender(reactElement, mainContainer);