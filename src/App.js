import './App.css';
import { ReactionButton } from './postReaction.js';

function App() {
  return (
    <div className="App">
		<div className='reaction-display'>
			{/* Random text to make things look a bit less cramped. */}
			<div className='post'>
			Aliqua sunt sunt dolor duis sunt qui aliqua reprehenderit elit proident voluptate dolor eu. Commodo est nulla occaecat in ex pariatur enim dolore. Fugiat pariatur ea pariatur pariatur sint enim tempor. Irure aliqua commodo anim adipisicing non cupidatat qui Lorem nostrud pariatur cupidatat. Dolor cupidatat ullamco dolor quis commodo sint est officia minim esse. Elit anim dolor cillum ad adipisicing cupidatat do in quis commodo eiusmod. Officia minim enim irure aliquip fugiat. Laborum nisi magna sit aliquip cillum exercitation deserunt aliquip nostrud nisi occaecat.
			</div>
			<ReactionButton></ReactionButton>
		</div>
    </div>
  );
}

export default App;
