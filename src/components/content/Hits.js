export default function Hits(props){
    console.log(props)
    return <div className="row">
             { props.hits.map((item) =>
              <div  className="col-4">
                <div className="card">
                  <img src={item.images[0]}
                    className="card-img-top img-fluid" alt={item.title} />
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{item.price} руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
             )}
            </div>
}