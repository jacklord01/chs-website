/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png"></link>
				<meta name="theme-color" content="#204971" />
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-PZKWXLXX9M"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-P7GTVSGR');
              			`,
					}}
				/>

				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-PZKWXLXX9M');
							gtag('event', 'gtagjsloaded', {'name':'hmshamim'});
              			`,
					}}
				/>

			</Head>
			<body>
				<Main />
				<NextScript />

				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7GTVSGR"
					height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
				</noscript>
			</body>
		</Html>
	);
}
