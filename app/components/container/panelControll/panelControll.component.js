import panelControllController from './panelControll.controller';
import './panelControll.css';

const panelControllComponent = {
	bindings:{
		models:'='
	},
	controller: panelControllController,
	template : `
		<md-content layout="column" layout-aling="" class="padding-align" >
			<action-new models="$ctrl.models"></action-new>
			<action-change models="$ctrl.models"></action-change>
			<action-Delete></action-Delete>
		</md-content>
	`
}

export default panelControllComponent;