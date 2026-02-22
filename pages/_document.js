import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>
        <link rel='stylesheet' href='https://use.typekit.net/qwn6cbc.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Abel&family=Marcellus&display=swap' rel='stylesheet' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,o,f,js,fjs){
  w['JS-Widget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
  js=d.createElement(s);fjs=d.getElementsByTagName(s)[0];
  js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
})(window,document,'script','mw','https://widget.meitre.com/widget.js?v='+Date.now());
mw('init',{restaurant_widget_id:'bbd9139b86fd4b2a14ac56a6bf9656d1'});
            `.trim(),
          }}
        />
      </Head>
      <body className='relative'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
