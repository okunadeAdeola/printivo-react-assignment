import printivoimg from '../assets/images/printivoimage.svg'
import cartimg from '../assets/images/cartimage.svg'
import search from '../assets/images/searchimage.svg'
import card from '../assets/images/Card3_n9kqin.png'

const Body = () => {
  return (
    <div style={{backgroundColor:"#ece8d9", height:"520px", width:"100%"}}>
        <div style={{display: "flex", gap:"29px"}}>
     <span><img src={printivoimg} alt="" style={{marginLeft:"100px", marginTop:"30px", width:"150px"}}/></span>
      <span style={{fontSize:"15px", fontWeight:"bold", marginTop:"40px", marginLeft:"210px", color:"#384a62"}}>All Products</span>
      <span style={{fontSize:"15px", fontWeight:"bold", marginTop:"40px"}}><a href="https://printivo.com/reseller" style={{textDecoration:"none", color:"#384a62"}}>Become a Reseller</a></span>
      <span style={{fontSize:"15px", fontWeight:"bold", marginTop:"40px"}}><a href="https://merch.printivo.com/" style={{textDecoration:"none", color:"#384a62"}}>Merch Store</a></span>
      <span style={{fontSize:"15px", fontWeight:"bold", marginTop:"40px"}}><a href="https://printivo.com/sell" style={{textDecoration:"none", color:"#384a62"}}>MarketPlace</a></span>
      <span style={{fontSize:"15px", fontWeight:"bold", marginTop:"40px"}}><a href="https://printivo.com/members/sign-up" style={{textDecoration:"none", color:"#d88182"}}>Sign in</a></span>
      <span style={{fontSize:"15px", fontWeight:"bold", marginTop:"40px"}}><a href="" style={{textDecoration:"none", color:"#384a62"}}>Create Account</a></span>
      <span style={{fontSize:"15px", fontWeight:"bold", marginTop:"38px"}}><a href="https://printivo.com/cart"><img src={cartimg} alt="" /></a></span>
      </div>
      <div style={{display:"flex",marginTop:"40px" }}>
       <div style={{width:"60%"}}>
     <p style={{color:"RGB(56, 74, 98)", fontFamily:"dm serif display serif", fontSize:"67.2px", fontWeight:"bold", textAlign:"start", marginLeft:"88px"}}>Quality Prints</p>
     <p style={{color:"#708095", fontFamily:"SF Pro, sans-serif", fontSize:"25px", textAlign:"start", marginLeft:"88px", fontWeight:"bold"}}>Shipped to your Doorstep</p>
     <br />
     <p style={{color:"#384a62", fontFamily:"SF Pro, sans-serif", fontSize:"16px", textAlign:"start", marginLeft:"90px", fontWeight:"bold"}}>What would you like to print today? </p>
     <form action="">
            <input type="text" name="" id="" placeholder='Search for Business cards,T-shirts,Mugs, etc' style={{width:"550px", height:"80px", border:"none", marginLeft:"88px", borderRadius:"5px", outline:"none"}}/>
            <img src={search} alt="" style={{marginLeft:"-40px"}}/>
     </form>
       </div>
       <div style={{width:"40%"}}>
     <img src={card} alt="" style={{width:"80%", marginLeft:"108px", marginTop:"70px"}} />
       </div>
      </div>
    </div>
  )
}

export default Body
