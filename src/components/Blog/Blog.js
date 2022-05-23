import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import React from 'react';

const Blog = () => {
    return (
        <div style={{ minHeight: '60vh' }} className='container'>
            <div className="row mt-3 mb-4">
                <div className="col-lg-8 col-md-10 w-75 mx-auto">
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle>difference between javascript and node js</MDBCardTitle>
                            <MDBCardText>Javascript is a programming language its run by the helping of browser engine like firefox's (spider monkey) and google chrome's v8 engine.</MDBCardText>
                            <MDBCardText>Node js is a interpreter and environment for javascript whith some specific libraries which javascript program can use separately . Basically, Node js only runs in google chromes v8 engine.</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>

                <div className="col-lg-8 col-md-10 w-75 mx-auto mt-3">
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle>diffrences between sql database and nosql data base</MDBCardTitle>
                            <MDBCardText>sql database is scalable which contains tables and some data column and every single column contains various kind of data. Specially, sql database works with some realtions with foreign key to maintain relation between user to product etc. </MDBCardText>
                            <MDBCardText> nosql database is not scalable. It's provides data in json formate which not contains any relation and it is easy to maintain then other database.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>

                <div className="col-lg-8 col-md-10 w-75 mx-auto mt-3">
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle>What is the purpous of JWT</MDBCardTitle>
                            <MDBCardText>JWT Json Web Token is used for to make users information more secure in client and server side both.The main reason to use this to keep secrete users personal information in server from third party. Because if we secure user information secure from other person nobody can access them from our application.</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </div>
    );
};

export default Blog;