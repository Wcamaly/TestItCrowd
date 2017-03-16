import actionChangeController from './actionChange.controller';
import './actionChange.css';

const actionChangeComponent = {
    bindings:{
        models:'='
    },
    controller: actionChangeController,
    template : `
        <md-content class="toolbox box box-grey box-padding">
            <div ng-if="$ctrl.models.selected" class="box box-grey box-padding">
                <h3>Selected</h3>
                <md-input-container class="md-block">
                    <label>Title</label>
                    <input md-maxlength="20" required md-no-asterisk name="description" ng-model="$ctrl.models.selected.title">
                </md-input-container>
                <md-input-container class="md-block">
                    <label>Description</label>
                    <input md-maxlength="25" required md-no-asterisk name="description" ng-model="$ctrl.models.selected.description">
                </md-input-container>
            </div>
        </md-content>
    `
}

export default actionChangeComponent;
