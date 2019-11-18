import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';

import JobsList from "./components/jobsList";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

function language() {
    if (navigator.language.includes("es")) {
        return localeEsMessages;
    } else if (navigator.language.includes("en")) {
        return localeEnMessages;
    }

}

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages={language()}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);

