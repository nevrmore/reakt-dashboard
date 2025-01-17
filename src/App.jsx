import { Suspense } from 'react';

import BusyIndicator from './components/common/BusyIndicator';
import Football from './components/Football/Football';
import Footer from './components/Footer';
import Todo from './components/Todo/Todo';
import Weather from './components/Weather/Weather';
import PageLayout from './components/layout/PageLayout';

import './App.scss';

const App = () => {
	return (
		<Suspense fallback={<BusyIndicator />}>
			<PageLayout>
				<div className="row">
					<div className="col-md-4 p-0 left-side">
						<Weather />
					</div>
					<div className="row col-8 right-side components">
						<Todo />
						<Football />
					</div>
				</div>
			</PageLayout>
			<Footer />
		</Suspense>
	);
};

export default App;
