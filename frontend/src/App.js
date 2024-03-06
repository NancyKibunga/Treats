

function App() {
  return (
    <div classNameName ="grid-container">
    <header className="row">
       <div>
        <a className="brand" href="index.html">treats</a>
       </div>
       <div>
        <a href="cart.html">Cart</a>
       </div>
       <div>
        <a href="signin.html">Sign In</a>
       </div>
    </header>
    <main>
        <div className="row center">
            <div className="card">
                <a href="items.html">
               <img className="medium" src="./images/pilau.avif" alt="Pilau"/>
               </a>
               <div className="card-body">
                <a href="items.html">
                    <h2> KFC Pilau</h2>
                </a>
                <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                </div>
                <div className="price"> $50</div>
               </div>
            </div>
            <div className="card">
                <a href="items.html">
               <img className="medium" src="./images/burger.avif" alt="KFC classNameic Burger"/>
               </a>
               <div className="card-body">
                <a href="items.html">
                    <h2> KFC classNameic Burger</h2>
                </a>
                <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                </div>
                <div className="price"> $55</div>
               </div>
            </div>
            <div className="card">
                <a href="items.html">
               <img className="medium" src="./images/grilled chicken.avif" alt="Galitos Famous Grilled Chicken"/>
               </a>
               <div className="card-body">
                <a href="items.html">
                    <h2> Galitos Famous Grilled Chicken</h2>
                </a>
                <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                </div>
                <div className="price"> $80</div>
               </div>
            </div>
            <div className="card">
                <a href="items.html">
               <img className="medium" src="./images/orange juice.avif" alt="Ceys Fresh Orange Juice"/>
               </a>
               <div className="card-body">
                <a href="items.html">
                    <h2> Cey's Fresh Orange Juice</h2>
                </a>
                <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                </div>
                <div className="price"> $15</div>
               </div>
            </div>
            <div className="card">
                <a href="items.html">
               <img className="medium" src="./images/beef stew.avif" alt="Signature Beef Stew"/>
               </a>
               <div className="card-body">
                <a href="items.html">
                    <h2> Mama Rocks Signature Beef Stew</h2>
                </a>
                <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star-half-0"></i></span>
                </div>
                <div className="price"> $45</div>
               </div>
            </div>
            <div className="card">
                <a href="items.html">
               <img className="medium" src="./images/chips.jpg" alt="Periperi Fries"/>
               </a>
               <div className="card-body">
                <a href="items.html">
                    <h2> Pepinos Periperi Chips</h2>
                </a>
                <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i classNameName="fa fa-star-0"></i></span>
                </div>
                <div classNameName="price"> $55</div>
               </div>
            </div>
             </div>        
    </main>
    <footer classNameName="row center">
All rights reserved. Kibunga@2024
    </footer>
</div>
  );
}

export default App;
