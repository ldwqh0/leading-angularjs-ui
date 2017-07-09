#checker组件

## 使用方法
在html中
```html
<checker ng-model="$ctrl.value" ng-true-value="'text'"></checker>
```
在js中
```javascript
ctrl.value='text'

```
## 配置项说明
ng-model: 数据绑定属性。不能省略
ng-true-value: 当复选框选中的时候，ng-model的值。可以省略，如果省略该属性，ng-model会变成boolean类型的值
