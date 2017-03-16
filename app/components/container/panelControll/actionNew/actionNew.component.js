import actionNewController from './actionNew.controller';
import './actionNew.css';

const actionNewComponent = {
    bindings:{
        models:'='
    },
    controller: actionNewController,
    template : `
        <md-content class="toolbox box box-grey box-padding">
        <h3>New Elements</h3>
        <ul class="list-uncle">
            <!-- The toolbox only allows to copy objects, not move it. After a new
                 element was created, dnd-copied is invoked and we generate the next id -->
            <li ng-repeat="item in $ctrl.models.templates"
                dnd-draggable="item"
                dnd-effect-allowed="copy"
                dnd-copied="item.id = item.id + 1"
                >
                <md-button class="md-raised md-primary button" >{{item.type}}</md-button>
            </li>
        </ul>
    </md-content>
    `
}

export default actionNewComponent;
