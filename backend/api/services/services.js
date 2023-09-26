const axios = require('axios');
// import axios from 'axios';
const https = require('https');
// LIMS is authorized. Avoids certificate verification & "unable to verify the first certificate in nodejs" errors
const agent = new https.Agent({
  rejectUnauthorized: false,
});
// const req = require('request');
require('dotenv').config();

const LIMS_AUTH = {
  username: process.env.LIMS_USER,
  password: process.env.LIMS_PASSWORD,
};
const LIMS_URL = process.env.LIMS_URL;

const formatData = function (resp) {
  const data = resp.data || [];
  return data;
};

exports.getAssays = () => {
  const url = `${LIMS_URL}/getDdpcrAssays`;
  return axios
    .get(url, {
      auth: { ...LIMS_AUTH },
      httpsAgent: agent,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
    .then((response) => {
      return formatData(response);
    });
};
