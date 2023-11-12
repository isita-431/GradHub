import "./Home.css";
import axios from "axios";
import mentorIcon from "./mentoring.png";
import videoIcon from "./cam-recorder.png";
import essayIcon from "./wirte.png";

const handleLogin = () => {
  axios
    .get("/profile", { withCredentials: true })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const Home = () => {
  return (
    <main className="home-main">
      <About />
    </main>
  );
};

function About() {
  return (
    <>
      <section class="w-100 d-inline-block text-center align-items-center">
        <div class="pt-5 m-5 d-flex justify-content-center">
          <div>
            <h1 class="logo ">GradHub</h1>
          </div>
        </div>
        <br />
        <div class="container my-5">
          <div class="d-flex justify-content-center align-items-center">
            <div class="col-8">
              <div class="search">
                <i class="fa fa-search"></i>

                <input
                  type="text"
                  id="search-bar"
                  class="form-control"
                  placeholder="Search for Name, School, Major..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="spacer"></div>
      <div class="row connections mt-4 pb-4 rounded-3 justify-content-center">
        <div class=" bg-white card col-7 me-3 rounded-3">
          <h3 class="m-2">My Connections</h3>
          <div class="row row-cols-2">
            <div class="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div class="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://wallpapers.com/images/featured/cute-aesthetic-profile-pictures-pjfl391j3q0f7rlz.jpg"
                    class="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div class="text-container ">
                    <p class="p-0 mb-2">
                      <b>
                        <span class="names ">Sarah Jane</span>
                      </b>
                      <br />
                      Rice University &#8226; Computer Science
                      <br />
                      Houston, Texas
                    </p>
                  </div>
                  <div class="open-to-icons d-flex justify-content-evenly my-1">
                    <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        class=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div class="content-container ">
                    <p class="pb-2 mb-2">Interests & Involvements</p>
                    <div class="row d-flex justify-content-evenly align-items-center ">
                      <div class="col ">
                        <p>Data Science</p>
                      </div>
                      <div class="col ">
                        <p>Machine Learning</p>
                      </div>
                      <div class="col ">
                        <p>AI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div class="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                    class="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div class="text-container ">
                    <p class="p-0 mb-2">
                      <b>
                        <span class="names ">Roy Liao</span>
                      </b>
                      <br />
                      Rice University &#8226; Computer Science
                      <br />
                      Houston, Texas
                    </p>
                  </div>
                  <div class="open-to-icons d-flex justify-content-evenly my-1">
                    <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        class=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div class="content-container ">
                    <p class="pb-2 mb-2">Interests & Involvements</p>
                    <div class="row d-flex justify-content-evenly align-items-center ">
                      <div class="col ">
                        <p>Java</p>
                      </div>
                      <div class="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div class="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div class="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/600w/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
                    class="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div class="text-container ">
                    <p class="p-0 mb-2">
                      <b>
                        <span class="names ">Lilly Ohr</span>
                      </b>
                      <br />
                      Rice University &#8226; Computer Science
                      <br />
                      Houston, Texas
                    </p>
                  </div>
                  <div class="open-to-icons d-flex justify-content-evenly my-1">
                    <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        class=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div class="content-container ">
                    <p class="pb-2 mb-2">Interests & Involvements</p>
                    <div class="row d-flex justify-content-evenly align-items-center ">
                      <div class="col ">
                        <p>Python</p>
                      </div>
                      <div class="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div class="col ">
                        <p>C++</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div class="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://pub-static.fotor.com/assets/projects/pages/7252c2b86395453a836cdd57b13b3d39/300w/fotor-7c742084acd7491aae9923279bdc3218.jpg"
                    class="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div class="text-container ">
                    <p class="p-0 mb-2">
                      <b>
                        <span class="names ">Myles Grant</span>
                      </b>
                      <br />
                      Rice University &#8226; Computer Science
                      <br />
                      Houston, Texas
                    </p>
                  </div>
                  <div class="open-to-icons d-flex justify-content-evenly my-1">
                    <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        class=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div class="content-container ">
                    <p class="pb-2 mb-2">Interests & Involvements</p>
                    <div class="row d-flex justify-content-evenly align-items-center ">
                      <div class="col ">
                        <p>React</p>
                      </div>
                      <div class="col ">
                        <p>Docker</p>
                      </div>
                      <div class="col ">
                        <p>Fullstack</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 bg-secondary rounded-3 card">
          <i>
            <h3 class="m-2">Pending Connections</h3>
          </i>
          <div class="row row-cols 1">
            <div class="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow-sm">
                <div class="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp"
                    class="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div class="text-container ">
                    <p class="p-0 mb-2">
                      <b>
                        <span class="names ">Mike White</span>
                      </b>
                      <br />
                      <span class="last-online">
                        <i>Last Online - Tuesday</i>
                      </span>
                      <br />
                      Harvard &#8226; Chemistry
                      <br />
                      Albuquerque, NM
                    </p>
                  </div>
                  <div class="open-to-icons d-flex justify-content-evenly my-1">
                    <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        class=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Message
                  </button>

                  <div class="content-container ">
                    <p class="pb-2 mb-2">Interests & Involvements</p>
                    <div class="row d-flex justify-content-evenly align-items-center ">
                      <div class="col ">
                        <p>Pharmaceuticals</p>
                      </div>
                      <div class="col ">
                        <p>Cancer Treatment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col mb-3">
            <div className="grow container bg-white rounded-3 card shadow-sm">
              <div class="d-flex flex-column text-center justify-content-center align-items-center">
                <img
                  src="https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4"
                  class="rounded-circle border p-2 my-2 mt-3 "
                  width="150"
                ></img>
                <div class="text-container ">
                  <p class="p-0 mb-2">
                    <b>
                      <span class="names ">Saul Goodman</span>
                    </b>
                    <br />
                    <span class="last-online">
                      <i>Last Online - Friday</i>
                    </span>
                    <br />
                    University of Illinois Urbana Champaign &#8226; Computer
                    Science
                    <br />
                    Illinois
                  </p>
                </div>
                <div class="open-to-icons d-flex justify-content-evenly my-1">
                  <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                    <img
                      src={mentorIcon}
                      class=""
                      width="30"
                      height="auto"
                      title="Mentoring"
                    />
                  </div>
                  <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                    <img src={videoIcon} width="30" height="auto" />
                  </div>
                  <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                    <img src={essayIcon} width="30" height="auto" />
                  </div>
                </div>

                <button
                  type="button"
                  class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                >
                  Message
                </button>

                <div class="content-container ">
                  <p class="pb-2 mb-2">Interests & Involvements</p>
                  <div class="row d-flex justify-content-evenly align-items-center ">
                    <div class="col ">
                      <p>Maker</p>
                    </div>
                    <div class="col ">
                      <p>Full Stack Developer</p>
                    </div>
                    <div class="col ">
                      <p>Robotics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //       <h1>High School Networking App</h1>
//       <button onClick={handleLogin}>Login</button> */}
    </>
  );
}

export default Home;
