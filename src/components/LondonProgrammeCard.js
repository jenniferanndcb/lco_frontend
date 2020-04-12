import React from "react";

const LondonProgrammeCard = (props) => (
  <div className="container">
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <p>{props.programme.title}</p>
        <blockquote className="card-blockprogramme">
          <p>{props.programme.description}</p>
          <footer>
            - link <cite title="Source Title"> {props.programme.url}</cite>
          </footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.upvoteProgramme(props.programme.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.downvoteProgramme(props.programme.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.removeProgramme(props.programme.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.programme.votes}</div>
      </div>
    </div>
  </div>
);

export default LondonProgrammeCard;
