# Popups Types Bundle
The Popups Types bundle allows to configure popup templates in a central place and to reuse them more often.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_popupstypes/index.html

## Installation Guide
**Requirement: map.apps 4.4.0**

[dn_popupstypes Documentation](https://github.com/conterra/mapapps-popups-types/tree/master/src/main/js/bundles/dn_popupstypes)

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
