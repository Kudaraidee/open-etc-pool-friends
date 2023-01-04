/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
      modulePrefix: 'open-etc-pool',
      environment: environment,
      rootURL: '/',
      locationType: 'hash',
      EmberENV: {
        FEATURES: {
          // Here you can enable experimental features on an ember canary build
          // e.g. 'with-controller': true
        }
      },
  
      APP: {
        // API host and port
        ApiUrl: '//jbc.evepool.pw//',
  
        // HTTP mining endpoint
        HttpHost: 'http://jbc.evepool.pw',
        HttpPort: 8888,
  
        // Stratum mining endpoint
        StratumHost: 'jbc.evepool.pw',
        StratumPort: 8008,

        StratumHost_4g: 'jbc.evepool.pw',
        StratumPort_4g: 8009,
  
        NicehashHost: 'jbc.evepool.pw',
        NicehashPort: 8010,

        // The ETC network
        CoinName: 'JBC',
        Unit: 'JBC',

        // Fee and payout details
        PoolFee: '1%',
        PayoutThreshold: '0.01 JBC',
        BlockReward: 2,
  
        // For network hashrate (change for your favourite fork)
        BlockTime: 13.2
      }
    };
  
    if (environment === 'development') {
      /* Override ApiUrl just for development, while you are customizing
        frontend markup and css theme on your workstation.
      */
      ENV.APP.ApiUrl = 'http://localhost:8080/'
      // ENV.APP.LOG_RESOLVER = true;
      // ENV.APP.LOG_ACTIVE_GENERATION = true;
      // ENV.APP.LOG_TRANSITIONS = true;
      // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
      // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }
  
    if (environment === 'test') {
      // Testem prefers this...
      ENV.locationType = 'none';
  
      // keep test console output quieter
      ENV.APP.LOG_ACTIVE_GENERATION = false;
      ENV.APP.LOG_VIEW_LOOKUPS = false;
  
      ENV.APP.rootElement = '#ember-testing';
    }
  
    if (environment === 'production') {
  
    }
  
    return ENV;
  };
  