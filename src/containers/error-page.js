import { connect } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const ErrorPage = ({ animationRouteVariant }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Something Error</title>
      </Head>
      <section className="section section__error h-100">
        <div className="container h-100">
          <div className="row h-100 pb-5">
            <div className="col-12 mb-5">
              <div className="h-100 d-flex flex-column text-center justify-content-center">
                <h1 className="cap cap__size-big">
                  Something Error
                </h1>
                <p className="cap cap__size-bigger">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="row pb-5 justify-content-center">
                  <div className="col-lg-auto col-sm-8 col-12 mb-5">
                    <button
                      className="btn btn--primary cap cap__size-normal w-100"
                      onClick={() => router.back()}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = ({ theme: { animationRouteVariant } }) => {
  return { animationRouteVariant };
};

export default connect(mapStateToProps)(ErrorPage);
