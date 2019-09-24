import React from 'react';
import { Helmet } from 'react-helmet';

export default (props) => (
    <div className='App'>
    	<Helmet>
    		{/* Global site tag (gtag.js) - Google Analytics */}
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-148541646-1"></script>
			<script>
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());

			  gtag('config', 'UA-148541646-1');
			</script>

    		<title>
    			{props.PageTitle}
    		</title>
    		<link rel="canonical" href={`http://dillionmegida.com${props.PageLink}`} /> {/* edit */}

			<meta name='description' content={props.PageDescription} /> {/* edit */}
			<meta name="keywords" content={props.PageKeywords} /> {/* edit */}
			<meta name='author' content='Dillion Megida' />

			<meta name="robots" content="index, follow" />
			<meta name="theme-color" content="#8a6047" />
			
			<link rel='icon' href='https://res.cloudinary.com/dillionmegida/image/upload/v1567211530/images/website/favicon.png' />

			<meta property="og:image" content="https://res.cloudinary.com/dillionmegida/image/upload/v1567211823/images/website/deee.jpg" />
			<meta property="og:url" content="https://dillionmegida.com" />
			<meta property="og:type" content="article" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@iamdillion" />
			<meta name="twitter:title" content={props.TwitterCardTtitle} /> {/* edit */}
			<meta name="twitter:description" content={props.TwitterCardDescription} /> {/* edit */}
			{/* <meta name="twitter:image" content="https://res.cloudinary.com/dillionmegida/image/upload/v1567211823/images/website/deee.jpg" /> */}
			<meta name="twitter:image" content={props.TwitterBlogImage} />
			<meta name="twitter:creator" content="iamdillion" />

			<meta name="referrer" content="origin-when-crossorigin" />

			{/* For fontawesome */}
			<script src="https://use.fontawesome.com/ec33c661f9.js"></script>
		</Helmet>
        {props.children}
    </div>
)