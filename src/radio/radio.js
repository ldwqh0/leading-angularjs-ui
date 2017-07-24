import module from '../module'
import './radio.less'

let component = {
  template: `<label class="radio">
               <span class="checker" ng-class="{'checked': $ctrl.ngModel==$ctrl.ngValue}">
                 <input ng-disabled="$ctrl.disabled" ng-required="$ctrl.required" ng-value="$ctrl.ngValue" value="$ctrl.value" ng-model="$ctrl.ngModel" name="{{$ctrl.name}}" type="radio">
               </span>
               <span>{{$ctrl.heading}}</span>
             </label>`,
  bindings: {
    heading: '@',
    name: '@',
    ngModel: '=',
    ngValue: '<?',
    value: '@?'
  },
  controller: RadioController
}
RadioController.$inject = ['$scope', '$element']

function RadioController ($scope, $element) {
  let $ctrl = this
  $ctrl.disabled = false
  $ctrl.ngValue = true
  $ctrl.$onInit = function () {
  }

  $scope.$watch(() => {
    return $element.attr('required')
  }, v => {
    $ctrl.required = v === 'required'
  })

  $scope.$watch(() => {
    return $element.attr('disabled')
  }, v => {
    $ctrl.disabled = v === 'disabled'
  })
}

module.component('radio', component)
export default 'radio'
