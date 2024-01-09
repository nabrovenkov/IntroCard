import React from 'react';
import './App.css';
import Card from './components/Card';
import CardWrapper from './styles/CardWrapper.styled';
import GlobalStyled from './styles/GlobalStyled';

function App() {
  return (
		<GlobalStyled>
			<div>"asdfasdfasdflkj"</div>
			<div className='App'>
				<CardWrapper>
					<Card />
				</CardWrapper>
			</div>
		</GlobalStyled>
	)
}

export default App;
