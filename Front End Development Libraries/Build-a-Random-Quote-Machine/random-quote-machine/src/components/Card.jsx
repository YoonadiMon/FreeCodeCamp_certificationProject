import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import twitter from './../assets/twitter-brands-solid.svg'
import tumblr from './../assets/tumblr-brands-solid.svg'

function Card(prop) {
  return(

    <div id='quote-box'
      style={{
        color: prop.randomColor
      }}
    >
      <FontAwesomeIcon id='icon' className='fade' icon={faQuoteLeft} style={{color: prop.randomColor,}} />
      <span id="text" className='fade' >
        {prop.quote.quote}
      </span>
      <div id="author" className='fade' >
        - {prop.quote.author}
      </div>
      <div id="footer">
        <div id="links">
          <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Few%20things%20can%20help%20an%20individual%20more%20than%20to%20place%20responsibility%20on%20him%2C%20and%20to%20let%20him%20know%20that%20you%20trust%20him.%22%20Booker%20T.%20Washington">
            <img src={twitter} alt="twitter logo"
              style={{
                backgroundColor: prop.randomColor              
              }}
            />
          </a>
          <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Booker%20T.%20Washington&content=Few%20things%20can%20help%20an%20individual%20more%20than%20to%20place%20responsibility%20on%20him%2C%20and%20to%20let%20him%20know%20that%20you%20trust%20him.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button">
            <img src={tumblr} alt="twitter logo"
              style={{
                backgroundColor: prop.randomColor
              }}
            />
          </a>
          
        </div>
        
        <button onClick={prop.change}
          style={{
            backgroundColor: prop.randomColor
          }}
        >
          New quote
        </button>
      </div>
    </div>
  )
}

export default Card