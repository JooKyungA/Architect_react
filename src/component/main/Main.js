import Header from '../common/Header';
import Visual from './Visual';
import AboutMain from './AboutMain';
import PortfolioMain from './PortfolioMain';
import Awards from './Awards';
import Blog from './Blog';
import Scroll from './Scroll';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<AboutMain />
			<PortfolioMain />
			<Awards />
			<Blog />
			<Scroll />
		</main>
	);
}

export default Main;
