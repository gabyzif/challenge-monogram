'use client';

const Computer = () => {
  const copy = `
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/*Fonts*/}
					<link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
					<link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" />
					<link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
					<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
					<noscript>
						<link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
					</noscript>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
`;

  return (
    <>
      {' '}
      <div className="relative bottom-[160px] w-full lg:bottom-[500px]">
        <div className="relative" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/images/retrocomp.png" className="m-auto" />
          <div className=" absolute bottom-[200px] text-[#44dbff]">
            <pre className="typewriter">
              <code className="typewriter">{copy}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Computer;
