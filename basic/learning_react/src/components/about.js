//rfc




import  statrReact,{useState} from 'react';


const About =(probps)=>{
    const [btntext, setbtntext] = useState(initialState){


    }



    const [mystyle, setmystyle] = useState({
        color:"whiite",
        background:"black"
    })

    const togglecolor =()=>{
        if(mystyle.color==='white'){
            setmystyle({
                            color:'black',
                    backgroundColor:'white'
                        })
                    }
            else{
               
                    setmystyle({
                                    color:'white',
                                    backgroundColor:'black'
                                })
            }
        }
    



    // const [newstyle,morestyle]=useState({
    //     width:'80%' ,
    //     marginLeft: '10%'      
    // })

    //  const [mystyle, setmystyle] = useState({

    //     color:'white',
    //     backgroundColor:'black'
    // })
    // const [btntext, setbtntext] = useState("enable dark mode")

    // const togglecolor=()=>{
       
    //     if( mystyle.color=='white'){
    //         setmystyle({
    //             color:'black',
    //     backgroundColor:'white'
    //         })
    //         morestyle({
    //             width:'100%',
    //             marginLeft: '-5%'
    //         })
    //         setbtntext("enable dark mode")
    //     }
    //     else{
           
    //             setmystyle({
    //                 color:'white',
    //         backgroundColor:'black'
    //             })
    //             morestyle({
    //                 width:'80%' ,
    //                 marginLeft: '10%'   
    //             })
    //             setbtntext("enable light mode")
        
    //     }
    // }
       
     
    return <div>
        <div className='main' >
            <h1 style={mystyle}>About me</h1>
            <div style={mystyle} className='lesgo'>
                <p style={mystyle} className='text'>
        ajay is here
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam commodi obcaecati, ea voluptatem ex ipsum cupiditate nisi alias culpa iste assumenda aperiam veniam, ducimus sequi atque quasi officia vitae labore blanditiis explicabo totam corrupti. Corporis impedit mollitia autem est atque id necessitatibus, explicabo ducimus laboriosam eos natus, aut, recusandae consequuntur itaque nam nesciunt odio hic! Iusto quisquam molestiae deleniti fugiat minima eaque quam, vel beatae provident quibusdam impedit itaque, eius ea tempora voluptate quaerat tempore reprehenderit recusandae est hic non praesentium, similique nam quis. Excepturi itaque libero quo dolore consequuntur, voluptas maxime omnis magnam natus harum, eos, labore veritatis. Nemo modi voluptatem fugit neque explicabo est perferendis accusantium! Voluptatibus id aliquam minus ullam iste dignissimos hic distinctio neque, autem beatae illum architecto, excepturi officiis veritatis dolores nobis, delectus aperiam! Eos deleniti magnam saepe, veniam ea illo blanditiis quidem necessitatibus est at fugit, dolorem laboriosam molestias nemo excepturi facere vel, sequi quaerat quos cupiditate a. Praesentium ullam necessitatibus delectus veritatis. Minus molestiae repudiandae libero? Corrupti provident quaerat, minus nesciunt, tempora facilis eum voluptatem reiciendis et aliquid placeat laboriosam excepturi ut perspiciatis? Saepe labore quod at et laboriosam voluptatem eligendi, accusantium numquam quasi. Quis ducimus praesentium porro non ullam quae aliquid dolor!
        </p>
        </div>
        <button onClick={togglecolor} className='clickbutton'style={mystyle}> {btntext}</button>

        </div>
        
        
    </div>;

    
}
export default About;
