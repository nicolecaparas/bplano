import { Component } from "react";

export default class FamilyMemberRow extends Component {
    render() {
        return (
            <tr>
            <td><i class="fa fa-plus"></i> | <i class="fa fa-pencil"></i> | <i class="fa fa-trash"></i></td>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold">John Doe</div>
                  <div class="text-sm opacity-50">Father</div>
                </div>
              </div>
            </td>
    
            <td>
              {this.props.giftName}
            </td>
    
            <td className='text-center'>$0.00</td>
            <td className='text-center'>
            <p>
                <i class="fa fa-chevron-circle-down"></i> 1 <i class="fa fa-chevron-circle-up"></i>
                </p>
            </td>
            <td className='text-center'>
              <label>
                <input type="checkbox" class="checkbox"></input>
              </label>
            </td>
            <td className='text-center'>Add Note</td>
          </tr>
        )
    }
}