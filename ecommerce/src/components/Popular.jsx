
import Button from "react-bootstrap/Button"

function Popular () {
    return(
        <div className="d-flex justify-content-between container">
            <h1>Popular products</h1>
            <div className="">
                <Button variant="outline-secondary" className="m-2">Camera</Button>
                <Button variant="outline-secondary" className="m-2">Laptops</Button>
                <Button variant="outline-secondary" className="m-2">Tablets</Button>
                <Button variant="outline-secondary" className="m-2">Mouse</Button>
            </div>
        </div>
    )
}
export default Popular



