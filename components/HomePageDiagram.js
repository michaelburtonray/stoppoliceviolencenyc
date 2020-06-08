export default function homePageDiagram() {
  return (
    <div className="wrapper">
      <div className="home-page__diagram-intro" id="why-an-elected-board">
        <p>Why we need an</p>
        <h2>Elected Civilian Review Board</h2>
      </div>
      <img className="home-page__diagram-image" src="//images.ctfassets.net/yvri0pfu4lqm/6TbgN1hNHG4cm2IoKiq0e8/1ee970bf9fa2ebad80afc3ea5f988279/home_infographic.svg" alt="diagram for why we need an Review Board" />
      <style jsx>{`
        .home-page__diagram-intro {
          text-align: center;
        }

        .home-page__diagram-intro p {
          font: 400 italic 36px/1 'Crimson Text';
          margin-bottom: 0;
        }

        .home-page__diagram-intro h2 {
          margin-top: 0;
        }

        .home-page__diagram-image {
          display: block;
          margin: 1em 0;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
