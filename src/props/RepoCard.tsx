// RepoCard.tsx
import axios from "axios";
import React from "react";
import dotenv from 'dotenv';
dotenv.config();

interface RepoCardProps {
  repo: {
    id: string;
    name: string;
    description: string;
    stargazers_count: number;
    language: string;
    html_url: string;
  };
  accessToken: string | undefined;
  onDelete: () => void;
}

const accessToken = process.env.REACT_APP_ACCESS_KEY;


const RepoCard: React.FC<RepoCardProps> = ({ repo,onDelete }) => {

    const {name } = repo;


    const handleDelete = async () => {
        if (window.confirm(`Are you sure you want to delete the repository Yusufola157/${name}?`)) {
            try {
                const response = await axios.delete(`https://api.github.com/repos/Yusufola157/${name}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (response.status === 204) {
                    console.log(`Repository Yusufola157/${name} deleted successfully.`);
                    onDelete(); // Call the onDelete callback function if repository is successfully deleted
                } else {
                    console.error('Unexpected response status:', response.status);
                }
            } catch (error) {
                console.error('Error deleting repository:', error);
            }
        }
    };
    



  return (
    <div className="border w-[250px] p-[20px] h-[180px] rounded-md shadow-md ml-[20px] bg-[#e4e1e1cb] flex flex-col justify-between">
      <h2 className="font-bold text-lg mb-2">{repo.name}</h2>
      <p className="text-gray-700 mb-2">{repo.description}</p>
      <div className="flex justify-between">
        <p className="text-gray-600">{repo.language}</p>
        <p className="text-gray-600">Stars: {repo.stargazers_count}</p>
      </div>
      <div className="w-[100px] h-[20px]  bg-[red] text-white mr-[10px] text-[13px] flex justify-center items-center cursor-pointer hover:bg-[blue]" onClick={handleDelete}>Delete Repo</div>
    </div>
  );
};

export default RepoCard;
