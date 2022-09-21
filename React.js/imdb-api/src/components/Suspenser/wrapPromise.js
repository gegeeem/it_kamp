export default function wrapPromise(promise) {
    let status = 'pending';
    let response;
  
    const suspender = promise.then(
      res => {
        status = 'success';
        response = res;
      },
      err => {
        status = 'error';
        response = err;
      },
    );
  
    const handler = {
      pending: () => {
        throw suspender;
      },
      error: () => {
        throw response;
      },
      default: () => response,
    };
  
    const read = () => {
      const result = handler[status] ? handler[status]() : handler.default();
      return result;
    };
  
    return { read };
  }
  
//   So the code above will check our promise's state, then return a function called read which we'll invoke later in the component.
  
//   Now we'll need to wrap our fetching library with it, in my case axios, in a very simple function:
//   //fetchData.js
  import axios from 'axios';
  import wrapPromise from './wrapPromise';
  
  /**
   * Wrap Axios Request with the wrapPromise function
   * @param {string} url Url to fetch
   * @returns {Promise} A wrapped promise
   */
  export default function fetchData(url) {
    const promise = axios.get(url).then(({data}) => data);
  
    return wrapPromise(promise);
  }
  
  