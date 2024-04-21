// SingleRepo.tsx
import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleRepo } from "../../api/api";
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.jpg"


const SingleRepo = () => {


  const { id } = useParams<{ id: any }>();
  const [repo, setRepo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    singleRepo(id).then((data) => {
      setRepo(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-[100%] py-[50px] flex justify-center items-center flex-col">
    <div className="flex flex-col items-center mb-[50px]">
     <div className="text-[23px] tracking-widest">I DONT STOP MY PAST. I LIKE NEW WORK</div>
     <div className="text-[20px] tracking-widest">I LIKE WHAT IM DOING TOMORROW</div>
    </div>
    {/* <div> */}
    {/* </div> */}
    <div className="relative w-[100%] h-[450px]">
     <div className="flex absolute left-[10%]">
      <div className="bg-cover bg-center w-[150px] h-[180px] mt-[20px] filter grayscale-[10]" style={{backgroundImage:`url(${p1})`}}></div>
      <div className="flex justify-start mx-[10px]">
         <div className="bg-cover bg-center w-[250px] h-[250px] mr-[10px] filter grayscale-[10]" style={{backgroundImage:`url(${p4})`}}></div>
         <div className="bg-cover bg-center w-[250px] h-[350px] mr-[10px] filter grayscale-[10]" style={{backgroundImage:`url(${p5})`}}></div>
         <div className="bg-cover bg-center w-[250px] h-[250px] filter grayscale-[10]" style={{backgroundImage:`url(${p3})`}}></div>
      </div>
      <div className="bg-cover bg-center w-[150px] h-[180px] mt-[20px] filter grayscale-[10]" style={{backgroundImage:`url(${p2})`}}></div>
     </div>
     <div className="absolute text-white text-[100px] left-[26%] tracking-widest">SINGLE PAGE</div>
    </div>
     <div className="flex justify-start flex-col w-[380px] bg-[#5a3c3c] h-[250px] p-[10px]">
     <h1 className="text-2xl font-bold mb-4">{repo?.name}</h1>
      <p>{repo?.description}</p>
      <p>Stars: {repo?.stargazers_count}</p>
      <p>Language: {repo?.language}</p>
      <div className="">URL: {repo?.html_url}</div>
     </div>
    </div>
  );
};

export default SingleRepo;
