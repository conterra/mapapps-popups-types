[![devnet-bundle-snapshot](https://github.com/conterra/mapapps-popups-types/actions/workflows/devnet-bundle-snapshot.yml/badge.svg)](https://github.com/conterra/mapapps-popup-types/actions/workflows/devnet-bundle-snapshot.yml)
![Static Badge](https://img.shields.io/badge/requires_map.apps-4.4.0-e5e5e5?labelColor=%233E464F&logoColor=%23e5e5e5)
![Static Badge](https://img.shields.io/badge/tested_for_map.apps-4.18.1-%20?labelColor=%233E464F&color=%232FC050)
# Popups Types Bundle
The Popups Types bundle allows to configure popup templates in a central place and to reuse them more often.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_popupstypes/index.html

## Installation Guide

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
