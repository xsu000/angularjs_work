import { log, Ramda } from "../common/util";
import template from './user-page.html';

const name = 'userPage';  // <user-page></user-page>
const bindings = {};
const controller = function(userService, filterFilter,$scope) {
  'ngInject'
  let decoration = {symbol: '*'};
  this.userTitle = 'I am user.......';
  this.users = [];
  this.allUsers = [];
  this.nameFilter = '';
  userService.fetch().then(resp => {

    log(this);
    this.users = resp.data;
    this.allUsers = resp.data;
    log(this.users);
    var murl=window.location.search;
    var index=murl.indexOf('=');
    var ss=murl.substring(index+1);
    var myv;
    var hide;
    
    if(ss == "admin"){
        hide=true;
        myv=false;
    }else{
        myv=false;
    }
    
    //显示
    this.myv=true;
    this.hideShow=function(){
      myv=true;
      this.myv=myv;
      }
    this.ss=ss;
    this.myv=myv;
    this.hide=hide;
    //全选
    $scope.selectAll=true;
    $scope.selectAll = function(m){
      for(var i=0;i< $scope.persons.length; i++){
          if(m==true){
              $scope.person[i].state=true;
            }else{
              $scope.person[i].state=false;
          }
      }
  };
  
  });
  this.filterUserNameByRamda = function () {
    this.users = Ramda.filter(user => {
      return Ramda.contains(this.nameFilter, user.name);
    }, this.allUsers);
  };
  this.filterUserName = function () {
    this.users = filterFilter(this.allUsers, this.nameFilter);
  };
};

export default {
  name,
  template,
  bindings,
  controller,
}
