import React from 'react';
import { Helmet } from 'react-helmet';

export default (props) => (
    <div className='App'>
    	<Helmet>
			<html lang="en" />
    		<title>
    			{props.PageTitle}
    		</title>
    		<link rel="canonical" href={`https://dillionmegida.com${props.PageLink}`} /> {/* edit */}

			<meta name='description' content={props.PageDescription} /> {/* edit */}
			<meta name="keywords" content={props.PageKeywords} /> {/* edit */}
			<meta name='author' content='Dillion Megida' />

			<meta name="robots" content="index, follow" />
			<meta name="theme-color" content="#130327" />
			
			<link rel='icon' href='https://res.cloudinary.com/dillionmegida/image/upload/v1570493725/images/website/favicon.png' />

			{/* <meta property="og:image" content="https://res.cloudinary.com/dillionmegida/image/upload/v1567211823/images/website/deee.jpg" /> */}


			{/* TwiiterBlogImage is the card image for og and twitter cards specified from each pages. For blogs, it either chooses the favicon image or the blog cover. For other pages, it is simply my profile picture */ }
			<meta property="og:image" content={props.TwitterBlogImage} />
			<meta property="og:url" content="https://dillionmegida.com" />
			<meta property="og:type" content="article" />

			{/* This selects the summary card by default but if the LargeTwitterCard props is specified, it users the bigger card
			I implemented bigger cards for articles with covers */}
			{
				props.LargeTwitterCard ?
				<meta name="twitter:card" content="summary_large_image" /> :
				<meta name="twitter:card" content="summary" />

			}
			
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