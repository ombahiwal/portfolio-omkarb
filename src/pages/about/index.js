import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  resume,
  services
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My résumé</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {/*<Row className="sec_sp">*/}
        {/*  <Col lg="5">*/}
        {/*    <h3 className="color_sec py-4">{dataabout.title}</h3>*/}
        {/*  </Col>*/}
        {/*  <Col lg="7" className="d-flex align-items-center">*/}
        {/*    <div>*/}
        {/*      <p>{dataabout.aboutme}</p>*/}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        {/*<Row className="sec_sp">*/}
        {/*  <Col lang="5">*/}
        {/*    <h3 className="color_sec py-4">services</h3>*/}
        {/*  </Col>*/}
        {/*  <Col lg="7">*/}
        {/*    {services.map((data, i) => {*/}
        {/*      return (*/}
        {/*        <div className="service_ py-4" key={i}>*/}
        {/*          <h5 className="service__title">{data.title}</h5>*/}
        {/*          <p className="service_desc">{data.description}</p>*/}
        {/*        </div>*/}
        {/*      );*/}
        {/*    })}*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        <Row className="mt-5">
          <Col><h3>Academics</h3></Col>
        </Row>
        {resume.Academics.map((data, i)=>{
          return(
            <Row className="mt-3" key={i}>
              <Col>
                <h5>{data.year}</h5>
              </Col>
              <Col>
                <p>{data.title}</p>
              </Col>
              <Col>
                <p>{data.credit}</p>
              </Col>
            </Row>)
        })}

        <Row className="mt-5">
          <Col><h4>Awards & Achievements</h4></Col>
        </Row>
        {resume.Achievements.map((yearData, i) => (
            Object.entries(yearData).map(([year, dataArr]) => (<React.Fragment>
                <Row className="mt-2" key={year}>
                  <Col>
                    <h5>{year}</h5>
                  </Col>
                </Row>
                  {dataArr.map((data, j) => (
                      <Row className="mt-2" key={j}>
                        <Col>{" "}</Col>
                        <Col>{data.title}</Col>
                        <Col>{data.credit}</Col>
                      </Row>
                  ))}
            </React.Fragment>))
        ))}
        <Row className="mt-5">
          <Col><h4>Work Experience</h4></Col>
        </Row>
        {resume.Work.map((yearData, i) => (
            Object.entries(yearData).map(([year, dataArr]) => (<React.Fragment>
              <Row className="mt-3" key={year}>
                <Col>
                  <h5>{year}</h5>
                </Col>
              </Row>
              {dataArr.map((data, j) => (
                  <Row className="mt-3" key={j}>
                    <Col>{data.month}</Col>
                    <Col><h5>{data.title} <sup>{data.type}</sup></h5><h6>{data.org}</h6> <h6>{data.location}</h6></Col>
                    <Col>{data.desc.type === 'list' && <table>
                      {data.desc.entries.map((entry, i)=>{
                        //TODO: Make table instead of list
                        return(<tr className={"mt-2"} key={i}>
                                <td><h5>{entry.subtitle}</h5></td>
                                <td>{entry.text}</td>
                        </tr>)
                      })}</table>}
                    </Col>
                  </Row>
              ))}
            </React.Fragment>))
        ))}
        <Row className="sec_sp">
          <Col className="m-2">Pdf Verision </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
