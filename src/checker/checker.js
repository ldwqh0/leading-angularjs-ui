// import angular from 'angular'
import './style.less'
import module from '../module'

let component = {
  template: `<label class="checkbox">
               <span class="checker" ng-class="{checked:$ctrl.state}">
                 <input type="checkbox" ng-model="$ctrl.state">
               </span>
               <span>{{$ctrl.heading}}</span>
             </label>`,
  controller: CheckerController,
  bindings: {
    ngModel: '=',
    ngTrueValue: '<?',
    heading: '@'
  }
}

CheckerController.inject = ['$scope']
function CheckerController ($scope) {
  let ctrl = this
  ctrl.state = false
  $scope.$watch('$ctrl.ngModel', v => {
    if (ctrl.ngTrueValue) {
      if (ctrl.ngTrueValue === v) {
        ctrl.state = true
      } else {
        ctrl.state = false
      }
    } else {
      ctrl.state = v
    }
  })

  $scope.$watch('$ctrl.state', v => {
    if (ctrl.ngTrueValue) {
      if (v) {
        ctrl.ngModel = ctrl.ngTrueValue
      } else {
        ctrl.ngModel = undefined
      }
    } else {
      ctrl.ngModel = v
    }

  })
}

module.component('checker', component)

export default 'checker'
