import {LearnerActions} from "../index";
import {setupComponent,findByTestAttrWeb} from "../../../../../../test-helpers";
import {learnerActionsProps as props} from "../mocks";

describe('learner actions component',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper=setupComponent({component:LearnerActions,props})
    })

    test('should invoke callback when delete is clicked',()=>{
        const button=findByTestAttrWeb({wrapper,attribute:'btn-delete-learner'});
        button.simulate('click');
        expect(props.onDeletePressed).toHaveBeenCalledTimes(1);
    })

})