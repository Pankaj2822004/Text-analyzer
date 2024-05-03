// import React , {useState} from 'react'

export default function About(props) {
  // const [text , settext] = useState('Enable Dark  Mode')  
// const [myStyle , setMyStyle] = useState({
//   color: "black" ,
//   backgroundColor: "white"
// })

// const toggleStyle=()=> {
// if(myStyle.color == "white"){
//   setMyStyle({
// color: "black" ,
// backgroundColor: "white"
// })
// settext("Enable dark mode") ;
// }
// else{
//   setMyStyle({
//     color: "white" ,
//     backgroundColor: "black"
//     })

//     settext("Enable Light mode") ;
// }
let myStyle={
color: props.mode=== 'dark'?'white' : '#4a4545' ,
backgroundColor: props.mode=== 'dark'?'#4a4545' : 'white' ,
border: '2px solid' ,
borderColor: props.mode==='dark'?'white' : '#4a4545'
}
  

  return (
    <>
      
        <div className='container' style={myStyle}>
    <h1 className='my-2'>About us</h1>
    <div className="accordion" id="accordionPanelsStayOpenExample">
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <strong>Analyze Your Text</strong>
    </button>
  </h2>
  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
    <div className="accordion-body">
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <strong>Free to use</strong>
    </button>
  </h2>
  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
    <div className="accordion-body">
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <strong>Browse Compatibility</strong>
    </button>
  </h2>
  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
    <div className="accordion-body">
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
</div>
{/* <div className="container my-3">
<button type='button' className="btn btn-primary"  > {text}</button>


</div> */}

    </div>
    </>
  )
  }

