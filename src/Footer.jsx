import './index.css';


export default function Footer(){
    return(
        <footer className="bg-dark p-2">
        <div className="container  text-center text-white ">
          <div className=" row">
            <div className="col">
                <h4 style={{fontFamily: "'Dancing Script', cursive"}}>Contact Us</h4>
                <div><a href="http://localhost:3000/" ><span className="bi bi-geo-alt"></span>Location</a></div> 
                <div><a href="http://localhost:3000/"><span className="bi bi-telephone"></span>Call +01 1234567890</a></div>
                <div><a href="http://localhost:3000/"><span className="bi bi-envelope"></span>demo@gmail.com</a></div>
                
            </div>
            <div className="col">
                <h4 style={{fontFamily: "'Dancing Script', cursive"}} >feane</h4>
                <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with </p>
                <span className="bi bi-facebook me-3"></span>
                <span className="bi bi-twitter me-3"></span>
                <span className="bi bi-github me-3"></span>
                <span className="bi bi-instagram me-3"></span>
                <span className="bi bi-linkedin"></span>
            </div>
            <div className="col">
                <h4 style={{fontFamily: "'Dancing Script', cursive"}}>Opening House</h4>
                <p>EveryDay</p>
                <p>10.00 Am -10.00 Pm</p>
            </div>
          </div>
          <br></br>
            <p>© 2025 All Rights Reserved By Free Html Templates</p>
            <p>© Distributed By ThemeWagon</p>
        </div>
        </footer>
    )
}