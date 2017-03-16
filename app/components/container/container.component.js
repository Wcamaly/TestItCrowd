import containerController from './container.controller';
import './container.css';

const containerComponent = {
	controller: containerController,
	template :`
		<md-content layout="row" layout-align="" class="container-panel">
			<md-content flex="80">
				<container-drag-and-drop models="$ctrl.scope.models"></container-drag-and-drop>
			</md-content>
			<md-content flex ="20">
				<panel-controll models="$ctrl.scope.models"></panel-controll>
			</md-content>
		</md-content>	
	`
}

export default containerComponent;