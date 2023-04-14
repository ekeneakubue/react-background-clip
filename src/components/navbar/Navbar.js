import './navbar.css'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg  navbar-light mynavbar fixed-top">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler text-primary" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
                <ul class="navbar-nav">                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tour</a>
                    </li>  
                    <li class="nav-item">
                        <a class="nav-link" href="#">Gallery</a>
                    </li>    
                    <li class="nav-item">
                        <a class="nav-link" href="#">Book Now</a>
                    </li>                 
                </ul>
            </div>
        </nav>
    </div>
  )
}
