import React from "react";
import tripsData from "../tripsData";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

function TripDetail() {
  const { tripId } = useParams();
  const tripFinder = tripsData.find((trip) => trip.id == tripId);
  console.log(`${tripId} : ${tripFinder}`);
  if (!tripFinder) {
    return <Navigate to="/" />;
  }
  return (
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {tripFinder.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={tripFinder.img}
                  alt="..."
                />
                <p className="mb-4">
                  City : {tripFinder.city}
                  <br />
                  Length : {tripFinder.length1}Km
                  <br />
                  Rating : {tripFinder.rating}
                  <br />
                  Difficulty : {tripFinder.difficulty}
                  <br />
                  Details : {tripFinder.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
