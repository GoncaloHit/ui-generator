export const config = {
  catalog: {
    devices: ['device_0', 'device_02', 'device_03'],
    flavours: ['flavour_01', 'flavour_02', 'flavour_03']
  },
  featureFlags: {
    login: false,
    register: false,
    cartcheckout: true,
    search: false,
  },
  deploy: {
    server: {
      host: 'localhost',
      port: 8000,
      params: ['param01', 'param02'],
      props: {
        prop1: {
          name: 'prop_name',
          option: 'option_prop_1'
        }
      }
    }
  },
  akamai: {
    origin: 'http://f2f360.com',
    routing: {
      home: '/ph/home.html',
      cart: '/ph/cart.html',
      params: {
        search: 'products',
        quantity: 30,
      }
    }
  },
  jenkins: {
    devUrl: 'http://app.qa.com',
    qaUrl: 'http://app.qa.com',
    prodUrl: 'http://app.qa.com',
  }
}