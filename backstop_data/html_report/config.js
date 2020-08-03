report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Homepage_0_document_0_tablet.png",
        "test": "../bitmaps_test/20200803-154259/backstop_default_Homepage_0_document_0_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Homepage_0_document_0_tablet.png",
        "label": "Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4200/home",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_World_0_document_0_tablet.png",
        "test": "../bitmaps_test/20200803-154259/backstop_default_World_0_document_0_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_World_0_document_0_tablet.png",
        "label": "World",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4200/world",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Country_0_document_0_tablet.png",
        "test": "../bitmaps_test/20200803-154259/backstop_default_Country_0_document_0_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Country_0_document_0_tablet.png",
        "label": "Country",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4200/country/EGY",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -3165
          },
          "misMatchPercentage": "11.61",
          "analysisTime": 488
        },
        "diffImage": "../bitmaps_test/20200803-154259/failed_diff_backstop_default_Country_0_document_0_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Specie_0_document_0_tablet.png",
        "test": "../bitmaps_test/20200803-154259/backstop_default_Specie_0_document_0_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Specie_0_document_0_tablet.png",
        "label": "Specie",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4200/specie/OYC",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -1899
          },
          "misMatchPercentage": "15.17",
          "analysisTime": 420
        },
        "diffImage": "../bitmaps_test/20200803-154259/failed_diff_backstop_default_Specie_0_document_0_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Use_0_document_0_tablet.png",
        "test": "../bitmaps_test/20200803-154259/backstop_default_Use_0_document_0_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Use_0_document_0_tablet.png",
        "label": "Use",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4200/use",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -2743
          },
          "misMatchPercentage": "11.81",
          "analysisTime": 391
        },
        "diffImage": "../bitmaps_test/20200803-154259/failed_diff_backstop_default_Use_0_document_0_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Policies_0_document_0_tablet.png",
        "test": "../bitmaps_test/20200803-154259/backstop_default_Policies_0_document_0_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Policies_0_document_0_tablet.png",
        "label": "Policies",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4200/policies",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -1266
          },
          "misMatchPercentage": "11.12",
          "analysisTime": 266
        },
        "diffImage": "../bitmaps_test/20200803-154259/failed_diff_backstop_default_Policies_0_document_0_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});