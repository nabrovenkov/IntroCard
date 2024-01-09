import React from 'react';
import './App.css';
import Card from './components/Card';
import CardWrapper from './styles/CardWrapper.styled';

function App() {
  return (
			<div className='App'>
				<CardWrapper>
					<Card />
				</CardWrapper>
			</div>
	)
}

export default App;
