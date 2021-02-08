import {LearnerDetails} from "../index";
import {setupComponent,findByTestAttrWeb} from "../../../../../../test-helpers";
import {learnerDetailsProps as props} from "../mocks";

describe('learner actions',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper=setupComponent({component:LearnerDetails,props})
    })

    test('should render name',()=>{
      expect(findByTestAttrWeb({wrapper,attribute:'learner-name'}).props().children).toBe(props.learner.name);
      expect(findByTestAttrWeb({wrapper,attribute:'learner-name'})).toHaveLength(1);
    })

    test('should render username',()=>{
        expect(findByTestAttrWeb({wrapper,attribute:'learner-username'}).props().children).toBe(props.learner.username);
        expect(findByTestAttrWeb({wrapper,attribute:'learner-username'})).toHaveLength(1);
      })

      test('should render action component',()=>{
         expect(findByTestAttrWeb({wrapper,attribute:'comp-learner-actions'}).props()).toEqual(
           expect.objectContaining({
            onDeletePressed:expect.any(Function),
           })
         )
      })

})