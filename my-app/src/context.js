import {createContext} from 'react';

const dataContext = createContext({
    mail: "default.com",
    text: 'default',
    forceChangeMail: () => {}
});

export default dataContext;