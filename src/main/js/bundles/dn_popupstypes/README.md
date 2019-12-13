# dn_popupstypes

The Time Slider bundle allows to configure popup templates in a central place and to reuse them more often.

## Usage
**Requirement: map.apps 4.4.0**

1. First you need to add the bundle dn_popupstypes to your app.
2. Then you need to configure your own popupTemplates in the Config component.
3. After that you can use the popupTemplates inside the layer configuration:

```json
"layers": [
    {
        "title": "${map.koeln2.libraries.title}",
        "url": "https://services.arcgis.com/ObdAEOfl1Z5LP2D0/arcgis/rest/services/Köln/FeatureServer/1",
        "type": "AGS_FEATURE",
        "visible": true,
        "popupTemplate": {
            "popupType": "koeln"
        }
    },
    ...
]
```

## Configuration Reference

### Config

#### Sample configuration
```json
"Config": [
    {
        "type": "koeln",
        "template": {
            "title": "{NAME}",
            "content": [
                {
                    "type": "fields",
                    "fieldInfos": [
                        {
                            "fieldName": "NAME_LANG",
                            "label": "${common.name}"
                        },
                        {
                            "fieldName": "ADRESSE",
                            "label": "${common.address}"
                        },
                        {
                            "fieldName": "STADTBEZIR",
                            "label": "${common.precint}"
                        },
                        {
                            "fieldName": "POSTLEITZA",
                            "label": "${common.zip}"
                        },
                        {
                            "fieldName": "HYPERLINK",
                            "label": "${common.furtherinfo}"
                        }
                    ]
                }
            ]
        }
    },
    {
        "type": "playgrounds",
        "template": {
            "title": "{Typ}",
            "content": [
                {
                    "type": "text",
                    "text": "${map.koeln3.playgrounds.text}"
                }
            ]
        }
    },
    {
        "type": "districts",
        "template": {
            "title": "{STV_NAME}",
            "content": [
                {
                    "type": "text",
                    "text": "${map.koeln1.districts.text}"
                }
            ]
        }
    },
    {
        "type": "areas",
        "template": {
            "title": "{NAME}",
            "content": [
                {
                    "type": "fields",
                    "fieldInfos": [
                        {
                            "fieldName": "expression/area",
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        },
                        {
                            "fieldName": "expression/area-rel",
                            "format": {
                                "places": 2,
                                "digitSeparator": true
                            }
                        }
                    ]
                }
            ],
            "expressionInfos": [
                {
                    "name": "area",
                    "title": "${common.area}",
                    "expression": "$feature.FLAECHE / 10000"
                },
                {
                    "name": "area-rel",
                    "title": "${common.totalArea}",
                    "expression": "Round(($feature.FLAECHE / 405020000)*100,2)"
                }
            ]
        }
    }
]
```

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
