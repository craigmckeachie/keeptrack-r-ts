import React from 'react';

export default function HomePage() {
  return (
    <div className="row page">
      <div className="col-sm-offset-3 col-sm-6" style={{ marginTop: '30px' }}>
        <h1>The All-In-One Toolkit for Working Remotely.</h1>
        <h3>
          Anything and everything, regardless of unimportance! The experiences
          factor is social-network-based. The interfaces factor is
          plug-and-play, blog-based. What does it really mean to evolve
          "strategically"? What do we scale? Anything and everything, regardless
          of reconditeness! What does the commonly-used standard industry
          commonly-accepted term "project management" really mean?
        </h3>

        <button className="button large primary">Give it a Try</button>

        <blockquote cite="Dale Behetam, Easy Rentals" className="doc">
          We can see exactly what needs to be done and when. We're much more
          efficient.
        </blockquote>
      </div>
    </div>
  );
}
