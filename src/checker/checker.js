// import angular from 'angular'
import './style.less'
import module from '../module'

let component = {
  template: `<label class="checkbox">
               <span class="checker" ng-class="{checked:$ctrl.state}">
                 <input type="checkbox" ng-model="$ctrl.state" ng-change="$ctrl.change()" ng-disabled="$ctrl.disabled" />
               </span>
               <span>{{$ctrl.heading}}</span>
             </label>`,
  controller: CheckerController,
  bindings: {
    ngModel: '=',
    ngTrueValue: '<?',
    heading: '@',
    ngFalseValue: '<?',
    ngChange: '&'
  }
}

CheckerController.inject = ['$scope', '$element']

function CheckerController ($scope, $element) {
  let ctrl = this
  ctrl.state = false
  ctrl.ngTrueValue = true
  $scope.$watch('$ctrl.ngModel', v => {
    ctrl.state = ctrl.ngTrueValue === v
  })

  $scope.$watch(() => {
    return $element.attr('disabled')
  }, v => {
    ctrl.disabled = v === 'disabled'
  })

  /**
   * 值改变事件
   */
  ctrl.change = function () {
    if (ctrl.state) {
      ctrl.ngModel = ctrl.ngTrueValue
    } else {
      ctrl.ngModel = ctrl.ngFalseValue
    }
    ctrl.ngChange()
  }
}

module.component('checker', component)

export default 'checker'
