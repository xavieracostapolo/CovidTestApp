import Bugsnag from '@bugsnag/js';

// This service initializes Bugsnag and makes it available to the root module.
// Below are examples of some possible configurations, but only the api apiKey is required to get started.
const bugsnagClient = Bugsnag.start({
    // get your own api key at bugsnag.com
    apiKey: '49f2f3ba4cc7c0d81263cee91c4f9d6c',

    // if you track deploys or use source maps, make sure to set the correct version.
    appVersion: '1.0.0',

    // Bugsnag can track the number of “sessions” that happen in your application, and calculate a crash rate
    // for each release. This defaults to false.
    autoTrackSessions: true,

    // defines the release stage for all events that occur in this app.
    // releaseStage: 'production',

    //  defines which release stages bugsnag should report. e.g. ignore staging errors.
    enabledReleaseStages: ['development', 'production'],

    // one of the most powerful tools in our library, beforeSend lets you evaluate, modify,
    // add and remove data on an error right before it is sent to bugsnag.
    // The actions here will be applied to *all* errors, handled and unhandled.
    // onError: (event) => {},

    // add any custom attributes relevant to your app. Note that metadata can be added here,
    // in a specific notify (example bleow) or in a beforeSend.
    metadata: {
        company: {
            name: 'Hogwarts School of Witchcraft and Wizardry'
        }
    },
    // N.B. our notifer automatically creates a metadata tab called "Angular" and populates it with component and context details.

    // attached any user data you'd like to report.
    user: {
        name: 'Xavier Acosta Polo',
        email: 'xacosta@test.com',
        id: '897897987'
    },

});

// review app.component.ts to see examples of how this client can interact with your code.
// See our documentation for futher options and examples https://docs.bugsnag.com/
export default bugsnagClient;
