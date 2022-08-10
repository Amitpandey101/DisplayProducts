import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    setProduct(await response.json());
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
        
      <h2 style={{textAlign:"center"}}>Product list</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {product.map((currElem) => {
            return (
              <>
                <div className="col-10 col-md-4 mt-5">
                <div className="card mx-4 my-4" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={currElem.category.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-text">
                    {currElem.description}
                    </p>
                  </div>
                </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
    </div>
  );
};

export default Products;
