import api from './config/axios';


export const authenticationService = ({ data, success, errors, after}) => {
  api
    .get('https://react-etucz4.stackblitz.io/api/')
    .then((res) => success(res))
    .catch(({ response }) => {
      switch (response.status) {
        case 500:
          return errors['500'](response);
        case 401:
          return errors['401'](response);
      }

      return errors['unknown'](response);
    })
    .then(() => after && after());
};
