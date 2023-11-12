import "./Registration.css";

const Registration = () => {
  return (
    <main className="registration-main">
      <Registration_Header />
    </main>
  );
};

function Registration_Header() {
  return (
    <section class="">
      <div class="px-4 py-5 px-md-5 text-center text-lg-start background">
        <div class="container">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 display-3 fw-bold ls-tight">
                Building bridges <br />
                <span class="text-primary">to higher education</span>
              </h1>
              <p class="p_text">
                Embarking on the journey from high school to college can be both
                exciting and daunting. Recognizing the need for guidance in this
                transformative process, GradConnect has emerged as a pioneering
                initiative that connects high school students with college
                student mentors, fostering a supportive and informative
                environment for the college application journey.
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card">
                <div class="card-body py-5 px-md-5">
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example1">
                            First name
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example2"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example2">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example3">
                        Email address
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example4">
                        Password
                      </label>
                    </div>

                    <button
                      type="submit"
                      class="signup-button btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>

                    <div class="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-google"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
