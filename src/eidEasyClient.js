import createClient from '@eid-easy/eideasy-js-sdk';

const eidEasyClient = {
  install(Vue, options) {
    console.log(options);
    Vue.prototype.$eidEasyClient = createClient(options);
  }
}

export default eidEasyClient;
