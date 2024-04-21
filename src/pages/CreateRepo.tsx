import React,{useState} from "react"
import axios from "axios"
import Swal from "sweetalert2";


// const GITHUB_API_URL ='https://api.github.com';
const GITHUB_API_URL ='https://api.github.com';

interface CreateRepositoryFormProps {
    onSuccess : ()=> void;
}
const accessToken =import.meta.env.VITE_API_KEY_SEC;

const CreateRepoForm:React.FC<CreateRepositoryFormProps> = ({onSuccess})=>{
 
    const[name,setName] = useState('');
    const[description,setDescription] = useState('')
  
    const createRepository = async()=>{
        try {
           const response =  await axios.post(`${GITHUB_API_URL}/user/repos`,{
                name,
                description,
                private:false,
            },{
                headers:{
                    Authorization:accessToken,Accept:'application/vnd.github.v3+json'
                }
            });
            onSuccess();
            setName('');
            setDescription('');
              // Display success message using SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Repository Created',
            text: 'Your repository has been successfully created!',
        });
            return response.data;
        } catch (error) {
            console.error('Error creating repo',error)
            
        // Display error message using SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while creating the repository. Please try again later.',
        });
        }
    }

    return(
        <div>
        <div className="flex flex-col">
            <input type="text" placeholder="To see the name of this repo you are about to input you need to start from letter(A-H)" className="mb-[20px] h-[35px] pl-[5px] outline-none" onChange={(e)=> setName(e.target.value)}/>
            <textarea name="" id="" placeholder="Enter Description"  cols={30} rows={10} className="p-[5px] resize-none outline-none" onChange={(e)=> setDescription(e.target.value)}></textarea>
            <div className="flex w-[100%] justify-between">
            <div className="w-[200px] h-[40px] rounded-[10px] bg-[#261961] text-white mr-[10px] flex justify-center items-center cursor-pointer mt-[30px]" onClick={createRepository}>
                Create Repo
            </div>
            <div className="w-[200px] h-[40px] rounded-[10px] bg-[#6d6d6e] text-white mr-[10px] flex justify-center items-center cursor-pointer mt-[30px]">
                See All Repo
            </div>
            </div>
        </div>
      </div>
    )
}
export default CreateRepoForm;