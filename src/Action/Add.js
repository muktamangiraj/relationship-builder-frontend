import axios from "axios";

export const addUserAction = userData => {
  
  axios.create({
    baseURL: 'https://relationship-builder-backend.herokuapp.com/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  });
  var axiosConfig = {
                    headers: {
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                        'contentType' : "application/json",

                        // "Access-Control-Allow-Origin": "*",
                        'Accept': '*',
                    }
                };
  return axios.post("https://relationship-builder-backend.herokuapp.com/addRelation", userData, axiosConfig)
                .then((response) => {
                    console.log('response');
                    console.log(response);
                })
                .catch((error) => {
                    console.log('errorfdhjfghjkhgfdfghjkhgfdxfchkjgfxdfchj');
                    console.log(error);
                });
  };

  export const updateRelationAction = userData => {
//  console.log("topicData====> "+topicData);
  axios.create({
    baseURL: 'https://relationship-builder-backend.herokuapp.com/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  });
  var axiosConfig = {
                    headers: {
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                        'contentType' : "application/json",

                        // "Access-Control-Allow-Origin": "*",
                        'Accept': '*',
                    }
                };
  return axios
    .post("https://relationship-builder-backend.herokuapp.com/updateRelation", userData,axiosConfig)
    .then(res => {
      // console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};


export const getAllRelationAction = () =>  {
  return axios
    .get("https://relationship-builder-backend.herokuapp.com/getAllRelation")
    .then(res => {
      
      // console.log(res.data);
      return res.data;
    })
    .catch(err =>
      console.log(err)
    );
};