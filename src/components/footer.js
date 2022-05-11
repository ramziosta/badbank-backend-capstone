import '../styles/footer.css'
export default function Footer() {
  return (
    <>
    <div className="footer-gray footer">
    <div className="footer-custom">
      <div className="footer-lists">
        <div className="footer-list-wrap">
          <h6 className="ftr-hdr">Toll Free</h6>
          <ul className="ftr-links-sub">
            <li>800-867-5309</li>
          </ul>
          <h6 className="ftr-hdr">International</h6>
          <ul className="ftr-links-sub">
            <li><a href="http://www.ramziosta.com" rel="nofollow">France</a></li>
            <li><a href="https://www.ramziosta.com" rel="nofollow">United Kingdom</a></li>
          </ul>
        </div>
     
        <div className="footer-list-wrap">
          <h6 className="ftr-hdr">Customer Service</h6>
          <ul className="ftr-links-sub">
            <li><a href="/#" rel="nofollow">Contact Us</a></li>
            <li><a href="/#" rel="nofollow">Careers</a></li>
            <li><a href="/#" rel="nofollow">Credit Cards &amp; Electronic Payments</a></li>
            <li><a href="/#" rel="nofollow">Privacy</a></li>
            <li><a href="/#" rel="nofollow">International Accounts</a></li>
            <li><a href="/~/egift-cards/" rel="nofollow">Security</a></li>
            <li><a href="/help/faq.html" rel="nofollow">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-list-wrap">
          <h6 className="ftr-hdr">About ramziosta.com</h6>
          <ul className="ftr-links-sub">
            <li><a href="http://ramziosta.com" rel="nofollow">About Me</a></li>
            <li><a href="http://ramziosta.com" rel="nofollow">Locations</a></li>
            <li><a href="http://ramziosta.com" rel="nofollow">Portfolio</a></li>
            <li><a href="http://ramziosta.com" rel="nofollow">Business &amp; Trade Sales</a></li>
            <li><a href="http://ramziosta.com" rel="nofollow">Affiliate Program</a></li>
            <li><a href="mailto:ramziosta@gmail.com" rel="nofollow"><strong style={{color:"red"}}>Hire Me</strong></a></li>
            <li><a href="http://ramziosta.com" rel="nofollow">Ramzi Osta</a></li>
          </ul>
        </div>
       
        <div className="footer-list-wrap">
          <h6 className="ftr-hdr">My Account</h6>
          <ul className="ftr-links-sub">
            <div rule="!loggedin">
              <li className="ftr-Login"><span className="link login-trigger">Access My Account</span></li>
              <li><span className="link">Application Status</span></li>
            </div>
            <div rule="loggedin">
              <li className="ftr-Login"><span className="link ftr-access-my-account">Create New Account</span></li>
              <li><span className="link" >Tradings</span></li>
            </div>
          </ul>
        </div>
     
      </div>

      <div className="footer-email">
        <h6 className="ftr-hdr">Sign up for exclusive offers </h6>
        <div id="ftr-email" className="ftr-email-form" style={{marginTop:"1rem"}}>
          <form id="ftrEmailForm" method="post" action="http://ramziosta.com">
            <div className="error">Please enter a valid email address</div>
            <input type="text" name="email_address_" id="ftrEmailInput" className="input" placeholder="Enter email address" />
          
            <input type="submit" className="button" value="SUBMIT" />
            <input type="hidden" name="country_iso2" value="" />
            <input type="hidden" name="language_iso2" value="en" />
            <input type="hidden" name="site_domain" value="http://ramziosta.com" />
            <input type="hidden" name="email_acq_source" value="01-000001" />
            <input type="hidden" name="email_acq_date" value="" id="ftr-email-date" />
            <input type="hidden" name="brand_id" value="http://ramziosta.com" />
            <input type="hidden" name="_ri_" value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk" />
          </form>
        </div>
  
        <div className="ftr-email-privacy-policy"></div>
      </div>
  
      <div className="footer-social">
        <h6 className="ftr-hdr">Follow Us</h6>
        <ul>
          <li>
            <a href="https://www.facebook.com/ramseyosta" title="Facebook" >
              <img width="24" height="24" alt="Like us on Facebook" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png" />
            </a>
          </li>
          <li>
            <a href="mailto:ramziosta@gmail.com" title="Google+" >
              <img width="24" height="24" alt="Follow us on Google+" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png" />
            </a>
          </li>
          <li>
            <a target="_blank" href="http://instagram.com/ramziosta/" rel="noreferrer">
              <img width="24" height="24" alt="Follow us on Instagram" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/ostaramzi" title="Twitter" >
              <img width="67" alt="Follow us on Twitter" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-legal">
        <p>&copy; Ramzi Osta. All Rights Reserved. | <a href="/help/privacy-policy.html" rel="nofollow">Privacy Policy</a> | <a href="/help/terms-of-use.html" rel="nofollow">Terms of Use</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Terms of Sale</a></p>
        <p>Ramzi Osta trademarks or registered trademarks of Ramzi Osta.</p>
        <p>Various aspects of this website are covered by issued US patent No. 7,973,796 and other pending patent applications.</p>
        <p>Equal Housing Lender</p>
      </div>
     
      <div className="footer-payment">
        <ul>
          <li className="ftr-stella">
            <span title="Stella Service" ></span>
          </li>
          <li>
            <span ><img border="0" alt="HACKER SAFE certified sites prevent over 99.9% of hacker crime." src="https://images.scanalert.com/meter/www.art.com/31.gif" /></span>
          </li>
          <li className="ftr-bbb">
            <span title="BBB" ></span>
          </li>
        </ul>
      </div>
 
    </div>
  
  </div>

    </>
  );
}
