const fs = require("fs");

const readAndParseDataFromFile = () => {
  //read file
  const data = fs.readFileSync("./data/API.json");
  //convert to javascript object to operate
  const API = JSON.parse(data); //buffer format se object format me kiya
  return API;
};

const getAPIData = () => {
  const { APIList } = readAndParseDataFromFile(); 
  return APIList;
  // console.log('APIList', APIList)
};

const addDataInAPI = (data) => {
  //read file
  const APIObject = readAndParseDataFromFile(); 
  console.log('data from API', APIObject)

  //add the product in the array
  // const updatedAPIList =[...API.APIList, api];
  // API.APIList = updatedAPIList;
  //OR
  APIObject.APIList.push(data);

  //save the array in the file again
  try{
    fs.writeFileSync('./data/API.json',JSON.stringify(APIObject, '', 3))
    return true
  }catch(e){
    console.log(e.message);
    return false;
  }

};

module.exports = { getAPIData, addDataInAPI };
