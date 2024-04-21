// api/github.ts
import axios from "axios";
// import process from 'procees'
import dotenv from 'dotenv';
dotenv.config();


const baseURL = "https://api.github.com/users/Yusufola157/repos";
const baseURLSingle = "https://api.github.com/repositories";
const baseURLPost = "https://api.github.com";

const accessToken = process.env.REACT_APP_ACCESS_KEY;



interface Iuser{
    name:string,
    description:string,
}

export const fetchRepositories = async () => {
    try {
      const response = await axios.get(baseURL, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching repositories: ", error);
      return [];
    }
  };





// export const fetchRepositories = async () => {
//   try {
//     const response = await axios.get(baseURL);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching repositories: ", error);
//     return [];
//   }
// };


export const  singleRepo = async (id: string) => {
    try {
      const response = await axios.get(`${baseURLSingle}/${id}`, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      });
      return response.data;
    } catch (error:any) {
      console.error(`Error fetching repository: ${id}`, error.response.status);
      return null;
    }
  };
//   console.error("Error fetching repository: ", error.response.status);
//   return null;
// export const fetchRepository = async (id: string) => {
//   try {
//     const response = await axios.get(`${baseURL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching repository: ", error);
//     return null;
//   }
// };

export const createRepository = async(details:Iuser)=>{
    try{
     const response = await axios.post(`${baseURLPost}/user/repos`,{
        details
     },{
        headers:{
            Authorization: accessToken, Accept:'application/vnd.github.v3+json'
        }
     })
     console.log('Repository created successfully:', response.data)
    }catch (error:any){
      console.error('Error creating repo:', error.response.data)
    }
}