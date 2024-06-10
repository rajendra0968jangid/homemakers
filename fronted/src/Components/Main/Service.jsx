import { Link } from "react-router-dom";
function Service() {
  return (
    <>
      <section id="services" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Services</h3>
                <p className="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Link to="/employment">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-briefcase" />
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Employment</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni adipisci eaque autem fugiat! Quia, provident vitae!
                      Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
            <Link to="/skilldev">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="bi bi-card-checklist" />
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Skill Development</h2>
                  <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-md-4">
            <Link to="/leisure">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="bi bi-bar-chart" />
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Photography</h2>
                  <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
              </Link>
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
