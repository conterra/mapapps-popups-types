# Popups Types Bundle
The Popups Types bundle allows to configure popup templates in a central place and to reuse them more often.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_popupstypes/index.html

## Installation Guide
**Requirement: map.apps 4.4.0**

[dn_popupstypes Documentation](https://github.com/conterra/mapapps-popups-types/tree/master/src/main/js/bundles/dn_popupstypes)

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
