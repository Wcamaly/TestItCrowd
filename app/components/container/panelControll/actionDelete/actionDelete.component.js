import actionDeleteController from './actionDelete.controller';
import './actionDelete.css';

const actionDeleteComponent = {
    bindings:{
        models:'<'
    },
    controller: actionDeleteController,
    template : `
        <md-content class="trashcan ">
            <!-- If you use [] as referenced list, the dropped elements will be lost -->
            <h3>Trashcan</h3>
            <ul dnd-list="[]" class="list-uncle">
                <li><img src="./img/ic_delete_black_48dp_2x.png"></li>
            </ul>
     </md-content>
    `
}

export default actionDeleteComponent;
