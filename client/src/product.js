import TshirtImg from "./demo-tshirt.173097bd.svg";

function Product() {
  return (
    <>
    <div>
      <h2>T-Shirt</h2>
      <p>this printed t-shirt</p>
      <img src={TshirtImg}/>
      <button>Pay</button>
    </div>
      
    </>
  );
}

export default Product;
