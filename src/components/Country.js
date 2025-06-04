


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Country(props) {
  const { data } = props;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm" style={{ width: "100%" }}>
        <img
          src={data.flags?.png}
          className="card-img-top"
          alt={data.flags.png?data.flags.png:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nuvola_unknown_flag.svg/2048px-Nuvola_unknown_flag.svg.png"}
          style={{ height: "180px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">
            <strong>Capital:</strong> {data.capital || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
}
