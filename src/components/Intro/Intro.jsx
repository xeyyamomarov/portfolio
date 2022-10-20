import "./intro.scss"
export const Intro=()=>{
    return(
        <div className="intro" id="intro">
           <div className="left">
            <div className="imgContainer">
                <img src="" alt="profile" />
            </div>
            </div> 
           <div className="right">
            <div className="wrapper">
                <h2>Hi There , I'm</h2>
                <h1>Khayyam Omar</h1>
                <h3>Front-end<span> Developer</span></h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="" />
            </a>
            
           </div>

        </div>
    )
}