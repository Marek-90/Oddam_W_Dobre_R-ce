import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import app from "../../Config/config";
import Loading from "../Loading";

const Foundations = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);

    app
      .firestore()
      .collection("foundations")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setData((prevState) => [...prevState, doc.data()]);
        });
      })
      .then(() => setPending(false));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setPageNumber(Math.ceil(data.length / 3));
    }
  }, [data]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const listItem =
    data.length > 0 ? (
      data.slice(3 * page - 3, 3 * page).map((el, i) => {
        return (
          <li key={i}>
            <div className="col-poz">
              <p>Fundacja "{el.Name}"</p>
              <p>{el.Needs}</p>
            </div>
            <p className="col-poz-next">Cel i misja: {el.Goal}</p>
          </li>
        );
      })
    ) : (
      <>
        <li>Brak fundacji w bazie danych</li>
      </>
    );

  return (
    <div className="foundations">
      <div className="foundations__text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </div>
      <ul>
        {pending ? (
          <h1>
            <Loading />
          </h1>
        ) : (
          listItem
        )}
        {data.length > 3 ? (
          <Pagination count={pageNumber} page={page} onChange={handleChange} />
        ) : null}
      </ul>
    </div>
  );
};
export default Foundations;
