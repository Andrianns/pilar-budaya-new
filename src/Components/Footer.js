import React from 'react';
import { useHistory } from 'react-router-dom';

function Footer({ children }) {
  const history = useHistory();

  return (
    <>
      {children}
      <footer className="footer" style={{ backgroundColor: "#000", color: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start align-items-end mb-3 mb-md-0">
              <img
                src="assets/icon/logo.png"
                alt="Logo"
                style={{ width: "110px", height: "auto" }}
              />
            </div>

            {/* Text Section */}
            <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0" style={{ textAlign: "justify" }}>
                Sanggar Tari Pilar Budaya tempat bernaung bagi para pecinta seni
                tari yang berkomitmen untuk melestarikan budaya melalui gerakan.
                Dengan berbagai prestasi yang telah diraih, kami berfokus pada
                pembinaan bakat, dedikasi, dan kecintaan terhadap seni.
                Bergabunglah bersama kami dan jadilah bagian dari perjalanan
                mengukir prestasi serta melestarikan warisan budaya.
              </p>
            </div>

            {/* Address & Social Links Section */}
            <div className="col-12 col-md-3 justify-content-center justify-content-md-end">
              <div style={{ maxWidth: "300px" }}>
                <div className="d-flex align-items-center justify-content-left">
                  <h6>Alamat Sanggar:</h6>
                </div>
                <div className="text-left">
                  <p>Sport Center Puri Gading, Bekasi 17425</p>
                </div>

                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-center justify-content-left">
                    <a
                      href="https://instagram.com/pilarbudaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none d-flex align-items-center justify-content-center"
                      style={{ gap: "8px" }}
                    >
                      <img
                        src="assets/icon/Instagram.png"
                        alt="Instagram"
                        style={{ width: "24px", height: "24px" }}
                      />
                      @pilarbudaya
                    </a>
                  </li>

                  <li className="mb-2 d-flex align-items-center justify-content-left">
                    <a
                      href="https://tiktok.com/@pilarbudaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none d-flex align-items-center justify-content-center"
                      style={{ gap: "8px" }}
                    >
                      <img
                        src="assets/icon/Tiktok.png"
                        alt="TikTok"
                        style={{ width: "24px", height: "24px" }}
                      />
                      @pilarbudaya
                    </a>
                  </li>

                  <li className="d-flex align-items-center justify-content-left">
                    <a
                      href="https://www.youtube.com/@pilarbudaya4333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none d-flex align-items-center justify-content-center"
                      style={{ gap: "8px" }}
                    >
                      <img
                        src="assets/icon/Youtube.png"
                        alt="YouTube"
                        style={{ width: "24px", height: "24px" }}
                      />
                      pilarbudaya4333
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
