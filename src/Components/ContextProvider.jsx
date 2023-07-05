import React from 'react';
import WelcomePage from './Welcomepage';
import Consumer1 from './Consumer1';
import Consumer2 from './Consumer2';
import { Provider } from './Context';

export default function ContextAPI() {

    return (
        <Provider value={{ name: "James", id: "007" }}>
            <p>
                The previous version of Context Api was experimental whereas the new version in React 16+ is more stable and efficient. Context API is used to pass global variables anywhere in the code.
                It helps when there is a need for sharing state between a lot of nested components. It is light in weight and easier to use, to create a context just need to call React.createContext().
                No need to install other dependencies or third-party libraries like redux for state management.
                It has two properties Provider and Consumer. The Provider acts as a parent it passes the state to its children whereas the Consumer uses the state that has been passed.
            </p>
            <WelcomePage />
            <hr />
            <Consumer1 />
            <hr />
            <Consumer2 />
        </Provider>
    );
}
