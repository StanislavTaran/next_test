export default function MyApp({Component, pageProps}){
    return(
        <>
            <Component {...pageProps} />
            {/*<style jsx global>{`*/}
            {/*    body {*/}
            {/*        font-family: 'Trispace', sans-serif;*/}
            {/*    `}*/}
            {/*</style>*/}
        </>
    )
}