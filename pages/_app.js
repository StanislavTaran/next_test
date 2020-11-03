import NextNprogress from 'nextjs-progressbar';
import App from 'next/app';
import { wrapper } from '../redux/store'
import {END} from 'redux-saga';


class WrappedApp extends App {
     // 1. Wait for all page actions to dispatch
    static getInitialProps = async ({Component, ctx}) => {
     const pageProps = {
         ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
     };

     // 2. Stop the saga if on server
     if (ctx.req) {
         ctx.store.dispatch(END);
         await ctx.store.sagaTask.toPromise();
     }

     // 3. Return props
     return {
         pageProps,
     };
 };
     render() {
        const {Component, pageProps} = this.props;
    return(
        <>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height="5"
            />
            <Component {...pageProps} />
        </>
    )}
}

export default wrapper.withRedux(WrappedApp)