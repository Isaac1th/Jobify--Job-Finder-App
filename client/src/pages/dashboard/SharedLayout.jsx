import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/LandingPage';
import { Navbar, BigSideBar, SmallSideBar } from '../../components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;