import Home from '../layout/Home';

const routes = [
    { 
        path: '/sharepoint-getting-started', 
        url: './json/sharepointintro.json', 
        progress: 'sharepointIntro' 
    },
    { 
        path: '/using-macros', 
        url: './json/macros.json', 
        progress: 'macros' 
    },
    { 
        path: '/data-storage', 
        url: './json/datastorage.json', 
        progress:'dataStorage'
    },
    { 
        path: '/sona-getting-started', 
        url: './json/sonaintro.json', 
        progress: 'sonaIntro'
    },
    { 
        path: '/qualtrics-getting-started', 
        url: './json/qualtricsintro.json', 
        progress: 'qualtricsIntro',
        redirectMsg: 'Proceed to exporting data', 
        redirectUrl: '/qualtrics-export'
    },
    { 
        path: '/qualtrics-export', 
        url: './json/qualtricsexport.json',
        progress: 'qualtricsExport',

    },
    { 
        path: '/eprime-testing', 
        url: './json/eprimecollection.json',
        progress: 'eprimeTesting',
    },
    { 
        path: '/eprime-preprocess', 
        url: './json/eprimepreprocessing.json' ,
        progress: 'eprimePreprocess',
    },
    { 
        path: '/psychophys-testing', 
        url: './json/psychophyscollection.json',
        progress: 'psychophysTesting',

    },
    { 
        path: '/psychophys-preprocess-p1', 
        url: './json/psychophysp1.json', 
        redirectMsg: 'Proceed to p2', 
        redirectUrl: '/psychophys-preprocess-p2', 
        progress: 'psychophysPreprocess1'
    },
    { 
        path: '/psychophys-preprocess-p2', 
        url: './json/psychophysp2.json',
        progress: 'psychophysPreprocess2',
    },
    { 
        path: '/', 
        Component: Home 
    },
  ]

  export default routes