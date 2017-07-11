import module from '../module'
import './radio.less'
let component = {
  template: `<label class="radio">
               <span class="checker" ng-class="{'checked':$ctrl.ngModel==$ctrl.ngValue}">
                 <input ng-required="$ctrl.required" ng-value="$ctrl.ngValue" ng-model="$ctrl.ngModel" name="{{$ctrl.name}}" type="radio">
               </span>
               <span>{{$ctrl.heading}}</span>
             </label>`,
  bindings: {
    heading: '@',
    name: '@',
    ngModel: '=',
    ngValue: '@'
  },
  controller: RadioController
}
RadioController.$inject = ['$element']

function RadioController ($element) {
  let $ctrl = this
  $ctrl.$onInit = function () {
    if ($element.attr('required')) {
      $ctrl.required = true
    }
  }
}
module.component('radio', component)
export default 'radio'
