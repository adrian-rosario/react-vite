import Header from "./header";
import Footer from "./footer";
import PropTypes from 'prop-types';

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default function Layout({children}){
  return(
    <>
    <Header />
    <main>
    {children}
    </main>
    <Footer />
    </>
  )
}