import axios from 'axios';

export default function (config)
{
  const instance = axios.create({
    baseURL: "/mall",
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
    return config;
  }, error => {

  });

  instance.interceptors.response.use(res => {
    return res.data;
  }, error =>{

  });

  return instance(config);
}
