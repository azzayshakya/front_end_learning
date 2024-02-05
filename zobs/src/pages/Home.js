import {React, useState,useEffect} from 'react'
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import {} from '../Css/Home.css'
import Card from '../component/Card';
import Jobs from './Jobs';
import SideBar from '../SideBar/SideBar';

const Home =()=>{

    //for the search in banner
    const [query ,setquery]=useState("");
    const handleSearch=(event)=>{
        setquery(event.target.value);
    }


    // for the home page

    const[selectedCategory,setselectedCategory] =useState();
    const [jobs,setjobs]=useState([]);

    const fetchjobdata=async()=>{
        try{

            const response=await fetch("jobs.json")
            const jobdata=  await response.json();
            setjobs(jobdata);
            // console.log(jobdata)
        }
        catch(error){
            console.log(error)

        }
        finally{
        }

    }
    useEffect(() => {
        fetchjobdata();
    
    }, [])

    const filterdItem=jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!==-1)
    // console.log(filterdItem)

    // for the radio filtration
    const handleChange=(event)=>{
        setselectedCategory(event.target.value)
    }

    //  hakdle button based filtration
    const handleClick=(event)=>{
        setselectedCategory(event.target.value)
    }
    
    //  main funcction
    const filterdData=(jobs,selected,query)=>{
        let filteredJobs =jobs;
        if(query){
            filteredJobs= filterdItem;
        }
        // catagoring filtraion
        if (selected) {
            filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, employementType }) => {
                return (
                    jobLocation.toLowerCase() === selected.toLowerCase() ||
                    parseInt(maxPrice) === parseInt(selected) ||
                    employementType.toLowerCase() === selected.toLowerCase()
                );
            });
            console.log(filteredJobs);
        }

        return filteredJobs.map((data,i)=><Card key={i} data={data}/>)  
    }

    const result=filterdData(jobs,selectedCategory,query);

 
 
    return <>
    <div className='homeMain'>
        

        
        <div>
            <Navbar/>
            <Banner query={query} handleSearch={handleSearch}/>
        </div>
        {/* main */}
    
    </div>

    <div className='mainContainerHome'>

            <div className="leftHome">
               {/* <SideBar handleChange={handleChange} handleClick={handleClick}/> */}
            </div>
            <div className="midContainer">
            <Jobs result={result}/>
            </div>
            <div className="rightHome">
                {/* right */}
            </div>

         
           
        </div>
   
    </>
}
export default Home;