import picpic from "./assets/meme.jpg"


function Card(){

return(
  <div className="card">
       <img className="card-image" src={picpic} alt="gayness" />
       <h2 className="card-title">Memes</h2>
       <p className="card-text">Check out these hilarious memes!</p>
  </div>
);

}

export default Card