import React from "react";
//import CarouselNew from '../components/CarouselNew';
import LoginRegister from "../components/LoginRegister";
import { createGlobalStyle } from "styled-components";
import FormImage from "../../assets/images/form_image.png";

const GlobalStyles = createGlobalStyle`
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .navbar .mainside a{
    background: #FFC543;
    &:hover{
      box-shadow: 2px 2px 20px 0px #FFC543;
    }
  }
  .item-dropdown{
    .dropdown{
      a{
        &:hover{
          background: #FFC543;
        }
      }
    }
  }
  .btn-main{
    background: #FFC543;
    &:hover{
      box-shadow: 2px 2px 20px 0px #FFC543;
    }
  }
  p.lead{
    color: #a2a2a2;
  }
  .navbar .navbar-item .lines{
    border-bottom: 2px solid #FFC543;
  }
  .jumbotron.no-bg{
    height: 100vh;
    overflow: hidden;
    background-repeat: repeat;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  #tsparticles{
    top: 0;
  }
  .text-uppercase.color{
    color: #FFC543;
  }
  .de_count h3 {
    font-size: 36px;
    margin-bottom: 0px;
  }
  .de_count h5{
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    font-size: 30px;
  }
  .box-url{
    text-align: center;
    h4{
      font-size: 16px;
    }
  }
  .de_countdown{
    border: solid 2px #FFC543;
  }
  .author_list_pp, .author_list_pp i, 
  .nft_coll_pp i, .feature-box.style-3 i, 
  footer.footer-light #form_subscribe #btn-subscribe i, 
  #scroll-to-top div{
    background: #FFC543;
  }
  footer.footer-light .subfooter .social-icons span i{
    background: #403f83;
  }
  .author_list_pp:hover img{
    box-shadow: 0px 0px 0px 2px #FFC543;
  }
  .nft__item_action span{
    color: #FFC543;
  }
  .feature-box.style-3 i.wm{
    color: rgba(131,100,226, .1);
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

function LoginRegistrationPage() {
  //zoom out by 80%
  return (
    <section className="container">
      <GlobalStyles />
      <div className="row align-items-center mt-7">
        <div className="col-md-5">
          <div className="form-image p-3">
            <img src={FormImage} />
          </div>
        </div>

        <div className="col-md-7">
          <LoginRegister />
        </div>
      </div>
    </section>
  );
}

export default LoginRegistrationPage;
